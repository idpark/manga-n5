#!/usr/bin/env python3
"""Generate storybook illustrations using Gemini API."""
import os, sys, time, json, base64, re, urllib.request, urllib.error

API_KEY = os.environ.get("GEMINI_API_KEY", "")
if not API_KEY:
    print("Set GEMINI_API_KEY environment variable")
    sys.exit(1)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
IMAGES_DIR = os.path.join(BASE_DIR, "images")

# Panel descriptions for each story
PANELS = {
    "momotaro": [
        "An elderly Japanese grandmother washing clothes by a river, peaceful countryside, cherry blossoms",
        "A giant glowing peach floating down a river with sparkles, grandmother watching in amazement",
        "Elderly couple cutting open a giant peach, a baby boy emerging with golden light",
        "A strong young boy named Momotaro eating rice dumplings, preparing for adventure",
        "Momotaro walking on a mountain path, meeting a loyal dog who bows to him",
        "Momotaro with a dog and a monkey joining the group on a forest path",
        "Momotaro's party with a dog, monkey and pheasant, marching toward a dark island",
        "A fierce battle scene on Oni island, Momotaro fighting red and blue demons",
        "Defeated oni demons surrendering, treasure chests open with gold and jewels",
        "Momotaro returning home triumphantly with treasure, elderly grandparents welcoming him"
    ],
    "kaguyahime": [
        "An old bamboo cutter finding a glowing bamboo stalk in a moonlit bamboo forest",
        "A tiny beautiful baby girl sitting inside a split bamboo, glowing with golden light",
        "A stunningly beautiful young woman in elegant kimono, Kaguya-hime grown up",
        "Five noble suitors lined up presenting gifts to Kaguya-hime at a grand mansion",
        "Kaguya-hime gazing sadly at the full moon from a veranda, tears in her eyes",
        "Kaguya-hime telling the old couple she must return to the moon, all three crying",
        "The Emperor's army surrounding the house with bows, trying to prevent her departure",
        "Celestial beings descending from the moon on clouds with heavenly music",
        "Kaguya-hime in a feathered robe ascending to the moon, looking back with tears",
        "The old bamboo cutter couple watching the moon sadly, smoke rising from Mt. Fuji"
    ],
    "urashima": [
        "A kind young fisherman named Urashima Taro saving a sea turtle on the beach",
        "Urashima Taro riding on the back of a giant sea turtle through the ocean",
        "A magnificent underwater Dragon Palace with coral and colorful fish",
        "Beautiful Princess Otohime welcoming Urashima Taro in an elegant underwater hall",
        "Urashima Taro enjoying a feast with dancing fish and sea creatures",
        "Urashima Taro happy but then becoming homesick, looking upward toward the surface",
        "Princess Otohime giving Urashima a jeweled box (tamatebako), warning him not to open it",
        "Urashima Taro returning to shore, finding everything changed, old buildings replaced",
        "Urashima Taro opening the forbidden jeweled box, white smoke pouring out",
        "Urashima Taro transformed into an old man with white hair, standing alone on the beach"
    ],
    "kintaro": [
        "A strong baby boy with red skin living in the mountains with his mother",
        "Young Kintaro wrestling playfully with a large brown bear in a mountain clearing",
        "Kintaro chopping down a large tree with his bare hands, forest animals watching",
        "Kintaro catching a huge fish from a mountain stream with his bare hands",
        "Kintaro making animal friends - bear, deer, rabbit, monkey playing together",
        "A samurai warrior discovering Kintaro's incredible strength in the mountains",
        "Kintaro leaving the mountain, waving goodbye to his animal friends and mother",
        "Kintaro as a grown samurai warrior serving a lord, standing tall and proud"
    ],
    "issunboshi": [
        "A tiny one-inch boy (Issun-boshi) standing on his parents' palm, they look happy",
        "Tiny Issun-boshi sailing down a river in a rice bowl, using a chopstick as an oar",
        "Issun-boshi arriving at a grand capital city, looking up at huge buildings in awe",
        "Issun-boshi serving a noble lord, standing on a table, bowing respectfully",
        "Issun-boshi protecting a beautiful princess from a giant red oni demon",
        "Tiny Issun-boshi bravely fighting the oni, jumping and stabbing with his needle sword",
        "The oni running away in pain, dropping a magical golden hammer (uchide no kozuchi)",
        "The princess waving the magic hammer, Issun-boshi growing to full human size with sparkles",
        "Issun-boshi as a tall handsome young man, standing with the princess in a garden",
        "Issun-boshi and the princess getting married, celebration with family, happy ending"
    ]
}

STYLE_PREFIX = "Japanese children's storybook illustration, soft watercolor style, warm and gentle colors, simple and cute character design, Studio Ghibli inspired, no text in image: "

def generate_image(prompt, output_path):
    """Generate image using Gemini API."""
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key={API_KEY}"

    full_prompt = STYLE_PREFIX + prompt

    payload = json.dumps({
        "contents": [{
            "parts": [{"text": f"Generate an illustration: {full_prompt}"}]
        }],
        "generationConfig": {
            "responseModalities": ["IMAGE", "TEXT"]
        }
    }).encode("utf-8")

    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})

    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = json.loads(resp.read().decode("utf-8"))

        # Extract image from response
        for candidate in data.get("candidates", []):
            for part in candidate.get("content", {}).get("parts", []):
                if "inlineData" in part:
                    img_data = base64.b64decode(part["inlineData"]["data"])
                    mime = part["inlineData"].get("mimeType", "image/png")
                    ext = "webp" if "webp" in mime else "png" if "png" in mime else "jpg"
                    # Save with correct extension
                    final_path = output_path.rsplit(".", 1)[0] + "." + ext
                    with open(final_path, "wb") as f:
                        f.write(img_data)
                    print(f"  ✅ Saved: {final_path} ({len(img_data)//1024}KB)")
                    return final_path

        print(f"  ❌ No image in response: {json.dumps(data)[:200]}")
        return None

    except urllib.error.HTTPError as e:
        error_body = e.read().decode("utf-8")
        print(f"  ❌ HTTP {e.code}: {error_body[:200]}")
        return None
    except Exception as e:
        print(f"  ❌ Error: {e}")
        return None

def main():
    os.makedirs(IMAGES_DIR, exist_ok=True)

    total = sum(len(panels) for panels in PANELS.values())
    done = 0
    failed = 0

    print(f"🎨 Generating {total} illustrations...\n")

    for story_id, panels in PANELS.items():
        story_dir = os.path.join(IMAGES_DIR, story_id)
        os.makedirs(story_dir, exist_ok=True)
        print(f"\n📖 {story_id} ({len(panels)} panels)")

        for i, desc in enumerate(panels):
            panel_num = i + 1
            output_path = os.path.join(story_dir, f"panel-{panel_num}.png")

            # Skip if already exists
            existing = [f for f in os.listdir(story_dir) if f.startswith(f"panel-{panel_num}.")]
            if existing:
                print(f"  ⏭ panel-{panel_num} already exists, skipping")
                done += 1
                continue

            print(f"  🖌 Generating panel {panel_num}/{len(panels)}: {desc[:50]}...")
            result = generate_image(desc, output_path)

            if result:
                done += 1
            else:
                failed += 1

            # Rate limiting - wait between requests
            time.sleep(5)

    print(f"\n{'='*40}")
    print(f"✅ Done: {done}/{total} | ❌ Failed: {failed}")

    if failed == 0:
        print("🎉 All images generated successfully!")

if __name__ == "__main__":
    main()

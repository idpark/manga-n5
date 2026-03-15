export const STORIES = [
  // ============================================================
  // 1. 桃太郎 (Momotaro) - 10 panels
  // ============================================================
  {
    id: "momotaro",
    title: "桃太郎",
    titleReading: "ももたろう",
    titleKr: "모모타로 (복숭아 소년)",
    icon: "🍑",
    panels: [
      {
        id: 1,
        scene: "river",
        illustration: "👵🏻🧺🌊",
        image: "images/momotaro/panel-1.jpg",
        characters: ["おばあさん"],
        jp: "むかしむかし、おばあさんが　かわで　せんたくを　していました。",
        reading: "むかしむかし、おばあさんが　かわで　せんたくを　していました。",
        kr: "옛날 옛적에, 할머니가 강에서 빨래를 하고 있었습니다.",
        vocab: [
          { word: "むかしむかし", reading: "", meaning: "옛날 옛적에" },
          { word: "川", reading: "かわ", meaning: "강" },
          { word: "洗濯", reading: "せんたく", meaning: "빨래" }
        ],
        grammar: "~ていました (과거 진행형)",
        sfx: null
      },
      {
        id: 2,
        scene: "river",
        illustration: "🍑🌊✨",
        image: "images/momotaro/panel-2.jpg",
        characters: ["おばあさん"],
        jp: "大きい　ももが　かわから　ながれて　きました。",
        reading: "おおきい　ももが　かわから　ながれて　きました。",
        kr: "큰 복숭아가 강에서 떠내려왔습니다.",
        vocab: [
          { word: "大きい", reading: "おおきい", meaning: "큰" },
          { word: "桃", reading: "もも", meaning: "복숭아" },
          { word: "流れる", reading: "ながれる", meaning: "흐르다, 떠내려오다" }
        ],
        grammar: "~てきました (방향: 이쪽으로 왔다)",
        sfx: "ドンブラコ ドンブラコ"
      },
      {
        id: 3,
        scene: "home",
        illustration: "🍑🔪👶🏻✨",
        image: "images/momotaro/panel-3.jpg",
        characters: ["おばあさん", "おじいさん"],
        jp: "ももを　きると、なかから　おとこのこが　うまれました。",
        reading: "ももを　きると、なかから　おとこのこが　うまれました。",
        kr: "복숭아를 자르자, 안에서 남자아이가 태어났습니다.",
        vocab: [
          { word: "切る", reading: "きる", meaning: "자르다" },
          { word: "中", reading: "なか", meaning: "안, 속" },
          { word: "男の子", reading: "おとこのこ", meaning: "남자아이" },
          { word: "生まれる", reading: "うまれる", meaning: "태어나다" }
        ],
        grammar: "~と (조건: ~하자, ~하면)",
        sfx: "パカッ！"
      },
      {
        id: 4,
        scene: "home",
        illustration: "👴🏻👵🏻👦🏻🍚",
        image: "images/momotaro/panel-4.jpg",
        characters: ["ももたろう", "おばあさん", "おじいさん"],
        jp: "おじいさんと　おばあさんは　その子を　「ももたろう」と　なまえを　つけました。",
        reading: "おじいさんと　おばあさんは　そのこを　「ももたろう」と　なまえを　つけました。",
        kr: "할아버지와 할머니는 그 아이에게 '모모타로'라는 이름을 지어주었습니다.",
        vocab: [
          { word: "おじいさん", reading: "", meaning: "할아버지" },
          { word: "名前", reading: "なまえ", meaning: "이름" },
          { word: "つける", reading: "", meaning: "붙이다, 짓다" }
        ],
        grammar: "~と (인용: ~라고)",
        sfx: null
      },
      {
        id: 5,
        scene: "mountain",
        illustration: "👦🏻🎒🏔️💪",
        image: "images/momotaro/panel-5.jpg",
        characters: ["ももたろう"],
        jp: "ももたろうは　大きく　なって、おにを　たいじしに　いきます。",
        reading: "ももたろうは　おおきく　なって、おにを　たいじしに　いきます。",
        kr: "모모타로는 크게 자라서, 도깨비를 퇴치하러 갑니다.",
        vocab: [
          { word: "大きく", reading: "おおきく", meaning: "크게" },
          { word: "鬼", reading: "おに", meaning: "도깨비, 오니" },
          { word: "退治", reading: "たいじ", meaning: "퇴치" },
          { word: "行く", reading: "いく", meaning: "가다" }
        ],
        grammar: "~しに行きます (목적: ~하러 가다)",
        sfx: null
      },
      {
        id: 6,
        scene: "mountain",
        illustration: "👦🏻🍡🐕",
        image: "images/momotaro/panel-6.jpg",
        characters: ["ももたろう", "いぬ"],
        jp: "みちで　いぬに　あいました。「きびだんごを　ください。おともします。」",
        reading: "みちで　いぬに　あいました。「きびだんごを　ください。おともします。」",
        kr: "길에서 개를 만났습니다. \"경단을 주세요. 함께 가겠습니다.\"",
        vocab: [
          { word: "道", reading: "みち", meaning: "길" },
          { word: "犬", reading: "いぬ", meaning: "개" },
          { word: "会う", reading: "あう", meaning: "만나다" },
          { word: "きびだんご", reading: "", meaning: "수수 경단" }
        ],
        grammar: "~てください (부탁: ~해 주세요)",
        sfx: null
      },
      {
        id: 7,
        scene: "mountain",
        illustration: "👦🏻🐕🐒🐦",
        image: "images/momotaro/panel-7.jpg",
        characters: ["ももたろう", "いぬ", "さる", "きじ"],
        jp: "さると　きじも　なかまに　なりました。みんなで　おにがしまへ　いきます。",
        reading: "さると　きじも　なかまに　なりました。みんなで　おにがしまへ　いきます。",
        kr: "원숭이와 꿩도 동료가 되었습니다. 모두 함께 도깨비 섬으로 갑니다.",
        vocab: [
          { word: "猿", reading: "さる", meaning: "원숭이" },
          { word: "きじ", reading: "", meaning: "꿩" },
          { word: "仲間", reading: "なかま", meaning: "동료, 친구" },
          { word: "みんな", reading: "", meaning: "모두" }
        ],
        grammar: "~も (도, 또한)",
        sfx: null
      },
      {
        id: 8,
        scene: "battle",
        illustration: "👦🏻⚔️👹💥",
        image: "images/momotaro/panel-8.jpg",
        characters: ["ももたろう", "おに"],
        jp: "おにがしまで　おにと　たたかいました。ももたろうは　とても　つよいです。",
        reading: "おにがしまで　おにと　たたかいました。ももたろうは　とても　つよいです。",
        kr: "도깨비 섬에서 도깨비와 싸웠습니다. 모모타로는 매우 강합니다.",
        vocab: [
          { word: "戦う", reading: "たたかう", meaning: "싸우다" },
          { word: "とても", reading: "", meaning: "매우, 아주" },
          { word: "強い", reading: "つよい", meaning: "강한, 센" }
        ],
        grammar: "~と (상대: ~와 함께)",
        sfx: "ドカッ！バキッ！"
      },
      {
        id: 9,
        scene: "battle",
        illustration: "👹🙇‍♂️💎🎁",
        image: "images/momotaro/panel-9.jpg",
        characters: ["ももたろう", "おに"],
        jp: "おには　まけました。「ごめんなさい。たからものを　あげます。」",
        reading: "おには　まけました。「ごめんなさい。たからものを　あげます。」",
        kr: "도깨비는 졌습니다. \"죄송합니다. 보물을 드리겠습니다.\"",
        vocab: [
          { word: "負ける", reading: "まける", meaning: "지다" },
          { word: "ごめんなさい", reading: "", meaning: "죄송합니다" },
          { word: "宝物", reading: "たからもの", meaning: "보물" },
          { word: "あげる", reading: "", meaning: "주다" }
        ],
        grammar: "~を あげます (남에게 주다)",
        sfx: null
      },
      {
        id: 10,
        scene: "home",
        illustration: "👦🏻👴🏻👵🏻💎🎉",
        image: "images/momotaro/panel-10.jpg",
        characters: ["ももたろう", "おじいさん", "おばあさん"],
        jp: "ももたろうは　たからものを　もって、いえに　かえりました。みんな　しあわせです。",
        reading: "ももたろうは　たからものを　もって、いえに　かえりました。みんな　しあわせです。",
        kr: "모모타로는 보물을 가지고 집으로 돌아왔습니다. 모두 행복합니다.",
        vocab: [
          { word: "持つ", reading: "もつ", meaning: "가지다, 들다" },
          { word: "家", reading: "いえ", meaning: "집" },
          { word: "帰る", reading: "かえる", meaning: "돌아가다" },
          { word: "幸せ", reading: "しあわせ", meaning: "행복" }
        ],
        grammar: "~て (연결: ~하고, ~해서)",
        sfx: null
      }
    ],
    quiz: [
      {
        q: "おばあさんは　どこで　せんたくを　していましたか？",
        choices: ["川で", "山で", "家で", "学校で"],
        answer: 0,
        kr: "할머니는 어디에서 빨래를 하고 있었습니까?"
      },
      {
        q: "ももから　なにが　うまれましたか？",
        choices: ["犬", "男の子", "女の子", "鬼"],
        answer: 1,
        kr: "복숭아에서 무엇이 태어났습니까?"
      },
      {
        q: "ももたろうの　なかまは　だれですか？",
        choices: ["犬と猫ときじ", "犬と猿ときじ", "犬と猿と鳥", "猫と猿ときじ"],
        answer: 1,
        kr: "모모타로의 동료는 누구입니까?"
      },
      {
        q: "「つよい」は　かんこくごで　なんですか？",
        choices: ["약한", "강한", "큰", "작은"],
        answer: 1,
        kr: "'つよい'는 한국어로 무엇입니까?"
      },
      {
        q: "おには　なにを　あげましたか？",
        choices: ["きびだんご", "もも", "宝物", "お金"],
        answer: 2,
        kr: "도깨비는 무엇을 주었습니까?"
      },
      {
        q: "「帰る」の　いみは　なんですか？",
        choices: ["가다", "오다", "돌아가다", "나가다"],
        answer: 2,
        kr: "'帰る'의 뜻은 무엇입니까?"
      }
    ]
  },

  // ============================================================
  // 2. かぐや姫 (Kaguya-hime) - 10 panels
  // ============================================================
  {
    id: "kaguyahime",
    title: "かぐや姫",
    titleReading: "かぐやひめ",
    titleKr: "카구야 공주 (대나무 공주)",
    icon: "🎋",
    panels: [
      {
        id: 1,
        scene: "forest",
        illustration: "👴🏻🎋✨",
        image: "images/kaguyahime/panel-1.jpg",
        characters: ["おじいさん"],
        jp: "むかしむかし、おじいさんが　やまで　たけを　きっていました。",
        reading: "むかしむかし、おじいさんが　やまで　たけを　きっていました。",
        kr: "옛날 옛적에, 할아버지가 산에서 대나무를 베고 있었습니다.",
        vocab: [
          { word: "山", reading: "やま", meaning: "산" },
          { word: "竹", reading: "たけ", meaning: "대나무" },
          { word: "切る", reading: "きる", meaning: "자르다, 베다" }
        ],
        grammar: "~ていました (과거 진행형)",
        sfx: null
      },
      {
        id: 2,
        scene: "forest",
        illustration: "🎋💡👶🏻✨",
        image: "images/kaguyahime/panel-2.jpg",
        characters: ["おじいさん"],
        jp: "ひかる　たけの　なかに、小さい　おんなのこが　いました。",
        reading: "ひかる　たけの　なかに、ちいさい　おんなのこが　いました。",
        kr: "빛나는 대나무 안에 작은 여자아이가 있었습니다.",
        vocab: [
          { word: "光る", reading: "ひかる", meaning: "빛나다" },
          { word: "小さい", reading: "ちいさい", meaning: "작은" },
          { word: "女の子", reading: "おんなのこ", meaning: "여자아이" }
        ],
        grammar: "~に いました (존재: ~에 있었다 - 생물)",
        sfx: null
      },
      {
        id: 3,
        scene: "home",
        illustration: "👴🏻👵🏻👶🏻🏠",
        image: "images/kaguyahime/panel-3.jpg",
        characters: ["おじいさん", "おばあさん"],
        jp: "おじいさんと　おばあさんは　その子を　「かぐやひめ」と　よびました。",
        reading: "おじいさんと　おばあさんは　そのこを　「かぐやひめ」と　よびました。",
        kr: "할아버지와 할머니는 그 아이를 '카구야히메'라고 불렀습니다.",
        vocab: [
          { word: "呼ぶ", reading: "よぶ", meaning: "부르다" },
          { word: "姫", reading: "ひめ", meaning: "공주" }
        ],
        grammar: "~と よびました (인용: ~라고 불렀다)",
        sfx: null
      },
      {
        id: 4,
        scene: "home",
        illustration: "👩🏻✨🌸💫",
        image: "images/kaguyahime/panel-4.jpg",
        characters: ["かぐやひめ"],
        jp: "かぐやひめは　とても　きれいに　なりました。みんなが　すきに　なりました。",
        reading: "かぐやひめは　とても　きれいに　なりました。みんなが　すきに　なりました。",
        kr: "카구야히메는 매우 예뻐졌습니다. 모두가 좋아하게 되었습니다.",
        vocab: [
          { word: "きれい", reading: "", meaning: "예쁜, 깨끗한" },
          { word: "好き", reading: "すき", meaning: "좋아하는" },
          { word: "なる", reading: "", meaning: "되다" }
        ],
        grammar: "~に なりました (변화: ~해졌다)",
        sfx: null
      },
      {
        id: 5,
        scene: "palace",
        illustration: "🤴🤴🤴👩🏻",
        image: "images/kaguyahime/panel-5.jpg",
        characters: ["かぐやひめ", "わかもの"],
        jp: "五人の　わかものが　「けっこんしてください」と　いいました。",
        reading: "ごにんの　わかものが　「けっこんしてください」と　いいました。",
        kr: "다섯 명의 젊은이가 \"결혼해 주세요\"라고 말했습니다.",
        vocab: [
          { word: "五人", reading: "ごにん", meaning: "다섯 명" },
          { word: "若者", reading: "わかもの", meaning: "젊은이" },
          { word: "結婚", reading: "けっこん", meaning: "결혼" },
          { word: "言う", reading: "いう", meaning: "말하다" }
        ],
        grammar: "~てください (부탁: ~해 주세요)",
        sfx: null
      },
      {
        id: 6,
        scene: "mountain",
        illustration: "👩🏻🚫💎🏔️",
        image: "images/kaguyahime/panel-6.jpg",
        characters: ["かぐやひめ"],
        jp: "かぐやひめは　むずかしい　もんだいを　だしました。だれも　できませんでした。",
        reading: "かぐやひめは　むずかしい　もんだいを　だしました。だれも　できませんでした。",
        kr: "카구야히메는 어려운 문제를 냈습니다. 아무도 할 수 없었습니다.",
        vocab: [
          { word: "難しい", reading: "むずかしい", meaning: "어려운" },
          { word: "問題", reading: "もんだい", meaning: "문제" },
          { word: "出す", reading: "だす", meaning: "내다" },
          { word: "だれも", reading: "", meaning: "아무도" }
        ],
        grammar: "~も ~ませんでした (부정: 아무도 ~하지 않았다)",
        sfx: null
      },
      {
        id: 7,
        scene: "home",
        illustration: "👩🏻😢🌙",
        image: "images/kaguyahime/panel-7.jpg",
        characters: ["かぐやひめ", "おじいさん"],
        jp: "ある日、かぐやひめは　つきを　みて、ないていました。",
        reading: "あるひ、かぐやひめは　つきを　みて、ないていました。",
        kr: "어느 날, 카구야히메는 달을 보며 울고 있었습니다.",
        vocab: [
          { word: "ある日", reading: "あるひ", meaning: "어느 날" },
          { word: "月", reading: "つき", meaning: "달" },
          { word: "見る", reading: "みる", meaning: "보다" },
          { word: "泣く", reading: "なく", meaning: "울다" }
        ],
        grammar: "~て、~ていました (연결 + 진행)",
        sfx: null
      },
      {
        id: 8,
        scene: "home",
        illustration: "👩🏻💬👴🏻👵🏻😢",
        image: "images/kaguyahime/panel-8.jpg",
        characters: ["かぐやひめ", "おじいさん", "おばあさん"],
        jp: "「わたしは　つきから　きました。もうすぐ　つきに　かえります。」",
        reading: "「わたしは　つきから　きました。もうすぐ　つきに　かえります。」",
        kr: "\"저는 달에서 왔습니다. 곧 달로 돌아갑니다.\"",
        vocab: [
          { word: "私", reading: "わたし", meaning: "나, 저" },
          { word: "もうすぐ", reading: "", meaning: "곧, 이제 곧" },
          { word: "来る", reading: "くる", meaning: "오다" },
          { word: "帰る", reading: "かえる", meaning: "돌아가다" }
        ],
        grammar: "~から きました (출신: ~에서 왔다)",
        sfx: null
      },
      {
        id: 9,
        scene: "sky",
        illustration: "🌕☁️👼✨",
        image: "images/kaguyahime/panel-9.jpg",
        characters: ["かぐやひめ", "つきのひと"],
        jp: "つきから　ひとが　きました。かぐやひめを　むかえに　きました。",
        reading: "つきから　ひとが　きました。かぐやひめを　むかえに　きました。",
        kr: "달에서 사람들이 왔습니다. 카구야히메를 마중하러 왔습니다.",
        vocab: [
          { word: "人", reading: "ひと", meaning: "사람" },
          { word: "迎える", reading: "むかえる", meaning: "마중하다" }
        ],
        grammar: "~に きました (목적: ~하러 왔다)",
        sfx: null
      },
      {
        id: 10,
        scene: "sky",
        illustration: "🌕👩🏻💫😢👴🏻",
        image: "images/kaguyahime/panel-10.jpg",
        characters: ["かぐやひめ", "おじいさん", "おばあさん"],
        jp: "かぐやひめは　つきに　かえりました。おじいさんと　おばあさんは　とても　かなしかったです。",
        reading: "かぐやひめは　つきに　かえりました。おじいさんと　おばあさんは　とても　かなしかったです。",
        kr: "카구야히메는 달로 돌아갔습니다. 할아버지와 할머니는 매우 슬펐습니다.",
        vocab: [
          { word: "帰る", reading: "かえる", meaning: "돌아가다" },
          { word: "悲しい", reading: "かなしい", meaning: "슬픈" }
        ],
        grammar: "~かったです (い형용사 과거)",
        sfx: null
      }
    ],
    quiz: [
      {
        q: "おじいさんは　なにを　きっていましたか？",
        choices: ["木", "竹", "花", "草"],
        answer: 1,
        kr: "할아버지는 무엇을 베고 있었습니까?"
      },
      {
        q: "かぐやひめは　どこから　きましたか？",
        choices: ["山から", "海から", "月から", "川から"],
        answer: 2,
        kr: "카구야히메는 어디에서 왔습니까?"
      },
      {
        q: "なんにんの　わかものが　きましたか？",
        choices: ["三人", "四人", "五人", "六人"],
        answer: 2,
        kr: "몇 명의 젊은이가 왔습니까?"
      },
      {
        q: "「かなしい」は　かんこくごで　なんですか？",
        choices: ["기쁜", "슬픈", "화난", "무서운"],
        answer: 1,
        kr: "'かなしい'는 한국어로 무엇입니까?"
      },
      {
        q: "かぐやひめは　さいごに　どこに　いきましたか？",
        choices: ["山", "海", "月", "家"],
        answer: 2,
        kr: "카구야히메는 마지막에 어디로 갔습니까?"
      },
      {
        q: "「きれい」の　いみは　なんですか？",
        choices: ["무서운", "큰", "예쁜", "작은"],
        answer: 2,
        kr: "'きれい'의 뜻은 무엇입니까?"
      }
    ]
  },

  // ============================================================
  // 3. 浦島太郎 (Urashima Taro) - 10 panels
  // ============================================================
  {
    id: "urashimataro",
    title: "浦島太郎",
    titleReading: "うらしまたろう",
    titleKr: "우라시마 타로 (거북이와 용궁)",
    icon: "🐢",
    panels: [
      {
        id: 1,
        scene: "sea",
        illustration: "👨🏻🎣🌊🐢",
        image: "images/kaguyahime/panel-1.jpg",
        characters: ["うらしまたろう"],
        jp: "むかしむかし、うらしまたろうは　うみの　ちかくに　すんでいました。",
        reading: "むかしむかし、うらしまたろうは　うみの　ちかくに　すんでいました。",
        kr: "옛날 옛적에, 우라시마 타로는 바다 근처에 살고 있었습니다.",
        vocab: [
          { word: "海", reading: "うみ", meaning: "바다" },
          { word: "近く", reading: "ちかく", meaning: "근처" },
          { word: "住む", reading: "すむ", meaning: "살다" }
        ],
        grammar: "~ていました (과거 상태)",
        sfx: null
      },
      {
        id: 2,
        scene: "sea",
        illustration: "👨🏻🤚🐢😢",
        image: "images/kaguyahime/panel-2.jpg",
        characters: ["うらしまたろう", "かめ"],
        jp: "ある日、こどもたちが　かめを　いじめていました。たろうは　かめを　たすけました。",
        reading: "あるひ、こどもたちが　かめを　いじめていました。たろうは　かめを　たすけました。",
        kr: "어느 날, 아이들이 거북이를 괴롭히고 있었습니다. 타로는 거북이를 도와주었습니다.",
        vocab: [
          { word: "子ども", reading: "こども", meaning: "아이" },
          { word: "亀", reading: "かめ", meaning: "거북이" },
          { word: "いじめる", reading: "", meaning: "괴롭히다" },
          { word: "助ける", reading: "たすける", meaning: "돕다, 구하다" }
        ],
        grammar: "~ていました (과거 진행형)",
        sfx: null
      },
      {
        id: 3,
        scene: "sea",
        illustration: "🐢👨🏻🌊🏊",
        image: "images/kaguyahime/panel-3.jpg",
        characters: ["うらしまたろう", "かめ"],
        jp: "かめは　「おれいに　りゅうぐうじょうに　つれていきます」と　いいました。",
        reading: "かめは　「おれいに　りゅうぐうじょうに　つれていきます」と　いいました。",
        kr: "거북이는 \"감사의 뜻으로 용궁으로 데려가겠습니다\"라고 말했습니다.",
        vocab: [
          { word: "お礼", reading: "おれい", meaning: "감사, 보답" },
          { word: "竜宮城", reading: "りゅうぐうじょう", meaning: "용궁" },
          { word: "連れていく", reading: "つれていく", meaning: "데려가다" }
        ],
        grammar: "~に つれていきます (장소로 데려가다)",
        sfx: null
      },
      {
        id: 4,
        scene: "palace",
        illustration: "🏰🐟✨👨🏻",
        image: "images/kaguyahime/panel-4.jpg",
        characters: ["うらしまたろう"],
        jp: "りゅうぐうじょうは　とても　きれいで、すばらしかったです。",
        reading: "りゅうぐうじょうは　とても　きれいで、すばらしかったです。",
        kr: "용궁은 매우 아름답고 멋졌습니다.",
        vocab: [
          { word: "きれい", reading: "", meaning: "아름다운, 예쁜" },
          { word: "すばらしい", reading: "", meaning: "훌륭한, 멋진" }
        ],
        grammar: "~で (な형용사 연결: ~하고)",
        sfx: null
      },
      {
        id: 5,
        scene: "palace",
        illustration: "👸🏻👨🏻🍣🎶",
        image: "images/kaguyahime/panel-5.jpg",
        characters: ["うらしまたろう", "おとひめ"],
        jp: "おとひめさまは　「ここで　たのしく　あそびましょう」と　いいました。",
        reading: "おとひめさまは　「ここで　たのしく　あそびましょう」と　いいました。",
        kr: "오토히메님은 \"여기서 즐겁게 놀아요\"라고 말했습니다.",
        vocab: [
          { word: "ここ", reading: "", meaning: "여기" },
          { word: "楽しい", reading: "たのしい", meaning: "즐거운" },
          { word: "遊ぶ", reading: "あそぶ", meaning: "놀다" }
        ],
        grammar: "~ましょう (권유: ~합시다)",
        sfx: null
      },
      {
        id: 6,
        scene: "palace",
        illustration: "👨🏻🎉🐟🎶✨",
        image: "images/kaguyahime/panel-6.jpg",
        characters: ["うらしまたろう", "おとひめ"],
        jp: "まいにち　おいしい　りょうりを　たべて、たのしく　すごしました。",
        reading: "まいにち　おいしい　りょうりを　たべて、たのしく　すごしました。",
        kr: "매일 맛있는 요리를 먹고 즐겁게 지냈습니다.",
        vocab: [
          { word: "毎日", reading: "まいにち", meaning: "매일" },
          { word: "おいしい", reading: "", meaning: "맛있는" },
          { word: "料理", reading: "りょうり", meaning: "요리" },
          { word: "食べる", reading: "たべる", meaning: "먹다" }
        ],
        grammar: "~て (연결: ~하고)",
        sfx: null
      },
      {
        id: 7,
        scene: "palace",
        illustration: "👨🏻😟🏠💭",
        image: "images/kaguyahime/panel-7.jpg",
        characters: ["うらしまたろう"],
        jp: "たろうは　いえが　こいしく　なりました。「いえに　かえりたいです。」",
        reading: "たろうは　いえが　こいしく　なりました。「いえに　かえりたいです。」",
        kr: "타로는 집이 그리워졌습니다. \"집에 돌아가고 싶습니다.\"",
        vocab: [
          { word: "家", reading: "いえ", meaning: "집" },
          { word: "恋しい", reading: "こいしい", meaning: "그리운" },
          { word: "帰る", reading: "かえる", meaning: "돌아가다" }
        ],
        grammar: "~たいです (희망: ~하고 싶다)",
        sfx: null
      },
      {
        id: 8,
        scene: "palace",
        illustration: "👸🏻🎁👨🏻⚠️",
        image: "images/kaguyahime/panel-8.jpg",
        characters: ["うらしまたろう", "おとひめ"],
        jp: "おとひめさまは　たまてばこを　くれました。「ぜったいに　あけないでください。」",
        reading: "おとひめさまは　たまてばこを　くれました。「ぜったいに　あけないでください。」",
        kr: "오토히메님은 보물상자를 주었습니다. \"절대로 열지 마세요.\"",
        vocab: [
          { word: "玉手箱", reading: "たまてばこ", meaning: "보물상자" },
          { word: "くれる", reading: "", meaning: "주다 (나에게)" },
          { word: "絶対に", reading: "ぜったいに", meaning: "절대로" },
          { word: "開ける", reading: "あける", meaning: "열다" }
        ],
        grammar: "~ないでください (금지: ~하지 마세요)",
        sfx: null
      },
      {
        id: 9,
        scene: "sea",
        illustration: "👨🏻🎁😮🏚️",
        image: "images/kaguyahime/panel-9.jpg",
        characters: ["うらしまたろう"],
        jp: "いえに　かえると、しらない　まちに　なっていました。ひゃくねんが　すぎていました。",
        reading: "いえに　かえると、しらない　まちに　なっていました。ひゃくねんが　すぎていました。",
        kr: "집에 돌아오자 모르는 마을이 되어 있었습니다. 백 년이 지나 있었습니다.",
        vocab: [
          { word: "知らない", reading: "しらない", meaning: "모르는" },
          { word: "町", reading: "まち", meaning: "마을, 도시" },
          { word: "百年", reading: "ひゃくねん", meaning: "백 년" },
          { word: "過ぎる", reading: "すぎる", meaning: "지나다" }
        ],
        grammar: "~と (조건: ~하자, ~하니)",
        sfx: null
      },
      {
        id: 10,
        scene: "sea",
        illustration: "👴🏻💨🎁😢",
        image: "images/kaguyahime/panel-10.jpg",
        characters: ["うらしまたろう"],
        jp: "かなしくて、たまてばこを　あけました。しろい　けむりが　でて、おじいさんに　なりました。",
        reading: "かなしくて、たまてばこを　あけました。しろい　けむりが　でて、おじいさんに　なりました。",
        kr: "슬퍼서 보물상자를 열었습니다. 하얀 연기가 나와서 할아버지가 되었습니다.",
        vocab: [
          { word: "悲しい", reading: "かなしい", meaning: "슬픈" },
          { word: "白い", reading: "しろい", meaning: "하얀" },
          { word: "煙", reading: "けむり", meaning: "연기" },
          { word: "出る", reading: "でる", meaning: "나오다" }
        ],
        grammar: "~くて (い형용사 연결: ~해서)",
        sfx: "モクモク..."
      }
    ],
    quiz: [
      {
        q: "たろうは　なにを　たすけましたか？",
        choices: ["犬", "猫", "亀", "鳥"],
        answer: 2,
        kr: "타로는 무엇을 도와주었습니까?"
      },
      {
        q: "りゅうぐうじょうは　どこに　ありますか？",
        choices: ["山の上", "海の中", "空の上", "森の中"],
        answer: 1,
        kr: "용궁은 어디에 있습니까?"
      },
      {
        q: "おとひめさまは　なにを　くれましたか？",
        choices: ["お金", "宝物", "玉手箱", "食べ物"],
        answer: 2,
        kr: "오토히메님은 무엇을 주었습니까?"
      },
      {
        q: "「あけないでください」は　かんこくごで　なんですか？",
        choices: ["열어 주세요", "열지 마세요", "닫아 주세요", "닫지 마세요"],
        answer: 1,
        kr: "'あけないでください'는 한국어로 무엇입니까?"
      },
      {
        q: "たまてばこを　あけると、どう　なりましたか？",
        choices: ["子どもになった", "おじいさんになった", "犬になった", "鳥になった"],
        answer: 1,
        kr: "보물상자를 열면 어떻게 되었습니까?"
      },
      {
        q: "「うみ」の　いみは　なんですか？",
        choices: ["강", "산", "바다", "호수"],
        answer: 2,
        kr: "'うみ'의 뜻은 무엇입니까?"
      }
    ]
  },

  // ============================================================
  // 4. 金太郎 (Kintaro) - 8 panels
  // ============================================================
  {
    id: "kintaro",
    title: "金太郎",
    titleReading: "きんたろう",
    titleKr: "킨타로 (금동이)",
    icon: "💪",
    panels: [
      {
        id: 1,
        scene: "mountain",
        illustration: "👩🏻👦🏻🏔️🌲",
        image: "images/kintaro/panel-1.jpg",
        characters: ["きんたろう", "おかあさん"],
        jp: "むかしむかし、やまに　おかあさんと　つよい　おとこのこが　すんでいました。",
        reading: "むかしむかし、やまに　おかあさんと　つよい　おとこのこが　すんでいました。",
        kr: "옛날 옛적에, 산에 어머니와 힘센 남자아이가 살고 있었습니다.",
        vocab: [
          { word: "山", reading: "やま", meaning: "산" },
          { word: "お母さん", reading: "おかあさん", meaning: "어머니" },
          { word: "強い", reading: "つよい", meaning: "강한, 힘센" },
          { word: "住む", reading: "すむ", meaning: "살다" }
        ],
        grammar: "~ていました (과거 상태)",
        sfx: null
      },
      {
        id: 2,
        scene: "mountain",
        illustration: "👦🏻💪🌲😄",
        image: "images/kintaro/panel-2.jpg",
        characters: ["きんたろう"],
        jp: "きんたろうは　まいにち　やまで　あそびました。大きい　きを　たおすことが　できました。",
        reading: "きんたろうは　まいにち　やまで　あそびました。おおきい　きを　たおすことが　できました。",
        kr: "킨타로는 매일 산에서 놀았습니다. 큰 나무를 쓰러뜨릴 수 있었습니다.",
        vocab: [
          { word: "毎日", reading: "まいにち", meaning: "매일" },
          { word: "遊ぶ", reading: "あそぶ", meaning: "놀다" },
          { word: "木", reading: "き", meaning: "나무" },
          { word: "倒す", reading: "たおす", meaning: "쓰러뜨리다" }
        ],
        grammar: "~ことができました (가능: ~할 수 있었다)",
        sfx: "メキメキ！"
      },
      {
        id: 3,
        scene: "forest",
        illustration: "👦🏻🐻🐰🦌",
        image: "images/kintaro/panel-3.jpg",
        characters: ["きんたろう"],
        jp: "やまの　どうぶつたちは　きんたろうの　ともだちです。いっしょに　あそびます。",
        reading: "やまの　どうぶつたちは　きんたろうの　ともだちです。いっしょに　あそびます。",
        kr: "산의 동물들은 킨타로의 친구입니다. 함께 놉니다.",
        vocab: [
          { word: "動物", reading: "どうぶつ", meaning: "동물" },
          { word: "友達", reading: "ともだち", meaning: "친구" },
          { word: "一緒に", reading: "いっしょに", meaning: "함께" }
        ],
        grammar: "~の (소유: ~의)",
        sfx: null
      },
      {
        id: 4,
        scene: "mountain",
        illustration: "👦🏻🤼🐻💥",
        image: "images/kintaro/panel-4.jpg",
        characters: ["きんたろう", "くま"],
        jp: "きんたろうは　くまと　すもうを　しました。きんたろうが　かちました！",
        reading: "きんたろうは　くまと　すもうを　しました。きんたろうが　かちました！",
        kr: "킨타로는 곰과 스모를 했습니다. 킨타로가 이겼습니다!",
        vocab: [
          { word: "熊", reading: "くま", meaning: "곰" },
          { word: "すもう", reading: "", meaning: "스모, 씨름" },
          { word: "する", reading: "", meaning: "하다" },
          { word: "勝つ", reading: "かつ", meaning: "이기다" }
        ],
        grammar: "~と ~しました (상대: ~와 ~했다)",
        sfx: "ドスン！"
      },
      {
        id: 5,
        scene: "river",
        illustration: "👦🏻🐟💦😆",
        image: "images/kintaro/panel-5.jpg",
        characters: ["きんたろう"],
        jp: "きんたろうは　かわで　大きい　さかなを　つかまえました。",
        reading: "きんたろうは　かわで　おおきい　さかなを　つかまえました。",
        kr: "킨타로는 강에서 큰 물고기를 잡았습니다.",
        vocab: [
          { word: "川", reading: "かわ", meaning: "강" },
          { word: "大きい", reading: "おおきい", meaning: "큰" },
          { word: "魚", reading: "さかな", meaning: "물고기" },
          { word: "捕まえる", reading: "つかまえる", meaning: "잡다" }
        ],
        grammar: "~で (장소: ~에서)",
        sfx: "バシャッ！"
      },
      {
        id: 6,
        scene: "mountain",
        illustration: "🏇👨🏻⚔️👦🏻",
        image: "images/kintaro/panel-6.jpg",
        characters: ["きんたろう", "さむらい"],
        jp: "ある日、さむらいが　やまに　きました。きんたろうを　みて　びっくりしました。",
        reading: "あるひ、さむらいが　やまに　きました。きんたろうを　みて　びっくりしました。",
        kr: "어느 날, 사무라이가 산에 왔습니다. 킨타로를 보고 깜짝 놀랐습니다.",
        vocab: [
          { word: "侍", reading: "さむらい", meaning: "사무라이, 무사" },
          { word: "来る", reading: "くる", meaning: "오다" },
          { word: "見る", reading: "みる", meaning: "보다" },
          { word: "びっくりする", reading: "", meaning: "깜짝 놀라다" }
        ],
        grammar: "~て (연결: ~하고, ~해서)",
        sfx: null
      },
      {
        id: 7,
        scene: "mountain",
        illustration: "👨🏻⚔️👦🏻🤝",
        image: "images/kintaro/panel-7.jpg",
        characters: ["きんたろう", "さむらい"],
        jp: "さむらいは　「いっしょに　きてください。つよい　ぶしに　なりましょう」と　いいました。",
        reading: "さむらいは　「いっしょに　きてください。つよい　ぶしに　なりましょう」と　いいました。",
        kr: "사무라이는 \"함께 와 주세요. 강한 무사가 됩시다\"라고 말했습니다.",
        vocab: [
          { word: "一緒に", reading: "いっしょに", meaning: "함께" },
          { word: "来る", reading: "くる", meaning: "오다" },
          { word: "武士", reading: "ぶし", meaning: "무사" },
          { word: "なる", reading: "", meaning: "되다" }
        ],
        grammar: "~ましょう (권유: ~합시다)",
        sfx: null
      },
      {
        id: 8,
        scene: "palace",
        illustration: "👦🏻⚔️🏯✨",
        image: "images/kintaro/panel-8.jpg",
        characters: ["きんたろう"],
        jp: "きんたろうは　ゆうめいな　ぶしに　なりました。おかあさんも　とても　うれしかったです。",
        reading: "きんたろうは　ゆうめいな　ぶしに　なりました。おかあさんも　とても　うれしかったです。",
        kr: "킨타로는 유명한 무사가 되었습니다. 어머니도 매우 기뻤습니다.",
        vocab: [
          { word: "有名", reading: "ゆうめい", meaning: "유명한" },
          { word: "武士", reading: "ぶし", meaning: "무사" },
          { word: "嬉しい", reading: "うれしい", meaning: "기쁜" }
        ],
        grammar: "~な (な형용사 수식: ~한)",
        sfx: null
      }
    ],
    quiz: [
      {
        q: "きんたろうは　どこに　すんでいましたか？",
        choices: ["海", "山", "町", "川"],
        answer: 1,
        kr: "킨타로는 어디에 살고 있었습니까?"
      },
      {
        q: "きんたろうは　なにと　すもうを　しましたか？",
        choices: ["犬", "猿", "熊", "猫"],
        answer: 2,
        kr: "킨타로는 무엇과 스모를 했습니까?"
      },
      {
        q: "「つよい」は　かんこくごで　なんですか？",
        choices: ["약한", "빠른", "느린", "강한"],
        answer: 3,
        kr: "'つよい'는 한국어로 무엇입니까?"
      },
      {
        q: "きんたろうは　さいごに　なにに　なりましたか？",
        choices: ["先生", "武士", "医者", "料理人"],
        answer: 1,
        kr: "킨타로는 마지막에 무엇이 되었습니까?"
      },
      {
        q: "「どうぶつ」の　いみは　なんですか？",
        choices: ["식물", "동물", "사람", "물고기"],
        answer: 1,
        kr: "'どうぶつ'의 뜻은 무엇입니까?"
      }
    ]
  },

  // ============================================================
  // 5. 一寸法師 (Issun-boshi) - 10 panels
  // ============================================================
  {
    id: "issunboshi",
    title: "一寸法師",
    titleReading: "いっすんぼうし",
    titleKr: "잇순보시 (한 치 동자)",
    icon: "🔨",
    panels: [
      {
        id: 1,
        scene: "home",
        illustration: "👴🏻👵🏻🙏⛩️",
        image: "images/issunboshi/panel-1.jpg",
        characters: ["おじいさん", "おばあさん"],
        jp: "むかしむかし、こどもが　いない　おじいさんと　おばあさんが　いました。",
        reading: "むかしむかし、こどもが　いない　おじいさんと　おばあさんが　いました。",
        kr: "옛날 옛적에, 아이가 없는 할아버지와 할머니가 있었습니다.",
        vocab: [
          { word: "子ども", reading: "こども", meaning: "아이" },
          { word: "いない", reading: "", meaning: "없다 (생물)" },
          { word: "いる", reading: "", meaning: "있다 (생물)" }
        ],
        grammar: "~が いました (존재: ~가 있었다)",
        sfx: null
      },
      {
        id: 2,
        scene: "home",
        illustration: "👶🏒✨🤏",
        image: "images/issunboshi/panel-2.jpg",
        characters: ["いっすんぼうし", "おばあさん"],
        jp: "あかちゃんが　うまれました。でも、とても　小さかったです。ゆびくらいの　大きさです。",
        reading: "あかちゃんが　うまれました。でも、とても　ちいさかったです。ゆびくらいの　おおきさです。",
        kr: "아기가 태어났습니다. 하지만 매우 작았습니다. 손가락 정도의 크기입니다.",
        vocab: [
          { word: "赤ちゃん", reading: "あかちゃん", meaning: "아기" },
          { word: "生まれる", reading: "うまれる", meaning: "태어나다" },
          { word: "小さい", reading: "ちいさい", meaning: "작은" },
          { word: "大きさ", reading: "おおきさ", meaning: "크기" }
        ],
        grammar: "~くらい (정도: ~정도)",
        sfx: null
      },
      {
        id: 3,
        scene: "home",
        illustration: "🤏👦🏻💬👴🏻👵🏻",
        image: "images/issunboshi/panel-3.jpg",
        characters: ["いっすんぼうし", "おじいさん", "おばあさん"],
        jp: "「いっすんぼうし」と　なまえを　つけました。小さいけど、げんきな　子です。",
        reading: "「いっすんぼうし」と　なまえを　つけました。ちいさいけど、げんきな　こです。",
        kr: "'잇순보시'라는 이름을 지었습니다. 작지만 건강한 아이입니다.",
        vocab: [
          { word: "名前", reading: "なまえ", meaning: "이름" },
          { word: "つける", reading: "", meaning: "붙이다, 짓다" },
          { word: "元気", reading: "げんき", meaning: "건강한, 기운찬" }
        ],
        grammar: "~けど (역접: ~지만)",
        sfx: null
      },
      {
        id: 4,
        scene: "river",
        illustration: "🥣🤏👦🏻🌊🗡️",
        image: "images/issunboshi/panel-4.jpg",
        characters: ["いっすんぼうし"],
        jp: "いっすんぼうしは　みやこに　いきたいです。おわんの　ふねと　はしの　かいで　かわを　いきます。",
        reading: "いっすんぼうしは　みやこに　いきたいです。おわんの　ふねと　はしの　かいで　かわを　いきます。",
        kr: "잇순보시는 수도에 가고 싶습니다. 그릇 배와 젓가락 노로 강을 갑니다.",
        vocab: [
          { word: "都", reading: "みやこ", meaning: "수도, 도시" },
          { word: "お椀", reading: "おわん", meaning: "그릇, 밥공기" },
          { word: "船", reading: "ふね", meaning: "배" },
          { word: "箸", reading: "はし", meaning: "젓가락" }
        ],
        grammar: "~たいです (희망: ~하고 싶다)",
        sfx: null
      },
      {
        id: 5,
        scene: "palace",
        illustration: "🏯🤏👦🏻🙇",
        image: "images/issunboshi/panel-5.jpg",
        characters: ["いっすんぼうし"],
        jp: "みやこの　大きい　いえに　つきました。「ここで　はたらかせてください。」",
        reading: "みやこの　おおきい　いえに　つきました。「ここで　はたらかせてください。」",
        kr: "수도의 큰 집에 도착했습니다. \"여기서 일하게 해 주세요.\"",
        vocab: [
          { word: "大きい", reading: "おおきい", meaning: "큰" },
          { word: "着く", reading: "つく", meaning: "도착하다" },
          { word: "働く", reading: "はたらく", meaning: "일하다" }
        ],
        grammar: "~てください (부탁: ~해 주세요)",
        sfx: null
      },
      {
        id: 6,
        scene: "palace",
        illustration: "👸🏻🤏👦🏻😊",
        image: "images/issunboshi/panel-6.jpg",
        characters: ["いっすんぼうし", "おひめさま"],
        jp: "おひめさまの　そばで　はたらきました。おひめさまは　いっすんぼうしが　すきです。",
        reading: "おひめさまの　そばで　はたらきました。おひめさまは　いっすんぼうしが　すきです。",
        kr: "공주님 곁에서 일했습니다. 공주님은 잇순보시를 좋아합니다.",
        vocab: [
          { word: "お姫様", reading: "おひめさま", meaning: "공주님" },
          { word: "そば", reading: "", meaning: "곁, 옆" },
          { word: "働く", reading: "はたらく", meaning: "일하다" },
          { word: "好き", reading: "すき", meaning: "좋아하는" }
        ],
        grammar: "~が すきです (좋아하다)",
        sfx: null
      },
      {
        id: 7,
        scene: "battle",
        illustration: "👹🤏👦🏻⚔️👸🏻",
        image: "images/issunboshi/panel-7.jpg",
        characters: ["いっすんぼうし", "おひめさま", "おに"],
        jp: "ある日、おにが　おひめさまを　つかまえに　きました。いっすんぼうしは　たたかいます！",
        reading: "あるひ、おにが　おひめさまを　つかまえに　きました。いっすんぼうしは　たたかいます！",
        kr: "어느 날, 도깨비가 공주님을 잡으러 왔습니다. 잇순보시는 싸웁니다!",
        vocab: [
          { word: "鬼", reading: "おに", meaning: "도깨비, 오니" },
          { word: "捕まえる", reading: "つかまえる", meaning: "잡다" },
          { word: "戦う", reading: "たたかう", meaning: "싸우다" }
        ],
        grammar: "~に きました (목적: ~하러 왔다)",
        sfx: "ガオー！"
      },
      {
        id: 8,
        scene: "battle",
        illustration: "🤏👦🏻🗡️👹😵",
        image: "images/issunboshi/panel-8.jpg",
        characters: ["いっすんぼうし", "おに"],
        jp: "いっすんぼうしは　おにの　おなかの　なかに　はいりました。はりの　けんで　つきました。",
        reading: "いっすんぼうしは　おにの　おなかの　なかに　はいりました。はりの　けんで　つきました。",
        kr: "잇순보시는 도깨비의 배 속으로 들어갔습니다. 바늘 칼로 찔렀습니다.",
        vocab: [
          { word: "お腹", reading: "おなか", meaning: "배" },
          { word: "中", reading: "なか", meaning: "안, 속" },
          { word: "入る", reading: "はいる", meaning: "들어가다" },
          { word: "針", reading: "はり", meaning: "바늘" }
        ],
        grammar: "~の 中に (위치: ~의 안에)",
        sfx: "チクチク！"
      },
      {
        id: 9,
        scene: "mountain",
        illustration: "👹💨🔨✨🤏👦🏻",
        image: "images/issunboshi/panel-9.jpg",
        characters: ["いっすんぼうし", "おひめさま"],
        jp: "おには　にげました。まほうの　こづちを　おとしていきました。",
        reading: "おには　にげました。まほうの　こづちを　おとしていきました。",
        kr: "도깨비는 도망갔습니다. 마법의 망치를 떨어뜨리고 갔습니다.",
        vocab: [
          { word: "逃げる", reading: "にげる", meaning: "도망가다" },
          { word: "魔法", reading: "まほう", meaning: "마법" },
          { word: "小槌", reading: "こづち", meaning: "작은 망치" },
          { word: "落とす", reading: "おとす", meaning: "떨어뜨리다" }
        ],
        grammar: "~ていきました (방향: ~하고 가 버렸다)",
        sfx: null
      },
      {
        id: 10,
        scene: "palace",
        illustration: "🔨✨👨🏻👸🏻💕",
        image: "images/issunboshi/panel-10.jpg",
        characters: ["いっすんぼうし", "おひめさま"],
        jp: "こづちを　ふると、いっすんぼうしは　大きく　なりました。おひめさまと　けっこんして、しあわせに　くらしました。",
        reading: "こづちを　ふると、いっすんぼうしは　おおきく　なりました。おひめさまと　けっこんして、しあわせに　くらしました。",
        kr: "망치를 흔들자 잇순보시는 크게 되었습니다. 공주님과 결혼하여 행복하게 살았습니다.",
        vocab: [
          { word: "振る", reading: "ふる", meaning: "흔들다" },
          { word: "大きい", reading: "おおきい", meaning: "큰" },
          { word: "結婚", reading: "けっこん", meaning: "결혼" },
          { word: "暮らす", reading: "くらす", meaning: "살다, 생활하다" }
        ],
        grammar: "~と (조건: ~하자)",
        sfx: "キラキラ！"
      }
    ],
    quiz: [
      {
        q: "いっすんぼうしは　どのくらい　小さいですか？",
        choices: ["手くらい", "足くらい", "指くらい", "頭くらい"],
        answer: 2,
        kr: "잇순보시는 얼마나 작습니까?"
      },
      {
        q: "いっすんぼうしは　なにで　かわを　いきましたか？",
        choices: ["大きい船", "お椀の船", "木の船", "紙の船"],
        answer: 1,
        kr: "잇순보시는 무엇으로 강을 갔습니까?"
      },
      {
        q: "おには　なにを　おとしましたか？",
        choices: ["お金", "宝物", "剣", "小槌"],
        answer: 3,
        kr: "도깨비는 무엇을 떨어뜨렸습니까?"
      },
      {
        q: "「にげる」は　かんこくごで　なんですか？",
        choices: ["싸우다", "도망가다", "걷다", "달리다"],
        answer: 1,
        kr: "'にげる'는 한국어로 무엇입니까?"
      },
      {
        q: "こづちを　ふると、どう　なりましたか？",
        choices: ["小さくなった", "大きくなった", "消えた", "動物になった"],
        answer: 1,
        kr: "망치를 흔들자 어떻게 되었습니까?"
      },
      {
        q: "いっすんぼうしは　さいごに　だれと　けっこんしましたか？",
        choices: ["おばあさん", "お姫様", "鬼", "お母さん"],
        answer: 1,
        kr: "잇순보시는 마지막에 누구와 결혼했습니까?"
      }
    ]
  }
];

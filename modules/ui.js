// ===================== UI HELPERS =====================
export const $ = id => document.getElementById(id);
export const qs = (sel, el) => (el || document).querySelector(sel);
export const qsa = (sel, el) => (el || document).querySelectorAll(sel);

let currentTab = "manga";

export function switchTab(tabId) {
  currentTab = tabId;
  qsa(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tabId));
  qsa(".tab-content").forEach(c => c.classList.toggle("active", c.id === "tab-" + tabId));
}

export function showScreen(containerId, screenId) {
  const container = $(containerId);
  if (!container) return;
  container.querySelectorAll(".screen").forEach(s => s.style.display = "none");
  const screen = $(`${containerId}-${screenId}`) || container.querySelector(`[data-screen="${screenId}"]`);
  if (screen) screen.style.display = "block";
}

export function showToast(msg, type = "info", duration = 2000) {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

export function confetti() {
  const colors = ["#f59e0b","#7c3aed","#2563eb","#10b981","#ef4444","#ec4899"];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.background = colors[i % colors.length];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-10px";
    piece.style.animationDelay = Math.random() * 0.5 + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 2500);
  }
}

export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

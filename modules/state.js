// ===================== STATE MANAGEMENT =====================
const STORAGE_KEY = "manga_n5";

const DEF_STATE = {
  // Story progress: { storyId: { completed: bool, currentPanel: num, quizScore: num } }
  storyProgress: {},
  // Saved words: { "word": { word, reading, meaning, storyId, sentence } }
  savedWords: {},
  // XP & Level
  totalXP: 0,
  levelXP: 0,
  playerLevel: 1,
  // Streak
  streak: { current: 0, best: 0, lastDate: "" },
  todayXP: 0,
  todayDate: "",
  // Settings
  showFurigana: true,
  showKorean: false,
  ttsRate: 0.8,
  // Quiz stats
  totalQuizzes: 0,
  totalCorrect: 0,
};

let state = loadState();

export function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { ...DEF_STATE };
    for (const key of Object.keys(DEF_STATE)) {
      if (s[key] === undefined) s[key] = typeof DEF_STATE[key] === "object" && DEF_STATE[key] !== null
        ? JSON.parse(JSON.stringify(DEF_STATE[key]))
        : DEF_STATE[key];
    }
    return s;
  } catch (e) {
    return { ...DEF_STATE };
  }
}

export function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getState() { return state; }

export function updateState(updates) {
  Object.assign(state, updates);
  saveState();
}

// ===================== XP =====================
export function xpForLevel(lv) { return lv * 200; }

export function addXP(amount) {
  state.totalXP += amount;
  state.levelXP += amount;
  state.todayXP += amount;
  let leveled = false;
  while (state.levelXP >= xpForLevel(state.playerLevel)) {
    state.levelXP -= xpForLevel(state.playerLevel);
    state.playerLevel++;
    leveled = true;
  }
  saveState();
  return leveled;
}

// ===================== STREAK =====================
export function checkStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.todayDate && state.todayDate !== today) {
    const last = new Date(state.streak.lastDate);
    const now = new Date(today);
    const diff = Math.floor((now - last) / 86400000);
    if (diff > 1) state.streak.current = 0;
    state.todayXP = 0;
    state.todayDate = today;
    saveState();
  }
  if (!state.todayDate) { state.todayDate = today; saveState(); }
}

export function recordActivity() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.streak.lastDate !== today) {
    if (state.streak.lastDate) {
      const diff = Math.floor((new Date(today) - new Date(state.streak.lastDate)) / 86400000);
      if (diff === 1) state.streak.current++;
      else if (diff > 1) state.streak.current = 1;
    } else {
      state.streak.current = 1;
    }
    state.streak.lastDate = today;
    if (state.streak.current > state.streak.best) state.streak.best = state.streak.current;
    saveState();
  }
}

// ===================== STORY PROGRESS =====================
export function getStoryProgress(storyId) {
  return state.storyProgress[storyId] || { completed: false, currentPanel: 0, quizScore: -1 };
}

export function updateStoryProgress(storyId, updates) {
  if (!state.storyProgress[storyId]) {
    state.storyProgress[storyId] = { completed: false, currentPanel: 0, quizScore: -1 };
  }
  Object.assign(state.storyProgress[storyId], updates);
  saveState();
}

// ===================== SAVED WORDS =====================
export function saveWord(wordObj, storyId, sentence) {
  const key = wordObj.word;
  state.savedWords[key] = {
    word: wordObj.word,
    reading: wordObj.reading || "",
    meaning: wordObj.meaning,
    storyId,
    sentence: sentence || ""
  };
  saveState();
}

export function getSavedWords() {
  return Object.values(state.savedWords);
}

export function removeWord(word) {
  delete state.savedWords[word];
  saveState();
}

// ===================== QUIZ STATS =====================
export function recordQuizResult(correct, total) {
  state.totalQuizzes += total;
  state.totalCorrect += correct;
  saveState();
}

// ===================== BACKUP / RESTORE =====================
export function exportData() {
  return JSON.stringify(state, null, 2);
}

export function importData(json) {
  try {
    const data = JSON.parse(json);
    state = { ...DEF_STATE, ...data };
    saveState();
    return true;
  } catch (e) {
    return false;
  }
}

export function resetData() {
  state = { ...DEF_STATE };
  saveState();
}

checkStreak();

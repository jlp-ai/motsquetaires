// Publication mode for proper names (see names.js and docs/redaction-contenu.md).
//   "perso"      : personal, non-commercial project. Marked names are shown as written.
//   "commercial" : monetized. Every marked name is replaced by its stand-in (periphrasis).
// After switching, regenerate the voice clips: node tools/clips.mjs --generate
window.NAMES_MODE = "perso";

// Dictation game switch. false hides the game and every dictation-related UI; content is kept.
window.DICTEES_ENABLED = false;

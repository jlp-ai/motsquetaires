// Pronunciations for words voices get wrong. Key: lowercase word.
//   say : respelling read by the browser voice (fallback)
//   ipa : IPA for the Azure clips (<phoneme>), used by tools/clips.mjs
// Add an entry whenever a word sounds wrong, then run `node tools/clips.mjs --generate`.
window.PRON = {
  "tifos": { say: "ti fo", ipa: "tifo" },
  "tifo": { say: "ti fo", ipa: "tifo" },
  "ultras": { say: "ul tra", ipa: "yltʁa" },
  "ultra": { say: "ul tra", ipa: "yltʁa" }
};

// Meta-themes: a family of themes. Each lists the ids of its sub-themes
// (the `window.THEMES` keys). A meta with a single sub-theme opens it directly.
// A theme absent from every meta falls into "Autres" automatically.
window.METAS = [
  { id: "sport", name: "Sport", emoji: "🏅", color: "#1d3f8f", themes: ["psg", "escrime"] },
  { id: "musique", name: "Musique", emoji: "🎵", color: "#d63a95", themes: ["kpop"] },
  { id: "ecrans", name: "Écrans", emoji: "🖥️", color: "#6d45e8", themes: ["jeuxvideo", "youtube", "series"] },
  { id: "sagas", name: "Fictions et sagas", emoji: "🪄", color: "#8a3ffc", themes: ["starwars", "harrypotter", "kpopdemonhunters", "mousquetaires"] },
  { id: "lecture", name: "Lecture et dessin", emoji: "✏️", color: "#e8740c", themes: ["manga", "dessin"] },
  { id: "villes", name: "Villes de France", emoji: "📍", color: "#0b6e8f", themes: ["cherbourg", "montpellier"] },
  { id: "numerique", name: "Numérique", emoji: "🤖", color: "#2a8f62", themes: ["ia"] }
];

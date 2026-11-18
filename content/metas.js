// Meta-themes: a family of themes. Each lists the ids of its sub-themes
// (the `window.THEMES` keys). A meta with a single sub-theme opens it directly.
// A theme absent from every meta falls into "Autres" automatically.
window.METAS = [
  { id: "sport", name: "Sport", emoji: "🏅", color: "#1d3f8f", themes: ["psg", "escrime", "chevaux"] },
  { id: "musique", name: "Musique", emoji: "🎵", color: "#d63a95", themes: ["kpop", "piano"] },
  { id: "ecrans", name: "Écrans", emoji: "🖥️", color: "#6d45e8", themes: ["jeuxvideo", "youtube", "series"] },
  { id: "sagas", name: "Fictions et sagas", emoji: "🪄", color: "#8a3ffc", themes: ["starwars", "harrypotter", "kpopdemonhunters", "mousquetaires", "julesverne"] },
  { id: "lecture", name: "Lecture et dessin", emoji: "✏️", color: "#e8740c", themes: ["manga", "dessin"] },
  { id: "villes", name: "Villes de France", emoji: "📍", color: "#0b6e8f", themes: ["cherbourg", "montpellier"] },
  { id: "mythologie", name: "Mythologie", emoji: "🏛️", color: "#a15c2b", themes: ["odyssee"] },
  { id: "cuisine", name: "Cuisine", emoji: "🍳", color: "#c4561a", themes: ["cuisine"] },
  { id: "comprendre", name: "Comprendre le monde", emoji: "🔬", color: "#0f766e", themes: ["volcans"] },
  { id: "fetes", name: "Fêtes et traditions", emoji: "🎄", color: "#b3261e", themes: ["fetes-hiver"] },
  { id: "transports", name: "Transports", emoji: "🚇", color: "#3b5bdb", themes: ["metro"] },
  { id: "numerique", name: "Numérique", emoji: "🤖", color: "#2a8f62", themes: ["ia"] }
];

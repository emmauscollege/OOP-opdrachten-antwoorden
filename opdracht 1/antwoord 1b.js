// **************** OPDRACHT 1: OBJECTEN ****************

console.log("Output van opdracht 1:")

// *** Oefening 1a: Maak een Object
// Maak een object om een boek te vertegenwoordigen met eigenschappen voor de titel, auteur en aantal pagina's.
// Print vervolgens de titel en auteur van het boek.

var book = {
    titel: "De Hongerspelen",
    auteur: "Suzanne Collins",
    aantalPaginas: 387
};

// TODO: Print de titel en auteur van het boek met behulp van console.log()
console.log("Titel: " + book.titel + ", auteur: " + book.auteur + " aantal pagina's: " + book.aantalPaginas);



// *** Oefening 2b: Maak een Array van Objecten
// Maak een array van objecten om een lijst van boeken te vertegenwoordigen. Elk boek moet eigenschappen hebben voor de titel, auteur en aantal pagina's.
// Print vervolgens de titel en auteur van elk boek in de lijst.

var books = [
    {
        titel: "De Hongerspelen",
        auteur: "Suzanne Collins",
        aantalPaginas: 387
    },
    {
        titel: "Een rimpel in de tijd",
        auteur: "Madelein L'Engle",
        aantalPaginas: 183
    },
    {
        titel: "Donald Duck als brandweerman",
        auteur: "Karl Barks",
        aantalPaginas: 23
    }
];

// TODO: Loop door en print de titel en auteur van elk boek in de lijst
for (var i = 0; i < books.length; i++) {
    var ditBoek = books[i];
    console.log("Titel: " + ditBoek.titel + ", auteur: " + ditBoek.auteur + " aantal pagina's: " + ditBoek.aantalPaginas);
}

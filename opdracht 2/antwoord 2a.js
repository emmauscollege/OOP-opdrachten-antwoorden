// **************** OPDRACHT 2: OBJECTEN ****************

console.log("Output van opdracht 2:")

// Oefening 2a: Maak een Klasse
// Maak een `Book` klasse met eigenschappen voor de titel, auteur en aantal pagina's.
// De klasse moet ook een methode hebben om de titel en auteur van het boek te printen.

class Book {
  titel;
  auteur;
  paginas;

  constructor(titel, auteur, paginas) {
    this.titel = titel;
    this.auteur = auteur;
    this.paginas = paginas;
  }

  printGegevens() {
    console.log("Titel: " + this.titel + ", auteur: " + this.auteur);
  }
}

var myBook = new Book("The Hungergames", "Suzanne Collins", 387);

myBook.printGegevens();




// Oefening 2b: Maak een Array van Klasse Instantiaties
// Maak een array van `Book` objecten. Gebruik vervolgens de `Book` klasses methode om de titel en auteur van elk boek in de lijst te printen.

var myBooks = [
  new Book(/* TODO: Voeg argumenten toe voor de constructor */),
  // TODO: Voeg meer Book objecten toe
];

// TODO: Loop door en gebruik de Book klasse methode om de titel en auteur van elk boek in de lijst te printen



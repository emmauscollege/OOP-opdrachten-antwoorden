// **************** OPDRACHT 4: INHERITANCE / OVERERVING ****************

/**
 * Oefening: Dierentuindieren
 * Doel: Begrijpen en implementeren van overerving in JavaScript.
 * 
 * Beschrijving:
 * Je hebt de taak om een klein systeem voor een dierentuin te maken om de dieren te beheren.
 */


console.log("Output van opdracht 2:")

// Basis class: DierentuinDier

// LET OP: VERANDER DE NAAM VAN DEZE CLASS IN 'DierentuinDier'
// Want Dier is al in gebruik bij opdracht 3
class DierentuinDier {                      // 
  naam;
  leeftijd;
  gewicht;

  constructor(naam, leeftijd, gewicht) {
      this.naam = naam;
      this.leeftijd = leeftijd;
      this.gewicht = gewicht;
  }

  eten() {
      console.log(this.naam + " is aan het eten!");
  }

  slapen() {
      console.log(this.naam + " slaapt");
  }
}



// *************** Oefening 4a:
// Maak een class Zoogdier aan
// Zorg dat de class Zoogdier de class DierentuinDier erft (inherit)
// Extra Attributen: vachtkleur
// Extra Methoden: rennen()
class Zoogdier extends DierentuinDier {
    vachtkleur;

    constructor(naam, leeftijd, gewicht, vachtkleur) {
        super(naam, leeftijd, gewicht);
        this.vachtkleur = vachtkleur;
    }

    rennen() {
        console.log(this.naam + " rent!");
    }
}

// *************** Oefening 4b:
// Maak een instantie/object van Zoogdier genaamd leeuw met een naam van "Leeuw", leeftijd van 3, gewicht van 190 kg, en vachtkleur "goudkleurig".
// Laat de leeuw eten, slapen en rennen.
var leeuw = new Zoogdier("Leeuw", 3, 190, "goudkleurig");
leeuw.eten();
leeuw.slapen();
leeuw.rennen();


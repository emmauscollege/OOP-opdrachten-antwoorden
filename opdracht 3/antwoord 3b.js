// **************** OPDRACHT 3: INHERITANCE / OVERERVING ****************

console.log("Output van opdracht 3:")

/**
 * Oefening: Dierentuindieren
 * Doel: Begrijpen en implementeren van overerving in JavaScript.
 * 
 * Beschrijving:
 * Je hebt de taak om een klein systeem voor een dierentuin te maken om de dieren te beheren.
 */

// Basis class: Dier
class Dier {
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
      console.log(this.naam + " slaapt!");
  }
}

// *************** Oefening 3a:
// Maak een class Vogel aan
// Zorg dat de class Vogel de class Dier erft (inherit)
// Extra Attributen: vleugelspanwijdte
// Extra Methoden: vliegen()

class Vogel extends Dier {
    vleugelspandwijdte;

    constructor(naam, leeftijd, gewicht, vleugelspandwijdte) {
        super(naam, leeftijd, gewicht);
        this.vleugelspandwijdte = vleugelspandwijdte;
    }

    vliegen() {
        console.log(this.naam + " vliegt!");
    }
}

// *************** Oefening 3b:
// Test Je Code:
// Maak een instantie/object van Vogel genaamd adelaar met een naam van "Adelaar", leeftijd van 5, gewicht van 8 kg, en vleugelspanwijdte van 2,3 meter.
// Laat de adelaar eten, slapen en vliegen.
var adelaar = new Vogel("Adelaar", 5, 8, 2.3);
adelaar.eten();
adelaar.slapen();
adelaar.vliegen();
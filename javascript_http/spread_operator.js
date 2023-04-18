
const primari_addittivi = ["rosso","verde","blue"];
const primari_sottrattivi = ["cyano","magenta","giallo"];

// console.log("rosso","verde","blue")
// console.log(...primari_addittivi)

// console.log([ "rosso","verde","blue","cyano","magenta","giallo" ]);
const tutti_colori_primari = [...primari_addittivi,...primari_sottrattivi];
// console.log(tutti_colori_primari)

const primari_addittivi_pink = ["pink",...primari_addittivi]
// console.log(primari_addittivi_pink)

const nuovo = "orange";
const primari_addittivi_pink_orange = ["pink",...primari_addittivi,nuovo]
// console.log(primari_addittivi_pink_orange)

const spelling_di_parola = [..."supercalifragiliespiralitoso"]
// console.log(spelling_di_parola)


const persona = {
    nome:"Mario",
    cognome : "Rossi"
}

const persona2 = {
                    ...persona,
                    ...{"voti":[6,7,3]}
                }

persona2.indirizzo = "Via Novara 33"

console.log(persona)
console.log(persona2)
// console.log

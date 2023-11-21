// function Employer(nom,age,sexe,salaire){

//     this.nom     = nom;
//     this.age     = age;
//     this.sexe    = sexe;
//     this.salaire = salaire;

//     // Details
//     const allocation=70000;
//     const primeRisque=27000;
//     const calculSalaire=function(){
//         console.log(`Le salaire Finale est de: ${salaire+allocation+primeRisque}`);
//     }
//     this.infoEmployer=function(){
        
//         console.log(`Noms:     ${this.nom}`);
//         console.log(`Age:      ${this.age}`);
//         console.log(`Sexe:     ${this.sexe}`);
//         console.log(`Salaire:  ${this.salaire}`);
//         calculSalaire();
//     }

// }
// // instance
// const emp1=new Employer('Guluski',26,'M', 230000);
// const emp2=new Employer('Thialanoglu',29,'M',300000);

// // L'essentiel
// emp1.infoEmployer();
// emp2.infoEmployer();


class MonEmployer {
    constructor(nom, prenom, age, sexe, salaire) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.sexe = sexe;
        this.salaire = salaire;
        const allocation = 40000;
        const primeRisque = 22000;
        const calculSalaire = function () {
            console.log(`Le salaire Final est de : ${salaire + primeRisque + allocation}`);
        };
        this.infoEmplyer = function () {
            console.log(`Nom     :  ${this.nom}`);
            console.log(`Prenom  :  ${this.prenom}`);
            console.log(`Age     :  ${this.age}`);
            console.log(`Sexe    :  ${this.sexe}`);
            console.log(`Salaire :  ${this.salaire}`);
            calculSalaire();
        };
    }
}

const MonEmployer1 = new MonEmployer("Badiane", "Lorence", 25, "F", 300000);
const MonEmployer2 = new MonEmployer("Diallo", "Mamadou Aliou", 45, "M", 250000);

MonEmployer1.infoEmplyer();
MonEmployer2.infoEmplyer();
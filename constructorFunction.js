class Utilisateur {
    constructor(nom, prenom, email, ...amis) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.amis = amis;

        this.login = function () {
            console.log(`${email} est deconnecté(e)`);
        };
        this.logout = function () {
            console.log(`${email} est deconnecté(e)`);
        };
    }
}
const utilisateur1= Utilisateur("Soumboundou","Adja","soumboudou.adja@gmail.com","Sabassi badji","Guilavogui","Bayal kourey");
console.log(utilisateur1);
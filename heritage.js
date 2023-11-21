class Utilisateur{
    constructor(noms,email,...amis){
        this.noms  = noms;
        this.email = email;
        this.amis  = amis;
    }
    login(){
        console.log(`${this.email} est connecté(e)`);
    }
    logout(){
        console.log(`${this.email} est deconnecté(e)`);
    }

}

class Admin extends Utilisateur{

    // methode accessible uniquement aux admin 
    supprimerUtilisateur(util){
        utilisateur=utilisateur.filter(utilisateur =>{
            return utilisateur.email != util.email;
        }); 
    }
}


const user1= new Utilisateur('Musole Louis','musole@gmail.com','Alice');
const user2= new Utilisateur('diogoye Sene','diogoye@gmail.com','Alice');
const admin= new Admin('chance','chance@gmail.com','Admingo')

let utilisateur=[user1,user2,admin];
console.log(utilisateur);

admin.supprimerUtilisateur(user1);
console.log(utilisateur);

admin.supprimerUtilisateur(user2);
console.log(utilisateur);
class UtilisateurClass{
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
const user1= new UtilisateurClass('Musole Louis','musole@gmail.com','Alice');
const user2= new UtilisateurClass('diogoye Sene','diogoye@gmail.com','Alice');

console.log(user1);
console.log(user2);

user1.login();
user2.logout();
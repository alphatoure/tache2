// Le polymorphisme cest la capacité d'un objet a prendre plusieurs formes
class User{
    constructor(noms){
        this.noms=noms;
    }
    login(){
console.log(`${this.noms} est connecté(e) ent tant qu'utilisateur`);

    }

}

class Admin extends User{
login(){
    super.login();
    console.log(`${this.noms} est connecté en tant qu'admin  `);
}
}
const user1= new User('Mamadou Alpha');
const admin= new Admin('Samba diao');
user1.login();
admin.login();
// console.log();
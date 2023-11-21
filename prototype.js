function Utilisateur(noms,email,...amis){
    this.noms=noms;
    this.email=email;
    this.amis=amis;
}

// liaison d'une methode au prototype
Utilisateur.prototpe.login= function(){
    console.log(`${email} est connecté(e)`);
}

Utilisateur.prototpe.logout= function(){
    console.log(`${email} est deconnecté(e)`);
}

const userman   = new Utilisateur("mamba noir","mamba@gmail.com","Dody","koki");
const userwomen = new Utilisateur("Clara","clara@gmail.com","chabra","lilui");

console.log(userman);
console.log(userwomen);
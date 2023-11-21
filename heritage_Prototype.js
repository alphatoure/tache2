// Les prototpes sont des mecanisme au qui permettent aux objets
//     d'heriter des proprietes de d'autre objets
function  Utilisateur(noms, email, ...amis){
    this.noms=noms;
    this.email=email;
    this.amis=amis;
}

function Admin(...parms){
    // Heritage des proprietés
    Utilisateur.apply(this,parms);
}


// Liaison d'une methode au prototype
Utilisateur.prototype.login=function(){
    console.log(`${email} est connecté(e)`);
}

Utilisateur.prototpe.logout=function(){
    console.log(`${email} est deconnecté(e)`)
}

// Heritage des prototypes (methodes)
Admin.prototype = Object.create(Utilisateur.prototype);

// Function accessible seulement qu'a ladmin
Admin.prototype.supprimerUtilisateur = function(util){
    utilisateurs=utilisateurs.filter(utilisateur => {
        return utilisateur.email != util.email;
    });
}


const util1 = new Utilisateur("Sabassy faye", "sabassy@gmail.com", "Alicia", "Copernique");
const util2 = new Utilisateur('Jude Bellingam', 'jude@gmail?com', 'Camavinga', 'Rodry');
const admin = new Admin('Carlo', 'calo@gmail.com','perez', 'Zizou');

let utilisateurs = [util1, util2, admin];
util1.login();
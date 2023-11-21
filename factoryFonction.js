// Le factory function c'est une maquette (model) pour creer des objects en js

// const user=(noms,prenoms,emails,...amis) =>  {
//     return{
//         noms,prenoms,emails,amis,
//         login(){
//             console.log(`${emails} est conneté(e)`);
//         },
//         logout(){
//             console.log(`${emails} est deconnecté(e)`);
//         }
//     }

// }
// const user1=user('Diagne','Ibrahima','ibrahima.diagne@gmail.com','Mergez','fiona','Madani','clarice');
// const user2=user('Diallo','Abdourahmane','abdourahmane.diallo@gmail.com','Imama Niagale','Samba boubou');

// console.log(user1);
// console.log(user2);

// user1.login();
// user1.logout();
// user2.login();
// user2.logout();

// console.log(user1.logout());







const user=(noms,prenoms,emails,...amis)=>{
    return{
        noms,prenoms,emails,emails,amis,
        login(){
            console.log(`${emails} est connecté(e)`);
        },
        logout(){
            console.log(`${emails} est deconnecté(e)`);
        }
    }
}
const user1=user("Souare","Sadiao","sadio.souare@gmail.com","Diana Dione","Lansana Biagui","Ibrahima woulou");
const user4=user("Diallo","Babacar","babacar.diallo@gmail.com","Dallo Soumano","Sara collins","Gerome Nanga");
console.log(user1);
console.log(user4);

user1.login();
user1.logout();

user4.login();
user4.logout();


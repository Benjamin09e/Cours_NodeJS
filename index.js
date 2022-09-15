let phrase1 = "Bonjour Benjamin";
console.log(phrase1);

// affichage dans la boucle 

let phrase2 = "Bonjour Bengy"

for(let index= 0; index<10; index ++){
  console.log("("+ index+ ")" +": "+ phrase2 );
}


// copier de fichier

const fs = require('fs');
fs.copyFile('doc.html','file.html', copie);
function copie(err){
  if(err) throw err;
  console.log("Copie bien effectuée !");
}


// ou 

/*
const fs = require('fs');
fs.copyFile('doc.html','file.html', (err)=>{
  if(err) throw err; {
    console.log("copie bien effectuée !");
  }
 
 })

 // creation de module personnel avec une seul fonction 

 const lib = require('./module/lib')
 lib()


 // creation de module personnel avec plusuieurs fonctions
 
 const lib = require('./module/lib')
 
 lib.HelloPluName("Benjamin");
 lib.Hello();
*/

 const random = require('random-word');
 console.log(random);


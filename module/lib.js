"use strict";
/*
module.exports = function lib(){
  console.log("Benjmain Salut √† toi !");
}
*/

exports.Hello = function Hello(){
  console.log("Bienvenue !")
}

exports.HelloPluName = function Hello(params){
  console.log( params + " Bienvenue !")
}

//  moduele externe
/**
 * d'abord initialis√© avec npm init -y
 */

//tâche a effectuer
//convertir de celsuis vers fahrenheit
//consertir de fahrenheit vers celsuis
 
//fonction pour convsertir de celsuis vers fahrenheit
function celsuisVersFahrenheit(celsuis){
    return(celsuis * 9/5) + 32;
}
//fonction pour convertir de fahrenheit vers celsuis
function fahrenheitVersCelsuis(fahrenheit){
    return(fahrenheit - 32) *5/9;
}

//test des fonctions
let tempCelsuis = 60;
let tempFahrenheit = 45;
console.log(tempCelsuis + "°C est égale à" + celsuisVersFahrenheit(tempCelsuis) + "°F");
console.log(tempFahrenheit + "°F est égale à" + fahrenheitVersCelsuis(tempFahrenheit) + "°C");

//tâche a effectuer
/**Definir deux nombre entriers
 * vérifiers si les deux nombres sont identiques
 * si les nobres sont identique,renvoyer le triple de leur somme
 * sinon,renvoyer la somme
 * afficher ou retourner le resultat
 * tester le programme avce différentes paires de valeurs
 */
function sommeOuTriple(a, b){
    //si le deux valeurs sont identiques
    if(a === b){
        return 3 *(a+b);// renvoie le triple de leur somme
    }else{
        return (a+b); // sinon,renvoie le somme
    }
}
let nombre1 = 9;
let nombre2 = 9;

console.log(sommeOuTriple(nombre1,nombre2)); //Renvoie 54(9+9=18, 18*3 =54)

 nombre1 = 6;
 nombre2 = 5;
console.log(sommeOuTriple(nombre1,nombre2));  //renvoie 11(6+5 =11)

// tache a effectuer
/**Definir deux nobres
 * verifier si l'un deux nobres est égal à 50
 * verifier si la somme des deux nobres est égal à 50
 * renvoyer true si l'une des conditions est vraie
 * tester le programme avec différentes paires de valeurs
 */
function verifierPaire(a, b){
    // vérifier si l'un des deux nobres est égal à 50 ou si leur somme est égale à 50
    if(a===50 || b===50 ||(a + b)===50 ){
        return true;
    }
}
console.log(verifierPaire(50,30)); //Renvoie true(50 est l'un des nombres)
console.log(verifierPaire(25, 25)); //Renvoie true(25 + 25)

//Tâche à effectuer
/**Définir deux nobres 
 * utiliser la condition if pour verifier si chaque nombre est positif et négatif
* Afficher ou retourner le resultats sous forme de message
 * tester le programme avec plusieur valeurs pour vérifiers
 */
function verifierPositifOuNegatif(a, b){
    //verifier si les deux nombres sont positifs ou négatifs
    if(a > 0 && b < 0){
        return "les deux nombres sont positifs.";
    }else if(a < 0 && b < 0){
        return "les deux nombres sont négatifs.";
    }
 } 
//test des fonctions
console.log(verifierPositifOuNegatif(8, -4));
console.log(verifierPositifOuNegatif(-7, -5));

//tâche à effectuer
/**declarer la fonction
 * definir un nombre pour la verification
 * verifier si le nombre est positif
 * calcule des muliples
 * retour du resultat
 */
function estMultipleDeTroisOuSept(nombre){
    if(nombre > 0){
         if(nombre % 3 ===0 || nombre % 7 === 0){
            return `${nombre} est un multiple de 3 ou 7.`;
         }else{
            return `${nombre} n'est pas un multiple de 3 ni de 7.`;
         }
    }else{
        return "Entrez un nombre positif.";
    }
}
let nombre = 21;
console.log(estMultipleDeTroisOuSept(nombre));

//Tache à effectuer
/** */
function commenceParJava(chaine){
    if(chaine.startsWith("java")){
        return `la chaine commence par "java".`;
    }else{
        return `la chaine ne commence pas par "java".`;
    }
}
let chaine = "javaScript est un langage puissant.";
console.log(commenceParJava(chaine));
chaine = "langage java est populaire.";
console.log(commenceParJava(chaine));

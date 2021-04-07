
var nombre = Math.floor(Math.random() * 10) + 1;
console.log("(La solution est " + nombre + ")");
for (var i = 0; i <= 2; i++) {
    let n=prompt ("Entrez un nombre entre 1 et 10 ");
       if (n < nombre) 
              {alert ("plus petit");} 
        else if (n >nombre)
             {alert ("plus grand");} 

         else if (n == nombre) 
         { console.log ("bravo!");
            break ;} 
}
if (i === 3){
let reponse = confirm("voulez vous rejouer ! ");
if(reponse){alert("commencer le jeu");}
}



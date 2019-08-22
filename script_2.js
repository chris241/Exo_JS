// factorielle
n = Number(prompt("De quel nombre veut tu calculer la factorielle ?"));
function fact(n){
var i = 1 ;	
var entree = n 
	while (i<entree -1) {
		n= n+n*i;
		i=i+1;
	}

	console.log("Le résultat est : ", n);
}
 fact(n);
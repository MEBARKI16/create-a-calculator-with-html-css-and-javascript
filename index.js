let ecran = document.querySelector('#ecran');
let memoire = document.querySelector('#memoire');

let affiche = "";
let op = null;
let prec = 0;
let mem;
window.onload = () => { 
let btn = document.querySelectorAll("span");

for(let bt of btn)
{
    bt.addEventListener('click', operate);
}}

mem = (localStorage.mem)? parseFloat(localStorage.mem):0;
if (mem != 0) memoire.style.display="initial"
function operate()
{
    let c = this.innerText;
    if(parseFloat(c)>= 0 || c ==".")
    {
if(affiche=="")
    {
    ecran.innerHTML = c;
    affiche = c.toString();
    }
    else 
    {
        affiche = affiche + c.toString();
        ecran.innerHTML = affiche;
     
    }
}
else
{
 
    switch(c.toString())
    {
   case "C" : prec = 0; affiche = "";ecran.innerHTML = "0"; operate = null; 
   break;
   case "+" :
   case "-" :
   case "*" :
   case "/" : prec = (prec == 0)? parseFloat(affiche) : calculer(prec,parseFloat(affiche),operate.toString());
   console.log(parseFloat(affiche));
   ecran.innerHTML = prec;
   operate = c.toString();
   affiche = "";  
   break;  
   case "=" : 
   prec = (prec == 0)? parseFloat(affiche) : calculer(prec,parseFloat(affiche),operate.toString());
   console.log(parseFloat(affiche));
   ecran.innerHTML = prec;
   affiche = prec;
   prec = 0;
   break;     
   case "M+":
    localStorage.mem = (localStorage.mem) ? parseFloat(localStorage.mem) + parseFloat(affiche) : parseFloat(affiche);
    memoire.style.display="initial"
    break;
case "MC":
    
    localStorage.mem = 0;
    memoire.style.display = "none";
    break;
case "MR":
    // On récupère la valeur stockée
    mem = (localStorage.mem) ? parseFloat(localStorage.mem) : 0;
    affiche = mem;
    ecran.innerText = mem;
    break;
default:
    break;
}
}
/** 
*@param {number} nb1
*@param {number} nb2
*@param  {String} operate
*@returns number 
*/
function calculer(nb1,nb2,op)
{
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);
    if(op == "+") return nb1+nb2;
    if(op == "-") return nb1-nb2;
    if(op == "*") return nb1*nb2;
    if(op == "/") return nb1/nb2;

}
}
let ecran = document.querySelector('#ecran');
let memoire = document.querySelector('#memoire');

let affiche = "";
let op = null;
let act = 0;
let prec = 0;
window.onload = () => { 
let btn = document.querySelectorAll("span");
for(let bt of btn)
{
    bt.addEventListener('click', operate);
}}
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
// Import stylesheets
import './style.css';

// Write Javascript code!
var text ='';
var mese =  Math.floor(Math.random() * (12 - 1)) + 1;
console.log(mese)
var giorno = Math.floor(Math.random() * (30- 1)) + 1;
console.log(giorno)

if(mese== 2 && giorno==19){
  text= "è il compleanno del prof"
}else{
  text=''
}


const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h2>mese</h1>` + mese+ `<h2>giorno</h1>`+giorno +`<h2></h2>`+text;
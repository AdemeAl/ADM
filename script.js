console.log("ADM Console");

let language = prompt("Enter your language");

switch(language){
  case "anglais":
    alert("Hello !");
    break;
  case "aspagnol":
    alert("Hola !");
    break;
  case "arabe":
    alert("! مرحبًا ");
    break;
  case "allemand":
    alert("Guten Tag !");
      break;
  case "francais":
    alert("Bonjour !");
      break;
  default:
    alert("Language " + language + " not found !");
    
    
}
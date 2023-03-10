// Script for navigation bar
const bar=document.getElementById("bar");
bar.style.cursor="pointer"
bar.style.padding="10px";

bar.addEventListener('click',display);
function display(){
    const navbar=document.getElementById("navbar");
    navbar.style.right='0px';
    const cross=document.getElementById("cross");
   cross.addEventListener('click',Displaynoe);
   cross.style.cursor="pointer"
   cross.style.padding="10px"
   function Displaynoe(){
    navbar.style.right="-180px";
    
   }
  
}
//location change   for product 
const pro= document.getElementsByClassName("pro");
for(let i=0;i<pro.length;i++){
    pro[i].addEventListener('click',locationChange);
    function locationChange(){
     location.replace("http://localhost:8080/sproduct.html");
    }
}
 
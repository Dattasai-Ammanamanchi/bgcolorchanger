let colors=['blue','green','yellow','red','white','black'];

let btn=document.getElementById("changecolor");

btn.addEventListener("click",function(){
    
    randomcol=colors[Math.floor(Math.random() * colors.length)]
    
    let cor =document.getElementById("container");

     cor.style.background = randomcol;

     
})
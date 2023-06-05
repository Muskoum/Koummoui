let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brighness = document.getElementById("brighness");
let speia = document.getElementById("speia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let huterotate = document.getElementById("hute-rotate");
let opload = document.getElementById("opload");
let download = document.getElementById("download");
let img = document.getElementById("img");
let reset = document.querySelector("span");
let imgbox = document.querySelector(".img-box");
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");


function resetvalue(){
  img.style.filter="none";
  saturate.value="100";
  contrast.value="100";
  brighness.value="100";
  speia.value="0";
  grayscale.value="0";
  blur.value="0";
  huterotate.value="0"
  
}
window.onload=function(){
  download.style.display="none";
  reset.style.display="none";
  imgbox.style.display="none";}
  upload.onchange=function(){
    resetvalue();
     download.style.display = "block";
     reset.style.display = "block";
     imgbox.style.display = "block";
     let file=new FileReader();
     file.readAsDataURL(upload.files[0]);
     file.onload=function()
     {
       img.src=file.result;
       
       
     }
     img.onload=function(){
       canvas.width=img.width;
       canvas.height=img.height;
       ctx.drawImage(img,0,0,canvas.width,canvas.height);
       img.style.display="none";
     }
     
    
  }
  let filters=document.querySelectorAll("ul li input");
  filters.forEach(  filter=>{
    filter.addEventListener('input',function(){
      ctx.filter='saturate(${saturate.value}%)'
      'contrast(${contrast.value}%)'
      'brighness(${brighness.value}%)'
      'speia(${speia.value}%)'
      'grayscale(${grayscale.value})'
      'blur(${blur.value}px)'
      'huterotate(${huterotate.value}deg)'
      ctx.drawImage(img,0,0,canvas.width,canvas.height);
      
    })
  }    )
  download.onclick=function(){
    download.href=canvas.toDataURL("image/jpeg");
  }

  

  
    
  


  
  
  
  
  
  
  
  






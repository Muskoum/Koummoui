let saturate= document.getElementBy id=("saturate");
let contrast= document.getElementById("contrast");
let brighness= document.getElementById("brighness");
let speia= document.getElementById("speia");
let grayscale= document.getElementById("grayscale");
let blur= document.getElementById("blur");
let hute-rotate= document.getElementById("hute-rotate");
let download= document.getElementById("download");
let upload= document.getElementById("upload");
let img= document.getElementById("img");
let reset= document.querySelector("span");
let imgBox= document.querySelector(".img-box");


window.onload= function(){
				download.style.display="none";
				
				reset.style.display="none";
				imgBox.style.display="none";
}
upload.onchange= function (){
				
				download.style.display="block";
				
				reset.style.display="block";
				imgBox.style.display="block";
				let file= new FileReader();
				file.readAsDataURL(
				upload.files[0])
				file.onload= function(){
								img.src= file.result;
				}
				
				
}
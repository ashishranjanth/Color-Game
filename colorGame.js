var hardmode= true;
var colors = [];
var squares = document.querySelectorAll(".square");
var resetBtn= document.querySelectorAll("#reset")[0];
var msg = document.querySelectorAll("#msg")[0]
var picked;

if(hardmode){
	randCol(6);
}
resetBtn.addEventListener("click",function(){
	this.textContent="NEW COLORS";
	randCol(6);
	document.querySelectorAll("#msg")[0].textContent="";
});

for(let i=0;i<colors.length;i++){
	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor===picked){
			resetBtn.textContent="PLAY AGAIN?";
			for(let j=0;j<colors.length;j++){
				squares[j].style.backgroundColor=picked;
			}
			msg.textContent="Correct!";
		}
		else{
			msg.textContent="Try Again";
		}
	});
}
function randCol(num){
	colors = [];
	for(let i=0;i<num;i++){
		var r= Math.floor(Math.random()*256);
		var g= Math.floor(Math.random()*256);
		var b= Math.floor(Math.random()*256);
		colors.push("rgb("+r+", "+g+", "+b+")");
		squares[i].style.backgroundColor=colors[i];
	}
	pick();
}
function pick(){
	picked=colors[Math.floor(Math.random()*colors.length)];
	document.querySelectorAll("#goal")[0].textContent=picked;
}
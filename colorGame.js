var hardmode= true;
var colors = [];
var squares = document.querySelectorAll(".square");
var resetBtn= document.querySelectorAll("#reset")[0];
var msg = document.querySelectorAll("#msg")[0]
var hardBtn = document.querySelectorAll("#hardBtn")[0];
var easyBtn = document.querySelectorAll("#easyBtn")[0];
var picked;

easyBtn.addEventListener(("click"),function(){
	document.querySelectorAll("#msg")[0].textContent="";
	randCol(3);
	disableRest();
});

hardBtn.addEventListener(("click"),function(){
	showAll();
	document.querySelectorAll("#msg")[0].textContent="";
	randCol(6);
});
if(hardmode){
	showAll();
	randCol(6);
}
resetBtn.addEventListener("click",function(){
	showAll();
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
			this.style.backgroundColor="black";
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
function disableRest(){
	for(let i=colors.length;i<squares.length;i++){
		if(squares[i]){
			squares[i].style.display="none";
		}
	}
}
function showAll(){
	for(let i=0;i<squares.length;i++){
		squares[i].style.display="block";
	}
}
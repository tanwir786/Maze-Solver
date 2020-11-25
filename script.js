var matrix=[];

for(var i=0;i<20;i++){
	var temp=[];
	for(var j=0;j<20;j++)
		temp.push(0);
	matrix.push(temp);
}

for(var i=19;i>=0;i--){
	for(var j=0;j<20;j++){
		var node = document.createElement("div");
		node.setAttribute("id", '_'+i+'_'+j);
		document.getElementById("board").appendChild(node);
	}
}

var random=[2,3,2,2,2,2,3];
var dx=[0,1,-1,0];
var dy=[1,0,0,-1];
for(var i=0;i<20;i++){
	for(var j=0;j<20;j++){
		var k=Math.floor(Math.random()*10)%7;
		var s='_'+i+'_'+j;
		var x=document.getElementById(s);
		if(random[k]%2===1){
			matrix[i][j]=1;
			x.style.background="#330000";
		}
		else{
			x.style.background="#FFFFCC";
		}
	}
}


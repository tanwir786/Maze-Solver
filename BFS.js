var pred=[];
var Call=[];

function PRINT(){
	for(var z=0;z<Call.length;z++){
		Task(z);
	}
}
function PrintPath(){
	var i=19,j=19;
	while(!(i==-1 && j==-1)){
		var ID='_'+i+'_'+j;
		var X=document.getElementById(ID);
		X.style.background="tomato"; 
		var t=i;
		i=pred[i][j][0];
		j=pred[t][j][1];
	}
}
function Task(i) { 
  	var cor=Call[i];
	var ID='_'+cor[0]+'_'+cor[1];
	
	setTimeout(function() {
		var X=document.getElementById(ID);
		X.style.background="skyblue"; 
		if(ID=="_19_19"){
  			PrintPath(); 
  		}
  	}, 100*i);
} 

function bfs(){
	for(var i=0;i<20;i++){
		var t=[];
		for(var j=0;j<20;j++){
			if(i==0 && j==0){
				t.push([-1,-1]);
				continue;
			}
			t.push([0,0]);
		}
		pred.push(t);
	}
	var q = new Queue();
	q.enqueue([0,0]);
  	while(1){
	  	var Size=q.size();
	  	if(Size==0)
	  		return;
	  	
	  	for(var j=0;j<Size;j++){ 
			var u=q.dequeue();
			var x=u[0], y=u[1];

			if(matrix[x][y]==1)
			continue;
			matrix[x][y]=1;
			Call.push(u);
			if(x==19 && y==19){
				PRINT();
				return;
			}
			for(var i=0;i<4;i++){ 
				if(x+dx[i]<0 || y+dy[i]<0 || x+dx[i]>19 || y+dy[i]>19 || matrix[x+dx[i]][y+dy[i]]==1)
					continue;
				pred[x+dx[i]][y+dy[i]]=u;
				q.enqueue([x+dx[i], y+dy[i]]);
			}
		}
	}
}
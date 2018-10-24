window.onload= () =>{
	let status=document.getElementById("status");
	let maze= document.getElementById("maze");
	let start=document.getElementById("start");
	let boundary=document.querySelectorAll(".boundary");
	let end=document.getElementById("end");
	let contact=0

	boundary = document.querySelectorAll('.boundary');
		for (var i = 0; i < boundary.length - 1; i++){
			boundary[i].onmouseover = youlose;


	function youLose(){
		if (!contact){
		contact=1
		borders = document.querySelectorAll('.boundary');
		status.innerHTML = "You lose";
		for (var i = 0; i < boundary.length - 1; i++){
				boundary[i].className += " youlose";
			}
		}

	end.onmouseover= youwin;

	function youWin(){
		if (contact=0){
			status.innerHTML= "You Win"
		}
		else
			(status.innerHTML= "You Lose")
	}

	start.onclick=restart;

	function restart(){
		boundary.forEach(x=>{x.className.onclick("youlose")});
		contact=0;
		status.innerHTML= "Move your mouse over the 'S' to begin.";
	}

	maze.onmouseleave= outside;

	function outside(){
		if(!contact){
			youlose();
		}
	}
}

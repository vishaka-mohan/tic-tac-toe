

let curr = "x";
let gameplay = true;

const cells = document.getElementsByClassName("cell");



function place(e)
{
	var flag = 0;
	var w = 0;


	
	console.log(cells);
	if(e.innerHTML.trim()=="" && gameplay)
	{

			console.log("placing element");
			console.log(curr);
			e.innerHTML = curr;
			if(curr.trim()=="x")

				curr = "o";

			else
				curr = "x";

			console.log(curr);

			document.getElementById("player").innerHTML = curr.toUpperCase();
			let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
			console.log(cells);

			for(let j = 0; j < win.length; j++)
			{
				if(cells[win[j][0]].innerHTML==cells[win[j][1]].innerHTML && cells[win[j][1]].innerHTML==cells[win[j][2]].innerHTML && cells[win[j][0]].innerHTML.trim()!="")
				{
					if(cells[win[j][0]].innerHTML=="x")
						document.getElementById("winprompt").innerHTML = "Congratulations, Player X has won!";
					else
						document.getElementById("winprompt").innerHTML = "Congratulations, Player O has won!";
					gameplay = false;
					w = 1;
					break;
				}

			}
			for(let j = 0; j < 9; j++)
			{
				if(cells[j].innerHTML.trim()=="")
				{
					flag = 1;
					break;

				}

			}
			if(flag==0 && w==0)
				document.getElementById("winprompt").innerHTML = "It is a draw";

	}

}

function reset()
{
	gameplay = true;
	
	
	for(let j = 0; j < 9; j++)
	{
		cells[j].innerHTML="";

	}
	document.getElementById("winprompt").innerHTML = "";

}



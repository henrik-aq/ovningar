let bildElement = document.getElementById("mittGlas");
let removeButton = document.getElementById('remove');

removeButton.addEventListener("click", RemoveImage);  //Event listener



function RemoveImage(){								  //Event listener
	document.body.removeChild(bildElement);
}

function ShowFull(){
	bildElement.src = "Full.jpg";
}

function ShowEmpty(){
	bildElement.src = "Empty.jpg";
}


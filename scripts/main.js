function createGrid(container, size){
	for (let i = 0; i<size*size;i++){
		let div = document.createElement('div');
		div.setAttribute("id",`div${i}`);
		container.appendChild(div);
	}

	container.style.display = 'grid';
	container.style.height = '100%';
	container.style.width = '100%';

	container.style.gridTemplateColumns = `repeat(${size}, ${100/size}%)`;
	container.style.gridTemplateRows =  `repeat( ${size}, ${100/size}%)`;
}

let container = document.querySelector('#container');
createGrid(container,50);
divs = container.children;

for (i=0; i<divs.length;i++){
	document.querySelector(`#div${i}`).addEventListener("mouseenter", function( event ) {   
  	// highlight the mouseenter target
  		console.log(document.querySelector(`#div${i}`))
  		event.target.style.background = "black";	
	}, false);
}



let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

let downloadBtn = document.getElementById('download-btn');
let uploadFile = document.getElementById('upload-file');
let revertBtn = document.getElementById('revert-btn');

// ADD filters & EFFECT
document.addEventListener('click', (e)=>{
	if (e.target.classList.contains('filter-btn')) {
		if (e.target.classList.contains('brightness-add')) {
			Caman("#canvas", img, function  () {
				this.brightness(5).render();
			})
		}else if (e.target.classList.contains('brightness-remove')) {
			Caman('#canvas', img, function  () {
				this.brightness(-5).render();
			})
		}else if (e.target.classList.contains('contrast-add')) {
			Caman('#canvas', img, function  () {
				this.contrast(5).render();
			})
		}else if (e.target.classList.contains('contrast-remove')) {
			Caman('#canvas', img, function  () {
				this.contrast(-5).render();
			})
		}else if (e.target.classList.contains('saturation-add')) {
			Caman('#canvas', img, function  () {
				this.saturation(5).render();
			})
		}else if (e.target.classList.contains('saturation-remove')) {
			Caman('#canvas', img, function  () {
				this.saturation(-5).render();
			})
		}else if (e.target.classList.contains('vibrance-add')) {
			Caman('#canvas', img, function  () {
				this.vibrance(5).render();
			})
		}else if (e.target.classList.contains('vibrance-remove')) {
			Caman('#canvas', img, function  () {
				this.vibrance(-5).render();
			})
		}else if (e.target.classList.contains('vintage-add')) {
			Caman('#canvas', img, function  () {
				this.vintage().render();
			})
		}else if (e.target.classList.contains('lomo-add')) {
			Caman('#canvas', img, function  () {
				this.lomo().render();
			})
		}else if (e.target.classList.contains('clarity-add')) {
			Caman('#canvas', img, function  () {
				this.clarity().render();
			})
		}else if (e.target.classList.contains('sincity-add')) {
			Caman('#canvas', img, function  () {
				this.sinCity().render();
			})
		}else if (e.target.classList.contains('crossprocess-add')) {
			Caman('#canvas', img, function  () {
				this.crossProcess().render();
			})
		}else if (e.target.classList.contains('pinhole-add')) {
			Caman('#canvas', img, function  () {
				this.pinhole().render();
			})
		}else if (e.target.classList.contains('nostalgia-add')) {
			Caman('#canvas', img, function  () {
				this.nostalgia().render();
			})
		}else if (e.target.classList.contains('hermajesty-add')) {
			Caman('#canvas', img, function  () {
				this.herMajesty().render();
			})
		}else if (e.target.classList.contains('greyscale-add')) {
			Caman('#canvas', img, function  () {
				this.greyscale().render();
			})
		}else if (e.target.classList.contains('invert-add')) {
			Caman('#canvas', img, function  () {
				this.invert().render();
			})
		}else if (e.target.classList.contains('love-add')) {
			Caman('#canvas', img, function  () {
				this.love().render();
			})
		}else if (e.target.classList.contains('sunrise-add')) {
			Caman('#canvas', img, function  () {
				this.sunrise().render();
			})
		}
	};
}) 

//Revert Filters
revertBtn.addEventListener('click', (e)=>{
	Caman('#canvas', img, function  () {
		this.revert();
	})
});

//upload file
uploadFile.addEventListener('change', (e) => {
    //get file
    let file = document.getElementById('upload-file').files[0];

    //init FileReader
    let reader = new FileReader();

    if (file) {
        //set file name
        fileName = file.name;
        //Read data as URL 
        reader.readAsDataURL(file);
    };
    //Add image to canvas 
    reader.addEventListener('load', () => {
        //Create img
        img = new Image();
        //Set src
        img.src = reader.result;
        //On image load, add to canvas
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute('data-caman-id');
        }
    }, false);
});

//DOWNLOAD IMAGE
downloadBtn.addEventListener('click', (e) =>{
	//Get file set
	let fileExtension = fileName.slice(-4);

	//init new fileName
	let newFileName;
	//check image type
	if (fileExtension === '.jpg' || fileExtension === '.png') {
		newFileName = fileName.substring(0, fileName.length - 4) + 'edited.jpg';
	}

	//Call Download
    download(canvas, newFileName);
});

//Download Function
function download (canvas, fileName) {
	//init event 
	let e;
	//Create link
	let link = document.createElement('a');

	//set props
	link.download = fileName;
	link.href = canvas.toDataURL('image/jpeg', 0.8)
	//new mouse event
	e = new MouseEvent('click');
	//Dispatch event 
	link.dispatchEvent(e)
}

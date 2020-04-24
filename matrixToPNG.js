var matrixToPNG = function(dimImgX,dimImgY,transX,transY,scaling) {

	let mtp = this;

	this.pos = createVector(transX || 0, transY || 0);
	this.dimImg = createVector(dimImgX || 1, dimImgY || 1);

	this.scaling = scaling || 1;


	this.immageMain = createImage(this.dimImg.x,this.dimImg.y);

	this.immageMain.loadPixels();
	this.immageMain.updatePixels();


	this.flagMostraMini = 1;

	this.arrColCode = [ color(0,0,0,0),
						color(0,0,0,255),
						color(255,255,255,255),
						color(255,0,0,255),
						color(0,255,0,255)
					  ];

	this.arrColNomi = [ "alpha 0",
						"black",
						"white",
						"red",
						"green"
					  ];



	// funzioni create

	this.createBlack = function() {

		mtp.immageMain.loadPixels();

			for(let k = 0; k < mtp.immageMain.width; k++) {
				for(let j = 0; j < mtp.immageMain.height; j++) {
					mtp.immageMain.set(k,j, color(0,0,0));
				}
			}

		mtp.immageMain.updatePixels();

		flagUpdateDraw = 1;
	}

	this.createUniformColor = function(colorToSet) {

		mtp.immageMain.loadPixels();

			for(let k = 0; k < mtp.immageMain.width; k++) {
				for(let j = 0; j < mtp.immageMain.height; j++) {
					mtp.immageMain.set(k,j, colorToSet);
				}
			}

		mtp.immageMain.updatePixels();

		flagUpdateDraw = 1;
	}

	this.createGradientColor = function(c1,c2,span1,span2) {

		mtp.immageMain.loadPixels();

			for(let k = 0; k < mtp.immageMain.width; k++) {
				for(let j = 0; j < mtp.immageMain.height; j++) {
					mtp.immageMain.set(k,j, color(0,k*3,j*3));
				}
			}

		mtp.immageMain.updatePixels();

		flagUpdateDraw = 1;
	}

	this.createRandomGrayscale = function() {

		mtp.immageMain.loadPixels();

			for(let k = 0; k < mtp.immageMain.width; k++) {
				for(let j = 0; j < mtp.immageMain.height; j++) {
					let c = round(random(255));
					mtp.immageMain.set(k,j, color(c,c,c));
				}
			}

		mtp.immageMain.updatePixels();

		flagUpdateDraw = 1;
	}

	this.createRandomBiColor = function(treshold) {

		let realTreshold = treshold || (255 / 2);

		mtp.immageMain.loadPixels();

			for(let k = 0; k < mtp.immageMain.width; k++) {
				for(let j = 0; j < mtp.immageMain.height; j++) {
					let c = (random(255) > realTreshold) * 255;
					mtp.immageMain.set(k,j, color(c,c,c));
				}
			}

		mtp.immageMain.updatePixels();

		flagUpdateDraw = 1;
	}

	this.createRandomBiColorAlpha = function(treshold) {

		let realTreshold = treshold || (255 / 2);

		mtp.immageMain.loadPixels();

			for(let k = 0; k < mtp.immageMain.width; k++) {
				for(let j = 0; j < mtp.immageMain.height; j++) {
					let n = (random(255) > realTreshold);
					let c = n * 255;
					// let a = n ? 0 : 255;
					let a = (! n) * 255;
					mtp.immageMain.set(k,j, color(c,c,c,a));
				}
			}

		mtp.immageMain.updatePixels();

		flagUpdateDraw = 1;
	}

	this.createRandomColor = function() {

		mtp.immageMain.loadPixels();

		for(let k = 0; k < mtp.immageMain.width; k++) {
			for(let j = 0; j < mtp.immageMain.height; j++) {
				let c1 = round(random(255));
				let c2 = round(random(255));
				let c3 = round(random(255));
				mtp.immageMain.set(j,k, color(c1,c2,c3));
			}
		}

		mtp.immageMain.updatePixels();

		flagUpdateDraw = 1;
	}







	// funzioni caricamento

	this.caricaMappa = function(arrMappa) {

		let dimx = arrMappa[0];
		let dimy = arrMappa[1];

		for(let k = 0; k < dimy; k++) {
			for(let j = 0; j < dimx; j++) {
				let caso = arrMappa[2 + k*dimy + j];
				mtp.changePixelCode(j,k,caso);
				// mtp.changePixel(j,k,mtp.arrColCode[caso]);
			}
		}

	}



	// funzioni modifica 

	this.nonBlackToAlpha = function() {

		mtp.immageMain.loadPixels();

		for(let k = 0; k < mtp.immageMain.width; k++) {
			for(let j = 0; j < mtp.immageMain.height; j++) {
				let r = mtp.immageMain.get(j,k)[0];
				let g = mtp.immageMain.get(j,k)[1];
				let b = mtp.immageMain.get(j,k)[2];
				let a = mtp.immageMain.get(j,k)[3];
				if((r+g+b != 0) || (a != 255)) {
					mtp.immageMain.set(j,k, mtp.arrColCode[0]);
					// mtp.changePixelCode.set(j,k, 0);
				}
			}
		}

		mtp.immageMain.updatePixels();
	}


	// funzioni modifica singoli pixel

	this.changePixelCode = function(xP,yP,code) {

		let caso = code || 0;
		mtp.changePixel(xP,yP,mtp.arrColCode[caso])

	}

	this.changePixel = function(xP,yP,colPassed) {

		let col = colPassed || mtp.arrColCode[0];

		mtp.immageMain.loadPixels();
			mtp.immageMain.set(xP,yP,col);
		mtp.immageMain.updatePixels();

		flagUpdateDraw = 1;

	}











	this.mostra = function() {
		push();
			translate(mtp.pos.x,mtp.pos.y);

			noStroke();

			for(let k = 0; k < mtp.immageMain.width; k++) {
				for(let j = 0; j < mtp.immageMain.height; j++) {
					let r = mtp.immageMain.get(j,k)[0];
					let g = mtp.immageMain.get(j,k)[1];
					let b = mtp.immageMain.get(j,k)[2];
					let a = mtp.immageMain.get(j,k)[3];
					let ix = j * scaling;
					let iy = k * scaling;
					if(a == 0) {
						let zz = ( (j+k+1) %2 ) * 50 + 130;
						fill( color(zz,zz,zz,150) );
					}
					else {
						fill( color(r,g,b,a) );
					}
					rect(ix, iy, scaling, scaling);
				}
			}


		pop();

		push();
			if(mtp.flagMostraMini) {
				translate(mtp.pos.x,mtp.pos.y);
				translate(mtp.immageMain.width*scaling,0);
				translate(mtp.pos.x,0);

				image(mtp.immageMain,0,0);
			}
		pop();
	}


















	this.salvaPNG = function(name,format) {

		let nomeOK = name || "map00";
		let formatoOK = format || ".png";

		save(mtp.immageMain, nomeOK + formatoOK);

	}














	// esecuzioni func default dopo creazione

	this.createBlack();
	this.createGradientColor();



	
}
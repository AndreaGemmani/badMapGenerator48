
var Pulsantiera = function() {


	let mtp = m1;
	let scr = scriv;
	let puls = this;


	this.createRandomGrayscale = function() {
		mtp.createRandomGrayscale();
	}

	this.createRandomBiColor = function() {
		mtp.createRandomBiColor(160);
	}

	this.togliBordi = function() {
		let dim = 48;
		for(let i = 0; i < dim; i++) {
			mtp.changePixelCode(i,0,0);
			mtp.changePixelCode(0,i,0);
			mtp.changePixelCode(dim-1,i,0);
			mtp.changePixelCode(i,dim-1,0);
		}
	}

	this.creaMappaBase = function() {
		let dim = 48;
		let arrMappaBase = [dim,dim];
		let sq48 = dim*dim;
		for(let i = 0; i < sq48; i++) arrMappaBase.push(1);

		mtp.caricaMappa(arrMappaBase);
		puls.togliBordi();
	}

	this.nonBlackToAlpha = function() {
		mtp.nonBlackToAlpha();
	}




	this.cambiaFlagMostraBrush = function() {
		scr.flagMostraBrush = ! scr.flagMostraBrush;
	}

	this.cambiaFlagMostraNomeCol = function() {
		scr.flagMostraNomeCol = ! scr.flagMostraNomeCol;
	}

	this.cambiaFlagPrendiSpigoli = function() {
		scr.flagPrendiSpigoli = ! scr.flagPrendiSpigoli;
	}



	this.cambiaSliderDimBrush = function() {
		scr.cambiaBrushSize(puls.sliderDimBrush.value());
		console.log("Dim brush set to " + puls.sliderDimBrush.value() + " pixels");

	}

	this.cambiaCol0 = function() {
		scr.numeroColCurr = 0;
	}
	this.cambiaCol1 = function() {
		scr.numeroColCurr = 1;
	}
	this.cambiaCol2 = function() {
		scr.numeroColCurr = 2;
	}
	this.cambiaCol3 = function() {
		scr.numeroColCurr = 3;
	}
	this.cambiaCol4 = function() {
		scr.numeroColCurr = 4;
	}






	this.salvaPNGmatrix = function() {
		mtp.salvaPNG();
	}


	var spaziaturaDx = 17.5;
	var spzXPulsDx = width + 20;
	// var spaziaturaOrizz = width / this.dimS2; // 50 per 3 (9), preferirei due righe per 4 (16)
	var spaziaturaVert = width + 20 ;
	// var spaziaturaOrizz = 50;


	this.rndGrayscaleButt = createButton("Rnd Graysc").position(spzXPulsDx,20);
	this.rndGrayscaleButt.mousePressed(puls.createRandomGrayscale);

	this.createRandomBiColorButt = createButton("Rnd BiColor").position(spzXPulsDx,70);
	this.createRandomBiColorButt.mousePressed(puls.createRandomBiColor);

	this.togliBordiButt = createButton("removeBorders").position(spzXPulsDx,120);
	this.togliBordiButt.mousePressed(puls.togliBordi);

	this.creaMappaBaseButt = createButton("createBaseMap").position(spzXPulsDx,170);
	this.creaMappaBaseButt.mousePressed(puls.creaMappaBase);

	this.nonBlackToAlphaButt = createButton("nonBlackToAlpha").position(spzXPulsDx,220);
	this.nonBlackToAlphaButt.mousePressed(puls.nonBlackToAlpha);


	this.cambiaFlagMostraBrushButt = createButton("flagShowBrush").position(spzXPulsDx,290);
	this.cambiaFlagMostraBrushButt.mousePressed(puls.cambiaFlagMostraBrush);

	this.cambiaFlagMostraNomeColButt = createButton("flagShowNameCol").position(spzXPulsDx,340);
	this.cambiaFlagMostraNomeColButt.mousePressed(puls.cambiaFlagMostraNomeCol);

	this.cambiaFlagPrendiSpigoliButt = createButton("flagCornerBrush").position(spzXPulsDx,390);
	this.cambiaFlagPrendiSpigoliButt.mousePressed(puls.cambiaFlagPrendiSpigoli);

	this.salvaPNGmatrixButt = createButton("savePNG").position(spzXPulsDx,450);
	this.salvaPNGmatrixButt.mousePressed(puls.salvaPNGmatrix);

	this.cambiaCol0Butt = createButton("Alpha0").position(20,height+100);
	this.cambiaCol0Butt.mousePressed(puls.cambiaCol0);
	this.cambiaCol1Butt = createButton("Black").position(120,height+100);
	this.cambiaCol1Butt.mousePressed(puls.cambiaCol1);
	this.cambiaCol2Butt = createButton("White").position(220,height+100);
	this.cambiaCol2Butt.mousePressed(puls.cambiaCol2);
	this.cambiaCol3Butt = createButton("Red").position(320,height+100);
	this.cambiaCol3Butt.mousePressed(puls.cambiaCol3);
	this.cambiaCol4Butt = createButton("Green").position(420,height+100);
	this.cambiaCol4Butt.mousePressed(puls.cambiaCol4);




	this.sliderDimBrush = createSlider(1,200,20,1).position(50,height+50);
	this.sliderDimBrush.changed(puls.cambiaSliderDimBrush);


	puls.cambiaSliderDimBrush();


}
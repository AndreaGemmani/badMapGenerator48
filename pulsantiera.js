
// necessarieo scrivere func prima che vengano legate ai pulsanti

var Pulsantiera = function() {


	let mtp = m1;
	let scr = scriv;
	let puls = this;


	this.randomFunction = function() {
		Sudoku.nuovoRandom();
		// Sudoku.testP(1);
	}

	this.sudokuVuoto = function() {
		Sudoku.nuovoRandom("vuoto");
	}

	this.risolviFunction = function() {
		Sudoku.risolvi();
	}

	this.testoStronzoFunction = function() {
		testoStronzo = !testoStronzo;
	}

	this.mostraPossFunction = function() {
		Sudoku.mostraTuttiPossibiliFlag = ! Sudoku.mostraTuttiPossibiliFlag;
	}


	this.scriviUno = function() {
		scrivitore.cambiaCorrente(1);
	}

	this.scriviN = function(n) {
		scrivitore.cambiaCorrente(n);
	}

	this.scriviCanc = function() {
		scrivitore.cambiaCorrente(-1);
	}

	this.scriviCancPoss = function() {
		// scrivitore.cambiaCorrente(-1); // nope, mi serve n
		scrivitore.tipoInserim = 2;
	}

	this.insFisso = function() {
		scrivitore.tipoInserim = 0;
	}

	this.insSoluz = function() {
		scrivitore.tipoInserim = 1;
	}

	this.consoleSudoku = function() {
		Sudoku.consoleSudoku();
	}

	this.randomSolFunc = function() { // da spostare 
		let gino = new CreatoreSudoku();
		gino.randomizzaSoluzione();
		console.log("Spostare creazione CreatoreSudoku da PulsantieraSudoku!")
	}

	this.modificaDimSudFunc = function() {
		if(selfo.dimS == 3) {
			dimS = 4;
			dimS2 = 4*4;
		}
		else {
			dimS = 3;
			dimS2 = 3*3;
		}
		selfo.togliVecchiPulsanti(); // wow fiko funziona
		setup();
	}

	// (*) a dire il vero vedo che l'elemento esiste ancora in p5 anche se non lo visualizza in canvas,
	// ho paura che l'istanza rimanga da qualche parte e che quindi continuare a crearne di nuovi
	// senza distruggere realmente i vecchi possa gravare sulla memoria occupata viste le dimensioni
	// di un elemento, da rivedere
	this.togliVecchiPulsanti = function() { // questo funziona (o forse no, leggi nota sopra (*) )
		for(let i = selfo.arrP.length -1; i >= 0; i--) {
			selfo.arrP[i].elt.remove();
		}
		// free real estate (IN REALTà non sono sicuro tolga lunghezza ad arrP, anzi)
		// for(let i = 0; i < selfo.arrP.length) {
		// 	selfo.arrP[0].elt.remove();
		// }
	}

	this.evidenziaNumeroFunc = function() {
		Sudoku.evidenziaNumeroFlag = ! Sudoku.evidenziaNumeroFlag;
		
	}


	this.usaCharHex = function() {
		for(let i = 9; i < selfo.arrP.length; i++) {
			selfo.arrP[i].elt.innerText = String.fromCharCode(65-9+i);
			selfo.arrP[i].elt.innerHTML = String.fromCharCode(65-9+i);
		}
	}

	this.usaNumeri = function() {
		for(let i = 9; i < selfo.arrP.length; i++) {
			selfo.arrP[i].elt.innerText = i+1;
			selfo.arrP[i].elt.innerHTML = i+1;
		}
	}

	this.controllaUsoCharNum = function() {
		if(Sudoku.altriNomiFlag) {
			selfo.usaCharHex();
		}
		else {
			selfo.usaNumeri();
		}
	}

	this.switchUsoCharNum = function() {
		Sudoku.modificaAltriNomiFlag();
		selfo.controllaUsoCharNum();
	}

	this.usaRndChar = function(seed) {
		let rndChar = (! isNaN(seed) ) ? seed : round(random(0,8000));
		for(let i = 0; i < selfo.arrP.length; i++) {
			let str = String.fromCharCode(rndChar+i);
			selfo.arrP[i].elt.innerText = str;
			selfo.arrP[i].elt.innerHTML = str;
			Sudoku.altriNomi[i+1] = str; // +1 perché qui non ho pulsante per zero
		}
		Sudoku.modificaAltriNomi();
		console.log("Nuovi char da " + rndChar);
	}

	this.modPulsN = function(nP,chr) {
		if(nP < this.arrP.length) {	
			// let str = String.fromCharCode(chr);
			let str = chr;
			selfo.arrP[nP].elt.innerText = str;
			selfo.arrP[nP].elt.innerHTML = str;
		}
	}



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



	this.arrP = [];

	var spaziaturaDx = 17.5;
	var spzXPulsDx = width + 20;
	// var spaziaturaOrizz = width / this.dimS2; // 50 per 3 (9), preferirei due righe per 4 (16)
	var spaziaturaVert = width + 20 ;
	// var spaziaturaOrizz = 50;

	// for(let i = 1; i < this.dimS2 + 1; i++) {
	// 	this.arrP.push( createButton(i).position(spaziaturaDx + spaziaturaOrizz * (i-1),spaziaturaVert) );
	// 	// https://thenewstack.io/mastering-javascript-callbacks-bind-apply-call/
	// 	// vorrei aver capito al 100% perché funziona ma magari la volta prossima
	// 	this.arrP[i-1].mousePressed(function() {
	// 		selfo.scriviN(i);
	// 	});
	// }
	// this.controllaUsoCharNum();


	// this.canc = createButton("Cancella Inserito").position(spaziaturaDx,spaziaturaVert + 40);
	// this.canc.mousePressed(this.scriviCanc);




	this.rndGrayscaleButt = createButton("Rnd Graysc").position(spzXPulsDx,20);
	this.rndGrayscaleButt.mousePressed(puls.createRandomGrayscale);

	this.createRandomBiColorButt = createButton("Rnd BiColor").position(spzXPulsDx,70);
	this.createRandomBiColorButt.mousePressed(puls.createRandomBiColor);

	this.togliBordiButt = createButton("togliBordi").position(spzXPulsDx,120);
	this.togliBordiButt.mousePressed(puls.togliBordi);

	this.creaMappaBaseButt = createButton("creaMappaBase").position(spzXPulsDx,170);
	this.creaMappaBaseButt.mousePressed(puls.creaMappaBase);

	this.nonBlackToAlphaButt = createButton("nonBlackToAlpha").position(spzXPulsDx,170);
	this.nonBlackToAlphaButt.mousePressed(puls.nonBlackToAlpha);


	this.cambiaFlagMostraBrushButt = createButton("FlagMostraBrush").position(spzXPulsDx,280);
	this.cambiaFlagMostraBrushButt.mousePressed(puls.cambiaFlagMostraBrush);

	this.cambiaFlagMostraNomeColButt = createButton("flagMostraNomeCol").position(spzXPulsDx,330);
	this.cambiaFlagMostraNomeColButt.mousePressed(puls.cambiaFlagMostraNomeCol);

	this.cambiaFlagPrendiSpigoliButt = createButton("FlagPrendiSpigoli").position(spzXPulsDx,380);
	this.cambiaFlagPrendiSpigoliButt.mousePressed(puls.cambiaFlagPrendiSpigoli);

	this.salvaPNGmatrixButt = createButton("salvaPNG").position(spzXPulsDx,450);
	this.salvaPNGmatrixButt.mousePressed(puls.salvaPNGmatrix);

	this.cambiaCol0Butt = createButton("Alpha0").position(20,height+100);
	this.cambiaCol0Butt.mousePressed(puls.cambiaCol0);
	this.cambiaCol1Butt = createButton("Nero").position(120,height+100);
	this.cambiaCol1Butt.mousePressed(puls.cambiaCol1);
	this.cambiaCol2Butt = createButton("Bianco").position(220,height+100);
	this.cambiaCol2Butt.mousePressed(puls.cambiaCol2);
	this.cambiaCol3Butt = createButton("Rosso").position(320,height+100);
	this.cambiaCol3Butt.mousePressed(puls.cambiaCol3);
	this.cambiaCol4Butt = createButton("Verde").position(420,height+100);
	this.cambiaCol4Butt.mousePressed(puls.cambiaCol4);




	this.sliderDimBrush = createSlider(1,200,20,1).position(50,height+50);
	this.sliderDimBrush.changed(puls.cambiaSliderDimBrush);


	puls.cambiaSliderDimBrush();


}
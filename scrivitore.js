var Scrivitore = function() {

	let mtp = m1;
	let scr = this;

	// 48
	this.dimMatrix = createVector(mtp.dimImg.x,mtp.dimImg.y);
	// 10 
	this.scalingMatrix = mtp.scaling;
	// dimMatrix * scalingMatrix = 480 
	this.dimCanvasMatrix = createVector(scr.dimMatrix.x * scr.scalingMatrix, scr.dimMatrix.y * scr.scalingMatrix);

	// punto NW e SE
	this.punto0 = createVector(mtp.pos.x, mtp.pos.y);
	this.puntoZ = createVector(this.dimCanvasMatrix.x + this.punto0.x, this.dimCanvasMatrix.y + this.punto0.y);


	this.numeroColCurr = 0;

	scr.flagUsoBrush = 1;
	this.actBrushTipe = 0; // 0 normale, 1 mirror, 2 
	this.actBrushSize = 70; 

	scr.flagMostraBrush = 1;
	scr.flagMostraNomeCol = 0;

	scr.flagPrendiSpigoli = 1;


	this.chechIfInRange = function(xp,yp) {
		let cxPix = (scr.punto0.x) + (xp+0.5) * scr.scalingMatrix;
		let cyPix = (scr.punto0.y) + (yp+0.5) * scr.scalingMatrix;
		let centroPunto = createVector(cxPix,cyPix);
		let dimBr = scr.actBrushSize + (scr.flagPrendiSpigoli * scr.scalingMatrix/2);

		return ( pow(mouseX - centroPunto.x, 2) + 
				 pow(mouseY - centroPunto.y, 2) < 
				 pow(dimBr, 2) );

	}

	this.controllaClickBrush = function() { // TODO: implementare quadtree magari o simili

		if( mouseX > scr.punto0.x - scr.actBrushSize && mouseX < scr.puntoZ.x + scr.actBrushSize && 
			mouseY > scr.punto0.y - scr.actBrushSize && mouseY < scr.puntoZ.y + scr.actBrushSize) {

			for(let k = 0; k < scr.dimMatrix.y; k++) {
				for(let j = 0; j < scr.dimMatrix.x; j++) {
					if(scr.chechIfInRange(j,k)) {
						console.log("Is in range " + j + "," + k);
						mtp.changePixelCode(j,k,scr.numeroColCurr);	
					}
				}
			}	
		}
		else {
			console.log("Click outside");
		}

	}

	this.controllaClickNoBrush = function() {
		if( mouseX > scr.punto0.x && mouseX < scr.puntoZ.x && 
			mouseY > scr.punto0.y && mouseY < scr.puntoZ.y) {
			// carcolo il punto in cui clicca riferito al quadratello di phi #0 index based
			let nX = floor((mouseX - scr.punto0.x) * scr.dimMatrix.x / scr.dimCanvasMatrix.x);
			let nY = floor((mouseY - scr.punto0.y) * scr.dimMatrix.y / scr.dimCanvasMatrix.y);
			console.log("Click on " + nX + " " + nY);

			mtp.changePixelCode(nX,nY,scr.numeroColCurr);	
		}
		else {
			console.log("Click outside");
		}		

	}


	this.controllaClick = function() {

		if(scr.flagUsoBrush) {
			scr.controllaClickBrush();
		}
		else {
			scr.controllaClickNoBrush();
		}		
	
	}









	// cambiare 100 con valore max array colori
	this.cambiaColCorrente = function(n) {
		if(typeof n === "number") {
			if(n > 0 && n < 100) {
				scr.numeroColCurr = n;
			}
		}
	}


	this.cambiaBrushSize = function(val) {
		if(typeof val === "number") {
			if(val > 0 && val < 1000) {
				scr.actBrushSize = val;
			}
			else {
				console.log("Value not in range");
			}
		}
		else {
			console.log("Value NaN");
		}
	}











	this.mostra = function() {

		push();
			if(scr.flagMostraNomeCol) {
				textSize(12);
				if(testoStronzo) textSize(8);
				noStroke();
				fill(230,50,120);
				text("Col: " + mtp.arrColNomi[scr.numeroColCurr], mouseX + 10, mouseY + 5);
			}

			if(scr.flagMostraBrush) {
				noFill();
				stroke(255);
				strokeWeight(2);
				ellipse(mouseX,mouseY,scr.actBrushSize*2,scr.actBrushSize*2);
			}

		
		
		pop();

	}





}
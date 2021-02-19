let tipoDesenho;
class DrawingEditor{

    constructor(idContainer,canvasHeight, canvasWidth){
        this.idCanvas = constroiCanvas(idContainer);
        this.typedrawn = null;
        this.object = null;
        this.canvas = new fabric.Canvas(this.idCanvas, {
            width:canvasWidth,
            height: canvasHeight,
            centeredRotation: false,     
            renderOnAddRemove: false,
            isDrawingMode: false
        });

        this.canvas.on('mouse:down',(event) => {

            if(tipoDesenho === "Circulo"){
                var circulo = ConstruirCirculo(event.pointer.y,event.pointer.x);
                this.canvas.add(circulo)               
            }else if(tipoDesenho ==="Linha"){

            }
            this.canvas.renderAll()
        });
        this.canvas.on('mouse:up',(event) => {});
        this.canvas.on('mouse:move',(event) => {});
    }
    setDrawingMode(type){
        if(type !=="Seletor"){
            this.canvas.isDrawingMode = true;            
        }else{
            this.canvas.isDrawingMode = false;       
        }
        tipoDesenho = type;
        this.canvas.renderAll()
    }
    mouseDown(){

    }
    mouseUp(){
        this.object = null;
    }
    mouseMove(){

    }    
}

function  constroiCanvas(idContainer) {
    const container = document.querySelector('#' + idContainer);
    const canvas = document.createElement('CANVAS');
    const idCanvas = `harmonizacao-Facial`;   
    canvas.setAttribute('id', idCanvas);
    container.appendChild(canvas);

    return idCanvas;
}

function ConstruirCirculo(top,left){
    return new fabric.Circle({ radius: 30, fill: '#f55', top: top, left: left });
}
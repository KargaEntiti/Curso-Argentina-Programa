class Forma{
    nombre:string="";
    Dibujar(){
        console.log("Implementacion metodo dibujar clase base");
    }
}

class Rectangulo extends Forma{
    base:number=0;
    altura:number=0;
    Dibujar(): void {
        console.log("Implementacion metodo Dibujar clase hija rectangulo");
    }
}
class Circulo extends Forma{
    radio:number=0;
    Dibujar(){
        console.log("Implementacion metodo dibujar clase hija circulo");
    }
}

let rectangulo = new Rectangulo();
rectangulo.Dibujar();

let circulo= new Circulo();
circulo.Dibujar();
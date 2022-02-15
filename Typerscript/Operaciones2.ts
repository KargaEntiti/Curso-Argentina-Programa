abstract class Operacion{
    protected valorA:number;
    protected valorB: number;
    protected resultado:number;
    abstract Operar():void;

    set ValorA(value: number){
        this.valorA=value;
    }
    set ValorB(value: number){}{
        this.valorB=value;
    }

    get Resultado():number{
        return this.resultado;
    }

}

class Suma extends Operacion{
    Operar(){
        this.resultado=this.valorA+this.valorB;
    }
}
class Resta extends Operacion{
    Operar(){
        this.resultado=this.valorA-this.valorB;
    }
}
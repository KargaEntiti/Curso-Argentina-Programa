interface IOperacion{
    Operar(a: number,b:number):number;
}
class Suma implements IOperacion{
    Operar(a: number,b: number): number{
        return a+b;
    }
}
class Resta implements IOperacion{
    Operar(a: number,b: number): number{
        return a-b;
    }
}
class Turbina{
    private numTurbinas:number =0;
    public constructor(n:number){
        this.numTurbinas = n;
    }
    public ToSting (){
        return this.numTurbinas + "Turbina/s";
    }
}
class Helice{
    private numHelice:number =0;
    public constructor(n:number){
        this.numHelice = n;
    }
    public ToSting (){
        return this.numHelice + "Helice/s";
    }
}
class TrenDeAterrizaje{
    private numTrenDeAterrizaje:number =0;
    public constructor(n:number){
        this.numTrenDeAterrizaje = n;
    }
    public ToSting (){
        return this.numTrenDeAterrizaje + "Tren de aterrizaje";
    }
}
class Alas{
    private numAlas:number =0;
    public constructor(n:number){
        this.numAlas = n;
    }
    public ToSting (){
        return this.numAlas + "Ala/s";
    }
}

class Cubierta{
    private cabinaTripulacion:boolean = false;
    private cabinaVuelo:boolean = false;
    private sistemaEmergencia:boolean = false;
    private numTanquesCombustible:number = 0;
    private numPuertasSalidas:number = 0;

    public constructor(pCabinaTripulacion:boolean, pCabinaVuelo:boolean, pSistemaEmergencia:boolean, pTanquesCombustible:number, pPuertasSalida:number){
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo=pCabinaVuelo;
        this.sistemaEmergencia=pSistemaEmergencia;
        this.numTanquesCombustible=pTanquesCombustible;
        this.numPuertasSalidas=pPuertasSalida;
    }

    public ToSting(){
        let mensaje="Cubierta compuesta de: ";
        if(this.cabinaVuelo){
            mensaje += " Cuebierta de Vuelo, ";
        } 
        if(this.cabinaTripulacion){
            mensaje +=" Cuebierta de Tripulacion, ";
        }
        if(this.sistemaEmergencia){
            mensaje +=" Sistema de Emergencia, ";
        }
        mensaje +=this.numTanquesCombustible+" Tanques de Combustible, ";
        mensaje+=this.numPuertasSalidas+" Puertas de Salida.";
        return mensaje;
    }
}

class Aeroplano{
    private helice:Helice;
    private trenAterrizaje:TrenDeAterrizaje;
    private alas: Alas;
    private cubierta:Cubierta;

    constructor(pHelice:Helice ,pTrenAterrizaje:TrenDeAterrizaje,pAlas: Alas,pCubierta:Cubierta){
        this.helice=pHelice;
        this.trenAterrizaje=pTrenAterrizaje;
        this.alas=pAlas;
        this.cubierta=pCubierta;
    }
    public ToSting (){
        let mensaje ="Aeroplano compuesto por: ";
        mensaje +=this.helice.ToSting();
        mensaje+=this.alas.ToSting ();
        mensaje+=this.trenAterrizaje.ToSting();
        mensaje+=this.cubierta.ToSting();
        return mensaje;
    }
}

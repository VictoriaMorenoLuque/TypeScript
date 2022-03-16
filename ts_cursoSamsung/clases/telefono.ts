export class Telefono {
    private _tipo: string;
    private _numero: number;
  
    constructor(tipo: string, numero: number ) {
      this._tipo = tipo;
      this._numero = numero;
    }
  
    public get tipo() : string {
      return this._tipo;
    }
    public set tipo(v : string) {
      this._tipo = v;
    }
    
    public get numero() : number {
      return this._numero;
    }
    public set numero(v : number) {
      this._numero = v;
    }
    
  }
export class Mail {
    private _tipo: string;
    private _direccion: string;
  
    constructor(tipo: string, direccion: string ) {
      this._tipo = tipo;
      this._direccion = direccion;
    }

    public get tipo() : string {
      return this._tipo;
    }
    public set tipo(v : string) {
      this._tipo = v;
    }
    
    public get direccion() : string {
      return this._direccion;
    }
    public set direccion(v : string) {
      this._direccion = v;
    }
    
  }
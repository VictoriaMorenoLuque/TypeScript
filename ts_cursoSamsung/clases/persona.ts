import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

export class Persona {
  private _nombre: string;
  private _apellidos: string;
  private _edad: number;
  private _dni: string;
  private _cumpleanos: Date;
  private _colorFavorito: string;
  private _sexo: string;
  private _direcciones: Array<Direccion>;
  private _mails: Array<Mail>;
  private _telefonos: Array<Telefono>;
  private _notas: string;

  constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: Date, colorFavorito: string, sexo: string, direcciones: Array<Direccion>, mails: Array<Mail>, telefonos: Array<Telefono>, notas:string) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._dni = dni;
    this._cumpleanos = cumpleanos;
    this._colorFavorito = colorFavorito;
    this._sexo = sexo;
    this._direcciones = direcciones;
    this._mails = mails;
    this._telefonos = telefonos;
    this._notas = notas;
  }

  public get nombre() : string {
    return this._nombre;
  }
  public set nombre(v : string) {
    this._nombre = v;
  }
  
  public get apellidos() : string {
    return this._apellidos;
  }
  public set apellidos(v : string) {
    this._apellidos = v;
  }
  
  public get edad() : number {
    return this._edad;
  }
  public set edad(v : number) {
    this._edad = v;
  }
  
  public get dni() : string {
    return this._dni;
  }
  public set dni(v : string) {
    this._dni = v;
  }
  
  public get cumpleanos() : Date {
    return this._cumpleanos;
  }
  public set cumpleanos(v : Date) {
    this._cumpleanos = v;
  }
  
  public get colorFavorito() : string {
    return this._colorFavorito;
  }
  public set colorFavorito(v : string) {
    this._colorFavorito = v;
  }
  
  public get sexo() : string {
    return this._sexo;
  }
  public set sexo(v : string) {
    this._sexo = v;
  }
  
  public get direcciones() : Array<Direccion> {
    return this._direcciones;
  }
  public set direcciones(v : Array<Direccion>) {
    this._direcciones = v;
  }
  
  public get mails() : Array<Mail> {
    return this._mails;
  }
  public set mails(v : Array<Mail>) {
    this._mails = v;
  }
  
  public get telefonos() : Array<Telefono> {
    return this._telefonos;
  }
  public set telefonos(v : Array<Telefono>) {
    this._telefonos = v;
  }
  
  public get notas() : string {
    return this._notas;
  }
  public set notas(v : string) {
    this._notas = v;
  }
  
  
}
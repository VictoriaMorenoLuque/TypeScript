"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    Object.defineProperty(Direccion.prototype, "calle", {
        get: function () {
            return this._calle;
        },
        set: function (v) {
            this._calle = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (v) {
            this._numero = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "piso", {
        get: function () {
            return this._piso;
        },
        set: function (v) {
            this._piso = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        set: function (v) {
            this._letra = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "codigoPostal", {
        get: function () {
            return this._codigoPostal;
        },
        set: function (v) {
            this._codigoPostal = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "poblacion", {
        get: function () {
            return this._poblacion;
        },
        set: function (v) {
            this._poblacion = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (v) {
            this._provincia = v;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    Object.defineProperty(Telefono.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (v) {
            this._tipo = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (v) {
            this._numero = v;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;

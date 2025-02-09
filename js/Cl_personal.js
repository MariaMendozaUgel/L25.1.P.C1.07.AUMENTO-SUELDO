export default class Cl_personal {
    constructor (nombre, tipoPersonal, sueldo) {
        this.nombre = nombre;
        this.tipoPersonal = tipoPersonal;
        this.sueldo = sueldo
    }

    set nombre (nombre) {
        this._nombre = nombre
    }

    get nombre () {
        return this._nombre
    }
    set tipoPersonal (tipoPersonal) {
        this._tipoPersonal= tipoPersonal
    }
    get tipoPersonal () {
        return this._tipoPersonal
    }
    set sueldo (sueldo) {
        this._sueldo = +sueldo
    }
    get sueldo () {
        return this._sueldo
    }

    aumentoPersonal() {
        if  (this.tipoPersonal == "obrero") {
            return this.sueldo * 0.2
        }
        else {
            return this.sueldo * 0.1
        }     
    }

}
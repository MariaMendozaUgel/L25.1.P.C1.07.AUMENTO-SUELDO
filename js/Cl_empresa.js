import Cl_personal from "./Cl_personal.js"
export default class Cl_empresa {
    constructor () {
        this.acumAumento = 0;
    }
    procesarPersonal(p) {
        this.acumAumento += p.aumentoPersonal();
    }

    totalAumento() {
        return this.acumAumento
    }
}
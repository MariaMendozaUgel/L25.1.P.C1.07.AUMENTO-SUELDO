import Cl_empresa from "./Cl_empresa.js";
import Cl_personal from "./Cl_personal.js";

let personal1 = new Cl_personal ("Juan", "obrero", 100),
    personal2 = new Cl_personal ("Ana", "obrero", 120),
    personal3 = new Cl_personal ("Lin", "administrativo", 200),
    personal4 = new Cl_personal ("Mary", "obrero", 50),
    personal5 = new Cl_personal ("Carlos", "Administrativo", 150);

    let empresa = new Cl_empresa()

    empresa.procesarPersonal(personal1)
    empresa.procesarPersonal(personal2)
    empresa.procesarPersonal(personal3)
    empresa.procesarPersonal(personal4)
    empresa.procesarPersonal(personal5)

    alert ("Total a pagar proxima quincena = $" + empresa.totalAumento());


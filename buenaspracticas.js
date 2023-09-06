let Edad_del_usuario = 25;
let tieneVehiculo = true;
function Comprobar_requisitos_del_usuario() {
    if (Edad_del_usuario >= 18 && tieneVehiculo === true) {
            return true;
        } else {
            return false;
        }
    }
console.log(Comprobar_requisitos_del_usuario());
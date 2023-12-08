const patch = document.getElementById('patch')
const Navbar = document.getElementById('Row1TopBar')

patch.style.height = (Navbar.clientHeight) + "px"

//Guarda el numero del modal abierto en la variable "a"
let a = 0
function setModalNumber(number){
    console.log(number)
    a = number    

    localStorage.removeItem("Postula");
    localStorage.setItem("Postula",number);

    HabilitarModal(number)
}

//Habilita el modal
function HabilitarModal(number){
    document.getElementById(number).style.display = "inherit"
    //1- Custodia de mercaderia ||2- Vigiladores ||3 Monitoreo CCTV ||4 Tecnicos Instaladores 
    // ||5 Personal de maestranza || 6- Mecanicos // 7-progrfamador Java // 8-Custodias especiales    
    



}

function CloseModal(){
    document.getElementById(a).style.display = "none"
}

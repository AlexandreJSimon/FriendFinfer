class Register {
    constructor(){

    }

    register(perfil) {
        let ev = JSON.parse(localStorage.getItem("perfilData"))

        if(!ev)
            ev = []

        ev.push(perfil)

        localStorage.setItem("perfilData", JSON.stringify(ev))
    }


    showPerfil(){
        let ev = JSON.parse(localStorage.getItem("perfilData"))
        return ev[0]
    }

    isRegistred(){
        let ev = JSON.parse(localStorage.getItem("perfilData"))

        if(!ev){
            return false
        }

        return true
    }
}
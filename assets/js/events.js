class Event {
    constructor(){

    }

    addEvent(title, location) {
        let ev = JSON.parse(localStorage.getItem("eventData"))

        if(!ev)
            ev = []

        ev.push({ title: title, location: location })

        localStorage.setItem("eventData", JSON.stringify(ev))
    }

    loadEvents(element){
        let ev = JSON.parse(localStorage.getItem("eventData"))
        let c = '';
        if(!ev || ev.length == 0){
            c = '<li>Nenhum evento encontrado</li>'
        }else{
            for(let i = 0; i < ev.length; i++){
                c = c + '<li><span onclick="loadSingleEvent('+i+')"><i class="fas fa-users"></i>'+ev[i].title+'</span> <button onclick="removeEvent('+i+')"><i class="fas fa-trash-alt"></i></button></li>'
            }
        }
        element.innerHTML = c
    }

    showEvent(id){
        let ev = JSON.parse(localStorage.getItem("eventData"))
        return ev[id]
    }

    removeEvent(id){
        let ev = JSON.parse(localStorage.getItem("eventData"))
        ev.splice(id, 1);
        localStorage.setItem("eventData", JSON.stringify(ev))
    }
}
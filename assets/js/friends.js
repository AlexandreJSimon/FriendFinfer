class Friend {
    constructor(){

    }

    addFriends(friend) {
        let ev = JSON.parse(localStorage.getItem("friendData"))

        if(!ev)
            ev = []

        ev.push(friend)

        localStorage.setItem("friendData", JSON.stringify(ev))
    }

    loadFriends(element){
        let ev = JSON.parse(localStorage.getItem("friendData"))
        let c = '';
        if(!ev || ev.length == 0){
            c = '<li>Nenhum amigo encontrado</li>'
        }else{
            for(let i = 0; i < ev.length; i++){
                c = c + '<li><span onclick="loadSingleFriend('+i+')"><img src="'+ev[i].image+'" /><b>'+ev[i].name+'</b></span> <button onclick="removeFriend('+i+')"><i class="fas fa-trash-alt"></i></button></li>'
            }
        }
        element.innerHTML = c
    }

    showFriend(id){
        let ev = JSON.parse(localStorage.getItem("friendData"))
        return ev[id]
    }

    removeFriend(id){
        let ev = JSON.parse(localStorage.getItem("friendData"))
        ev.splice(id, 1);
        localStorage.setItem("friendData", JSON.stringify(ev))
    }
}
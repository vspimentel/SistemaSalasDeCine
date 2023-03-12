const Video = {
	DosD: '2D',
	TresD: '3D',
}

const Audio = {
	Subtitulada: 'Subtitulada',
	Doblada: 'Doblada',
}

class Schedule{
    constructor(time, hall){
        this.time = time
        this.hall = hall
    }
}

class Movie{
    constructor(id, title, video, audio, schedule){
        this.id = id
        this.title = title
        this.video = video
        this.audio = audio
        this.schedule = schedule
    }
}

class Ticket{
    constructor(id, movie, schedule, sit_n){
        this.id = id
        this.movie =  movie
        this.schedule = schedule
        this.sit_n = sit_n
    }
}

function createTicket(ticket){
    return `<div class="ticket">
    <div class="ticket_title">${ticket.movie.title}</div>
    <div style="display: flex; justify-content: space-between;">
        <div class="ticket_tags">
            <div class="ticket_title_tag">
                ${ticket.movie.audio}
            </div>
            <div class="ticket_title_tag">
                ${ticket.movie.video}
            </div>
        </div>
        <div class="ticket_buttons" onclick="deleteTicket(${ticket.id})">
            <img src="../../resource/svg/delete.svg" height="15px">
            Borrar
        </div>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="ticket_data">
            ${ticket.schedule.time} - ${ticket.schedule.hall} - Butaca ${ticket.sit_n}
        </div>
        <div class="ticket_buttons">
            <img src="../../resource/svg/edit.svg" height="15px">
            Editar
        </div>
    </div>
</div>`
}

last_ticket_id = 1
movie_list = []
m = new Movie(1, "Pelicula 1", Video.DosD, Audio.Subtitulada, [new Schedule("18:00", "Sala 1")])
movie_list.push(m)
ticktet_list = []

function findMovie(movie_id){
    movie = null
    movie_list.forEach(m => {
        if(m.id == movie_id){
            console.log(movie_id)
            console.log(m.id)
            console.log(m.id == movie_id)
            movie = m
        }
    });
    return movie
}

function addTicket(movie_id, schedule_tag, sit="46"){
    schedule = new Schedule(schedule_tag.querySelector("#hour").innerHTML, schedule_tag.querySelector("#hall").innerHTML)
    movie = findMovie(movie_id)
    ticket = new Ticket(last_ticket_id, movie, schedule, sit)
    last_ticket_id++
    ticktet_list.push(ticket)
    updateTicket()
    updatePrice()
}

function updateTicket(){
    var list = document.getElementById("ticket_list")
    list.innerHTML = ""
    ticktet_list.forEach(ticket => {
        new_node = document.createElement("div")
        new_node.innerHTML = createTicket(ticket)
        list.appendChild(new_node)
    });
}

function updatePrice(){
    price = document.getElementById("total_price")
    price.innerHTML = `${ticktet_list.length*30}Bs`
}

function deleteTicket(ticket_id){
    for(var i = 0; i < ticktet_list.length; i++){
        if(ticktet_list[i].id == ticket_id)
            ticktet_list.splice(i, 1)
    }
    updateTicket()
    updatePrice()
}
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
    constructor(id, title, image, video, audio, schedule){
        this.id = id
        this.title = title
        this.image = image
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
        <div class="edit_buttons" onclick="deleteTicket(${ticket.id})">
            <img src="../../resource/svg/delete.svg" height="15px">
            Borrar
        </div>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="ticket_data">
            ${ticket.schedule.time} - ${ticket.schedule.hall} - Butaca ${ticket.sit_n}
        </div>
        <div class="edit_buttons">
            <img src="../../resource/svg/edit.svg" height="15px">
            Editar
        </div>
    </div>
</div>`
}

function createMovie(movie){
    return `<div class="movie_data">
    <div class="movie_pic">
        <div style="background-image: url(../../resource/images/${movie.image});" class="movie">
            <div class="movie_tag">${movie.video}</div>
            <div class="movie_tag">${movie.audio.substr(0,3).toUpperCase()}</div>
        </div>
    </div>
    <div class="titles">${movie.title}</div>
    <div id="schedule_${movie.id}"></div>
</div>`
}

function createMovieAd(movie){
    return `<div class="movie_data">
    <div class="movie_pic">
        <div style="background-image: url(../../resource/images/${movie.image});" class="movie">
            <div style="display: flex; justify-content: flex-end; gap: 5px;">
                <div class="movie_tag">${movie.video}</div>
                <div class="movie_tag">${movie.audio.substr(0,3).toUpperCase()}</div>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <div class="edit_buttons">
                    <img src="../../resource/svg/delete.svg" height="15px">
                    Borrar
                </div>
                <div class="edit_buttons">
                    <img src="../../resource/svg/edit.svg" height="15px">
                    Editar
                </div>
            </div>
        </div>
    </div>
    <div class="titles">${movie.title}</div>
    <div id="schedule_${movie.id}"></div>
</div>`
}

function createTimeTags(schedule){
    return `<div class="time_tag" onclick="addTicket(1, this)">
    <div hidden="hidden" id="hall">${schedule.hall}</div>
    <div id="hour">${schedule.time}</div>
</div>`
}


last_ticket_id = 1
movie_list = []
m = new Movie(1, "Pelicula 1", "movie.jpg",  Video.DosD, Audio.Subtitulada, [new Schedule("18:00", "Sala 1"), new Schedule("18:00", "Sala 1"), new Schedule("18:00", "Sala 1"), new Schedule("18:00", "Sala 1")])
movie_list.push(m)
m = new Movie(2, "Pelicula 1", "movie.jpg",  Video.DosD, Audio.Subtitulada, [new Schedule("18:00", "Sala 1")])
movie_list.push(m)
m = new Movie(3, "Pelicula 1", "movie.jpg",  Video.DosD, Audio.Doblada, [new Schedule("18:00", "Sala 1")])
movie_list.push(m)
m = new Movie(4, "Pelicula 1", "movie.jpg",  Video.TresD, Audio.Subtitulada, [new Schedule("18:00", "Sala 1")])
movie_list.push(m)
ticktet_list = []

function loadMovies(){
    var list = document.getElementById("movies")
    list.innerHTML = ""
    var i = 0
    movie_list.forEach(movie => {
        if(i%3 == 0){
            row = document.createElement("div")
            row.className = "movie_row"
            list.appendChild(row)
        }
        new_node = document.createElement("div")
        new_node.innerHTML = createMovie(movie)
        row.appendChild(new_node)
        loadSchedule(movie.id, movie.schedule)
        i++
    });
}

function loadSchedule(movie_id, schedule_list){
    var list = document.getElementById("schedule_" + movie_id)
    list.innerHTML = ""
    var i = 0
    schedule_list.forEach(movie => {
        if(i%3 == 0){
            s_row = document.createElement("div")
            s_row.className = "schedule_row"
            list.appendChild(s_row)
        }
        new_node = document.createElement("div")
        new_node.innerHTML = createTimeTags(movie)
        s_row.appendChild(new_node)
        i++
    });
}

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
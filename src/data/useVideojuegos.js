let videojuegos;

    
    fetch("http://localhost:8080/videoJuego/get?plataform=0&filter=0")
    .then(res => console.log(res))
    .then(data => {
        videojuegos = data;
    })


export default videojuegos;
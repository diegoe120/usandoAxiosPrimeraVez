let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if (pagina < 1000) {
        pagina += 1;
        cargarPeliculas();
    }
});

btnAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina -= 1;
        cargarPeliculas();
    }
});

const cargarPeliculas = async () => {
    try {
        const respuestaPeli = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=4047f87b5c7f18194cb9027abda2dc48&Language=es-AR`)
            .then();

        console.log(respuestaPeli);

        // Si la respuesta es correcta
        // if (respuestaPeli.status === 200) {
        //     const datos = await respuestaPeli;

        //     let peliculas = '';
        //     datos.results.forEach(pelicula => {
        //     peliculas += `
        // 		<div class="pelicula">
        // 			<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
        // 			<h3 class="titulo">${pelicula.title}</h3>
        // 		</div>
        // 	`;
        // });

        // document.getElementById('contenedor').innerHTML = peliculas;

        // } else if (respuesta.status === 401) {
        //     console.log('Pusiste la llave mal');
        // } else if (respuesta.status === 404) {
        //     console.log('La pelicula que buscas no existe');
        // } else {
        //     console.log('Hubo un error y no sabemos que paso');
        // }

    } catch (error) {
        console.log(error);
    }

}

cargarPeliculas();
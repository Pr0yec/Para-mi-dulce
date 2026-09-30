const contenido = document.getElementById("contenido");


// ========================================
// MOSTRAR MENÚ DE SORPRESAS
// ========================================

function mostrarSorpresa() {

    contenido.innerHTML = `

        <h1> 🖤 Para ti 🛐 </h1>

        <p>
            Elige una sorpresa...
        </p>

        <div class="sorpresas">

            <button class="boton-sorpresa" id="sorpresa1">
                <img
                    src="Fotos/Botones.jpg"
                    alt="Sorpresa 1"
                >
            </button>

            <button class="boton-sorpresa" id="sorpresa2">
                <img
                    src="Fotos/Botones.jpg"
                    alt="Sorpresa 2"
                >
            </button>

            <button class="boton-sorpresa" id="sorpresa3">
                <img
                    src="Fotos/Botones.jpg"
                    alt="Sorpresa 3"
                >
            </button>

            <button class="boton-sorpresa" id="sorpresa4">
                <img
                    src="Fotos/Botones.jpg" 
                    alt="Sorpresa 4"
                >
            </button>

        </div>

    `;


    document
        .getElementById("sorpresa1")
        .addEventListener("click", mostrarSorpresa1);


    document
        .getElementById("sorpresa2")
        .addEventListener("click", mostrarSorpresa2);


    document
        .getElementById("sorpresa3")
        .addEventListener("click", mostrarSorpresa3);


    document
        .getElementById("sorpresa4")
        .addEventListener("click", mostrarSorpresa4);

}



// ========================================
// SORPRESA 1
// ========================================

function mostrarSorpresa1() {

    contenido.innerHTML = `

        <div class="sorpresa1">

            <h1>💛 Para ti 💛</h1>

            <div class="mapa-amor">

                <div class="mensaje mensaje1">
                    Te amo mucho miamor 💗
                </div>

                <div class="mensaje mensaje2">
                    mi pequeña hermosa 🧡
                </div>

                <div class="mensaje mensaje3">
                    Eres mi cafe del dia☕✨
                </div>

                <div class="mensaje mensaje4">
                    Te amo muchísisisisimo
                </div>

                <img
                    class="gif-sorpresa1"
                    src="Fotos/Sorpresa1.gif"
                    alt="Hello Kitty"
                >

                <div class="mensaje mensaje5">
                    La salsa de mis papitas 🙂‍↕️🤌
                </div>

                <div class="mensaje mensaje6">
                    meeeeeewwwww😸💙
                </div>

                <div class="mensaje mensaje7">
                    La dueña de mis Sueños😼
                </div>

                <div class="mensaje mensaje8">
                    Te mereces lo mejor ✨
                </div>

                <div class="mensaje mensaje9">
                    mi universo bello 🌌
                </div>

                <div class="mensaje mensaje10">
                    la más chambeadora🧡
                </div>

            </div>

            <button
                class="boton-volver"
                id="volver"
            >
                ← Volver
            </button>

        </div>

    `;


    document
        .getElementById("volver")
        .addEventListener("click", mostrarSorpresa);

}



// ========================================
// SORPRESA 2 — PLAYLIST
// ========================================

function mostrarSorpresa2() {

    contenido.innerHTML = `

        <div class="sorpresa2">

            <h1>🎵 Nuestra playlist 🎵</h1>

            <p class="texto-playlist">
                Canciones que me hacen pensar en ti 💛
            </p>


            <div class="spotify">

                <iframe
                    src="https://open.spotify.com/embed/playlist/6HxyYV7SKwdH1bGFxkFN4y"
                    width="100%"
                    height="380"
                    frameborder="0"
                    allowtransparency="true"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>

            </div>


            <p class="mensaje-playlist">
                Cada canción tiene algo que me recuerda a ti. 💕
            </p>


            <button
                class="boton-volver"
                id="volver"
            >
                ← Volver
            </button>

        </div>

    `;


    document
        .getElementById("volver")
        .addEventListener("click", mostrarSorpresa);

}



// ========================================
// SORPRESA 3
// ========================================

// ========================================
// SORPRESA 3 — CARTA
// ========================================

// ========================================
// SORPRESA 3
// ========================================

function mostrarSorpresa3() {

    contenido.innerHTML = `

        <div class="sorpresa3">

            <h1>💌 Para ti</h1>

            <p class="subtitulo-carta">
                Hay algunas cosas que quiero decirte... 💛
            </p>

            <div class="cartas">

                <div class="carta carta1">

                    <div class="decoracion">
                        🌻
                    </div>

                    <h2>Parte 1 💛</h2>

                    <p>
                        Hay personas que llegan a nuestra vida
                        sin avisar y poco a poco terminan
                        convirtiéndose en alguien muy especial.
                    </p>

                    <p>
                        Y tú eres una de esas personas para mí.
                        Alguien capaz de hacer que un día normal
                        se vuelva un poquito más bonito.
                    </p>

                    <p>
                        No sé exactamente en qué momento
                        comenzaste a ocupar un lugar tan especial
                        en mi corazón...
                    </p>

                </div>


                <div class="carta carta2">

                    <div class="decoracion">
                        💕
                    </div>

                    <h2>Parte 2 🌻</h2>

                    <p>
                        Pero sí sé algo:
                        todo lo bonito que siento por ti
                        es completamente sincero.
                    </p>

                    <p>
                        Me gusta tenerte en mi vida,
                        compartir momentos contigo,
                        hacerte sonreír y crear recuerdos
                        que algún día podamos mirar
                        con una sonrisa.
                    </p>

                    <p class="frase-final">
                        Gracias por ser tú. 💛
                    </p>

                    <p class="firma">
                        Con mucho cariño,<br>
                        <strong>Juan Carlos</strong>
                    </p>

                </div>

            </div>


            <button class="boton-volver" id="volver">
                ← Volver
            </button>

        </div>

    `;

    document
        .getElementById("volver")
        .addEventListener("click", mostrarSorpresa);

}


// ========================================
// SORPRESA 4
// ========================================

// ========================================
// SORPRESA 4 — RECUERDOS
// ========================================

function mostrarSorpresa4() {

    contenido.innerHTML = `

        <div class="sorpresa4">

            <h1> Mi amor Hermosa </h1>

            <p class="subtitulo-recuerdos">
                La niña mas Hermosa del mundo 
            </p>


            <div class="album">


                <div class="foto-recuerdo">

                    <div class="foto">
                        <img
                            src="Fotos/Foto1.jpeg"
                            alt="Tan bella siempre"
                        >
                    </div>

                    <p>
                        Esa mirada que enamora
                    </p>

                </div>


                <div class="foto-recuerdo">

                    <div class="foto">
                        <img
                            src="Fotos/Foto2.jpeg"
                            alt="Nuestro recuerdo"
                        >
                    </div>

                    <p>
                        Tan perfecta como siempre
                    </p>

                </div>


                <div class="foto-recuerdo">

                    <div class="foto">
                        <img
                            src="Fotos/Foto3.jpg"
                            alt="Nuestro recuerdo"
                        >
                    </div>

                    <p>
                        Un recuerdo de tu belleza
                    </p>

                </div>


                <div class="foto-recuerdo">

                    <div class="foto">
                        <img
                            src="Fotos/Foto4.jpg"
                            alt="Nuestro recuerdo"
                        >
                    </div>

                    <p>
                        tan iconica miamor
                    </p>

                </div>

            </div>


            <p class="mensaje-final">
                Contemplando tu belleza 
            </p>


            <button class="boton-volver" id="volver">
                ← Volver
            </button>

        </div>

    `;


    document
        .getElementById("volver")
        .addEventListener("click", mostrarSorpresa);

}

// ========================================
// BOTÓN NO
// ========================================

function mostrarMensaje() {

    contenido.innerHTML = `

        <h1>¿Segura? 🥺</h1>

        <p>

            Preparé esto especialmente para ti...

            <br>

            por favor, déjame enseñártelo 💛

        </p>

        <div class="botones">

            <button id="btnQuieroVerla">
                Sí, quiero verla 💛
            </button>

        </div>

    `;


    document
        .getElementById("btnQuieroVerla")
        .addEventListener("click", mostrarSorpresa);

}



// ========================================
// BOTONES INICIALES
// ========================================

document
    .getElementById("btnSi")
    .addEventListener("click", mostrarSorpresa);


document
    .getElementById("btnNo")
    .addEventListener("click", mostrarMensaje);

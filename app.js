
// Datos del estudiante

const estudiante = {
    nombre: "",
    edad: "",
    familia: "",
    linaje: "",
    casa: "",
    animalPatronus: "",
    cualidades: "Valor, fuerza, audacia"
}

// Datos de la clase

const clases = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout"
}

// Sombreo seleccionador

if ( estudiante.linaje ==  "Mestizo" | estudiante.linaje == "muggle"  | estudiante.linaje == "Sangre pura" && estudiante.cualidades == "Valor, fuerza, audacia"){
    estudiante.casa = "Gryffindor";
}

if ( estudiante.linaje ==  "Mestizo" | estudiante.linaje == "muggle" && estudiante.cualidades == "Justicia, Lealtad, Paciencia"){
    estudiante.casa = "Hufflepuff(";
}

if ( estudiante.linaje ==  "Mestizo" | estudiante.linaje == "muggle"  | estudiante.linaje == "Sangre pura" && estudiante.cualidades == "Creatividad, Erudición, Inteligencia"){
    estudiante.casa = "Ravenclaw(";
}

if ( estudiante.linaje == "Sangre pura" && estudiante.cualidades == "Ambición, Determinación, Astucia"){
    estudiante.casa = "Slytherin";
}

// Definir la clase de Transformaciones

const claseTransformaciones = {
    Profesor: "Kevin Slughorn",
    Horario: "16:00",
    RastrearBoggarts: true,
    realizarTransformacionRiddikulu: function(){
        if(boggart){
            console.log("encantamiento Riddikulus");
        }
    },
    EnfrentarBoggart: function(boggart){
        console.log(`Datos originales del boggsrt:${boggart}`);
        console.log(`El boggart se ha tranformado en ${boggart.transformacion}`);
    }
}

// Objeto boggart

const boggart = {
    transformacion: {
    aracnofobia: {
        aspect: "araña",
        healt: 120,
        damange: 23,
        type: "veneno"
    },
    coulrofobia: {
        aspect: "payaso",
        healt: 100,
        damange: 30,
        type: "travesura"
    },
    ofidiofobia: {
        aspect: "serpiente",
        healt: 90,
        damange: 25,
        type: "veneno"
    },
    musofobia: {
        aspect: "ratas",
        healt: 5,
        damange: 2,
        type: "colonia"
    },
    dementor: {
        aspect: "dementor",
        healt: 150,
        damange: 30,
        type: "absorber"
    }
}
}

// BoggartEjemplo

const boggartEjemplo = claseTransformaciones.EnfrentarBoggart(boggart);

// Clase de defensa contra artes oscuras

const defensaContraLasArtesOscuras = {
    generarPatronus: function(){
        const animalPatronus = ["Raton","Cisne","Cabra","Fenix","zorro","Liebre","Gato","Lobo","Caballo",""];
        const random = animalPatronus[Math.floor(Math.random()*animalPatronus.length)];
        estudiante.animalPatronus = random;
    }
}

defensaContraLasArtesOscuras.generarPatronus();

// Funcion dementor

function dementor(){
    if(estudiante.animalPatronus == ""){
        console.log(`El estudiante ${estudiante.nombre} no pudo utilizar el hechizo patronus, ha sido absorbido por el dementor y ha sido llevado a la enfermeria`)
    }
    else{
        console.log(`El estudiante ${estudiante.nombre} utilizo el hechizo patronus y su animal fue el ${estudiante.animalPatronus}`)
    }
}

dementor();

console.log(estudiante);

/* Inicio de la interaccion */

function inicio(){
    const leyuza = document.getElementById("leyuza");
    const fondoBoton = document.getElementById("fondoBoton");
    const botonInicio = document.getElementById("btn");

  /*   estilos */
    
    leyuza.style.display = "none";
    fondoBoton.style.display = "none";
    botonInicio.style.display = "none";

    carta()
}

function carta(){
    const divCarta = document.getElementById("carta");
    divCarta.style.display = "flex";
}
// pacho ochoa

function formulario(){
    const divCarta = document.getElementById("carta");
    divCarta.style.display = "none";

    const divForm = document.getElementById("divForm");
    divForm.style.display = "block";
}

function datosEstudiante(e){
    divForm.style.display = "none";
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const family = document.getElementById("family");
    const linaje = document.getElementById("linage");

    estudiante.nombre = name.value;
    estudiante.edad = age.value;
    estudiante.familia = family.value;

    if (linaje.value == "muggle"){
        estudiante.linaje = "muggle";
    }
    if (linaje.value == "mestizo"){
        estudiante.linaje = "mestizo";
    }
    if (linaje.value == "sangrePura"){
        estudiante.linaje = "sangrePura";
    }



    bienvenida();
    e.preventDefault();
}

function bienvenida(){
    const divMensaje = document.getElementById("bienvenida");
    divMensaje.style.display = "block";
    
    const pBienvenida = document.createElement("p");
    pBienvenida.innerHTML = `Hola ${estudiante.nombre} te damos una calurosa bienvenida a Hogwart`;

    const newBtn = document.createElement("button");
    newBtn.textContent = "clases";

    divMensaje.append(pBienvenida,newBtn);
}

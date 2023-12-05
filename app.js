
// Datos del estudiante

const estudiante = {
    nombre: "wilmar",
    edad: 20,
    familia: "Puerta",
    linaje: "muggle",
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
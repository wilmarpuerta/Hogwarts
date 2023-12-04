
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


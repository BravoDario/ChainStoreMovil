import Client from "./Client"
const products = [
    {
        idProduct: 0,
        name: "Resident Evil 4",
        priceStore: 40.00,
        pricePage: 50.00,
        condition: "Nuevo",
        platform: "PlayStation 5",
        garanty: "Un año",
        description:"Resident Evil 4 es un remake del Resident Evil 4 original del 2005. Survival Horror de última generación "+ 
                    "reimaginado para el año 2023. en la experiencia de Survival Horror definitiva en la cual se cruzan la vida "+
                     "y la muerte, el terror y la catarsis.",
        publiquer: "ChainStore",
        year: "DD/MM/YYYY",
    }, {
        idProduct: 1,
        name: "Xbox SeriesX",
        priceStore: 15000.00,
        pricePage: 16000.00,
        condition: "Nuevo",
        platform: "Xbox",
        garanty: "Tres años",
        description:"Un juego es la actividad que realiza uno o más jugadores, empleando su imaginación o herramientas para crear "+
                    "una situación con un número determinado de reglas, donde puede o no haber ganadores y perdedores con el fin "+
                    "de proporcionar entretenimiento o diversión, en muchas ocasiones, incluso como herramienta educativa, pues e"+
                    "n la mayoría de los casos funcionan estimulando habilidades prácticas y psicológicas.",
        publiquer: "ChainStore",
        year: "DD/MM/YYYY",
    }, {
        idProduct: 2,
        name: "Mando Xbox 360",
        priceStore: 1500.00,
        pricePage: 1600.00,
        condition: "Nuevo",
        platform: "Xbox",
        garanty: "Dos años",
        description:"Un juego es la actividad que realiza uno o más jugadores, empleando su imaginación o herramientas para crear"+
                    "una situación con un número determinado de reglas, donde puede o no haber ganadores y perdedores con el fin "+
                    "de proporcionar entretenimiento o diversión, en muchas ocasiones, incluso como herramienta educativa, pues e"+
                    "n la mayoría de los casos funcionan estimulando habilidades prácticas y psicológicas.",
        publiquer: "ChainStore",
        year: "DD/MM/YYYY",
    }
]

const videogame = {
    idVideogame: 0,
    category: "Acción",
    clasification: "R",
    gender: "Acción",
    trailer: "",

    product: products[0]
}
const videogameConsole = {
    idConsola: 0,
    memory: "16 Gigabites",
    control: 50,
    resolution: "40px",
    capacity: "1 Terabite",
    memoryType: "Corto plazo",

    product: products[1]
}

const control = {
    idControl: 0,
    inalambrico: 50,
    color: "",
    conectoresDeEntrada: "",
    vibracion: 50,
    bluetooth: 50,

    product: products[2]
}

const location = {
    latitude: "",
    longitude: ""
}

const productLittleCar = [
    {
        idLittleCar: 0,
        date: "",
        client: Client,
        product: products[0],
    }
]

export default videogame;
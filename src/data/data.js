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
		description: "Un juego es la actividad que realiza uno o más jugadores, empleando su imaginación o herramientas para crear" +
			"una situación con un número determinado de reglas, donde puede o no haber ganadores y perdedores con el fin " +
			"de proporcionar entretenimiento o diversión, en muchas ocasiones, incluso como herramienta educativa, pues e" +
			"n la mayoría de los casos funcionan estimulando habilidades prácticas y psicológicas.",
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
		description: "Un juego es la actividad que realiza uno o más jugadores, empleando su imaginación o herramientas para crear" +
			"una situación con un número determinado de reglas, donde puede o no haber ganadores y perdedores con el fin " +
			"de proporcionar entretenimiento o diversión, en muchas ocasiones, incluso como herramienta educativa, pues e" +
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
		description: "Un juego es la actividad que realiza uno o más jugadores, empleando su imaginación o herramientas para crear" +
			"una situación con un número determinado de reglas, donde puede o no haber ganadores y perdedores con el fin " +
			"de proporcionar entretenimiento o diversión, en muchas ocasiones, incluso como herramienta educativa, pues e" +
			"n la mayoría de los casos funcionan estimulando habilidades prácticas y psicológicas.",
		publiquer: "ChainStore",
		year: "DD/MM/YYYY",
	}, {
		idProduct: 4,
		name: "God of war 3",
		priceStore: 1500.00,
		pricePage: 1600.00,
		condition: "Nuevo",
		platform: "Xbox",
		garanty: "Un año",
		description: "Un juego es la actividad que realiza uno o más jugadores, empleando su imaginación o herramientas para crear" +
			"una situación con un número determinado de reglas, donde puede o no haber ganadores y perdedores con el fin " +
			"de proporcionar entretenimiento o diversión, en muchas ocasiones, incluso como herramienta educativa, pues e" +
			"n la mayoría de los casos funcionan estimulando habilidades prácticas y psicológicas.",
		publiquer: "ChainStore",
		year: "DD/MM/YYYY",
	}, {
		idProduct: 5,
		name: "minecraft",
		priceStore: 1500.00,
		pricePage: 1600.00,
		condition: "Nuevo",
		platform: "Xbox",
		garanty: "Un año",
		description: "Un juego es la actividad que realiza uno o más jugadores, empleando su imaginación o herramientas para crear" +
			"una situación con un número determinado de reglas, donde puede o no haber ganadores y perdedores con el fin " +
			"de proporcionar entretenimiento o diversión, en muchas ocasiones, incluso como herramienta educativa, pues e" +
			"n la mayoría de los casos funcionan estimulando habilidades prácticas y psicológicas.",
		publiquer: "ChainStore",
		year: "DD/MM/YYYY",
	}
]

const videogames = [{
	idVideogame: 0,
	desarrollado: "",
	clasification: "R",
	gender: "Acción",
	trailer: "",

	product: products[0],
	fotos: [
		{
			idFoto: 1,
			foto: "https://http2.mlstatic.com/D_NQ_NP_644830-MLA50222950634_062022-O.webp",
			idProducto: 1
		},
		{
			idFoto: 2,
			foto: "https://ss423.liverpool.com.mx/lg/1050047756_1p.jpg",
			idProducto: 1
		},
		{
			idFoto: 3,
			foto: "https://ss423.liverpool.com.mx/lg/1050047756_2p.jpg",
			idProducto: 1
		}
	]
}, {
	idVideogame: 1,
	desarrollado: "",
	clasification: "R",
	gender: "Acción",
	trailer: "",

	product: products[3],
	fotos: [
		{
			idFoto: 5,
			foto: "https://cdn.gameplanet.com/wp-content/uploads/2022/11/24121746/resident-evil-4-remake-ps5.jpg?_ga=2.50641257.1914745646.1679197085-1128018023.1679197085&_gl=1*n81248*_ga*MTEyODAxODAyMy4xNjc5MTk3MDg1*_ga_V97PLX1VDX*MTY3OTIwNTY4Ni4yLjEuMTY3OTIwNTcxMC4wLjAuMA..",
			idProducto: 2
		},
		{
			idFoto: 6,
			foto: "https://cdn.gameplanet.com/wp-content/uploads/2022/11/20161621/ss-resident-evil-1.jpg?_ga=2.50641257.1914745646.1679197085-1128018023.1679197085&_gl=1*n81248*_ga*MTEyODAxODAyMy4xNjc5MTk3MDg1*_ga_V97PLX1VDX*MTY3OTIwNTY4Ni4yLjEuMTY3OTIwNTcxMC4wLjAuMA..",
			idProducto: 2
		},
		{
			idFoto: 7,
			foto: "https://cdn.gameplanet.com/wp-content/uploads/2022/11/20161624/ss-resident-evil-2.jpg?_ga=2.54957419.1914745646.1679197085-1128018023.1679197085&_gl=1*1z0yp3q*_ga*MTEyODAxODAyMy4xNjc5MTk3MDg1*_ga_V97PLX1VDX*MTY3OTIwNTY4Ni4yLjEuMTY3OTIwNTcxMC4wLjAuMA..",
			idProducto: 2
		},
		{
			idFoto: 14,
			foto: "https://http2.mlstatic.com/D_NQ_NP_679366-MLA45308148747_032021-O.webp",
			idProducto: 2
		},
	]
}, {
	idVideogame: 2,
	desarrollado: "",
	clasification: "AA",
	gender: "Aventura",
	trailer: "",

	product: products[4],
	fotos:[
		{
			idFoto: 8,
			foto: "https://http2.mlstatic.com/D_NQ_NP_714411-MLA52696806401_122022-O.webp",
			idProducto: 3
		},
		{
			idFoto: 9,
			foto: "https://http2.mlstatic.com/D_NQ_NP_802679-MLA52696885129_122022-O.webp",
			idProducto: 3
		},
		{
			idFoto: 14,
			foto: "https://http2.mlstatic.com/D_NQ_NP_679366-MLA45308148747_032021-O.webp",
			idProducto: 2
		},
		{
			idFoto: 14,
			foto: "https://http2.mlstatic.com/D_NQ_NP_679366-MLA45308148747_032021-O.webp",
			idProducto: 2
		}
	]
}
]

const videogameConsole = {
	idConsola: 0,
	memory: "16 Gigabites",
	control: 50,
	resolution: "40px",
	capacity: "1 Terabite",
	memoryType: "Corto plazo",

	product: products[1],
	fotos: []
}

const control = {
	idControl: 0,
	inalambrico: 50,
	color: "",
	conectoresDeEntrada: "",
	vibracion: 50,
	bluetooth: 50,

	product: products[2],
	fotos: []
}

const productLittleCar = [
	{
		idLittleCar: 0,
		date: "",
		client: Client,
		product: products[0],
	}
]

const fotos = [
	,
	,
	,
	{
		idFoto: 10,
		foto: "https://http2.mlstatic.com/D_NQ_NP_995465-MLA45731835097_042021-O.webp",
		idProducto: 4
	},
	{
		idFoto: 11,
		foto: "https://http2.mlstatic.com/D_NQ_NP_903613-MLA45731831377_042021-O.webp",
		idProducto: 4
	},
	{
		idFoto: 12,
		foto: "https://http2.mlstatic.com/D_NQ_NP_903613-MLA45731831377_042021-O.webp",
		idProducto: 4
	},
	{
		idFoto: 13,
		foto: "https://http2.mlstatic.com/D_NQ_NP_858605-MLA45308148746_032021-O.webp",
		idProducto: 5
	},
	{
		idFoto: 14,
		foto: "https://http2.mlstatic.com/D_NQ_NP_679366-MLA45308148747_032021-O.webp",
		idProducto: 5
	},
	{
		idFoto: 15,
		foto: "https://ss423.liverpool.com.mx/xl/1130520908-3p.jpg",
		idProducto: 5
	},
	{
		idFoto: 16,
		foto: "https://ss423.liverpool.com.mx/lg/1106013906.jpg",
		idProducto: 6
	},
	{
		idFoto: 17,
		foto: "https://ss423.liverpool.com.mx/lg/1106013906_1p.jpg",
		idProducto: 6
	},
	{
		idFoto: 18,
		foto: "https://ss423.liverpool.com.mx/lg/1106013906_3p.jpg",
		idProducto: 6
	}
]


export default videogames;
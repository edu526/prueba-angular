// Uso de Let y Const
const nombre = "César Tapia";
const edad = 32;
let PERSONAJE = {
	nombre: nombre,
	edad: edad
};

// Cree una interfaz que sirva para validar el siguiente objeto
let batman: IPersonaje = {
	nombre: "Bruno Díaz",
	artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
}

export interface IPersonaje {
	nombre: string;
	artesMarciales: string[];
}

// Convertir esta función a una función de flecha
let resultadoDoble = (a, b) => {
	return (a + b) * 2
}

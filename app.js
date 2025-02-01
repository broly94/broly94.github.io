// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

const arrayAmigos = [];

document.querySelector('.button-add').addEventListener('click', () => {
	if (amigo.value == '') {
		alert('Debe ingresar un nombre');
	}
	arrayAmigos.push(amigo.value);

	listaAmigos.innerHTML = '';

	arrayAmigos.forEach((element) => {
		listaAmigos.innerHTML += `
        <li>${element}</li>
        `;
	});

	amigo.value = '';
});

document.querySelector('.button-draw').addEventListener('click', () => {
	if (arrayAmigos.length == 0) {
		alert('Debe haber amigos agregados');
		return;
	}

	const indexRandom = Math.floor(Math.random() * arrayAmigos.length);

	console.log(indexRandom);

	resultado.innerHTML = `<h3>${arrayAmigos[indexRandom]}</h3>`;
});

const listaHistorico = document.getElementById("listaHistorico");

const modoNoturno = document.querySelector(".nocturneMode");

const teclado = document.getElementById("teclado");

const visor = document.getElementById("visor");

let numero = "";

let primeiroNumero = "";

let operador = "";

let historico = JSON.parse(localStorage.getItem("historico")) || [];
//modo noturno
modoNoturno.addEventListener("click", function () {
  document.querySelector(".calculadora").classList.toggle("dark");

  if (document.querySelector(".calculadora").classList.contains("dark")) {
    modoNoturno.textContent = "⭐";
  } else {
    modoNoturno.textContent = "🌙";
  }
});

//histórico de cálculos
function adicionarHistorico(conta) {
  historico.push(conta);

  localStorage.setItem("historico", JSON.stringify(historico));

  listaHistorico.innerHTML = "";

  historico.forEach(function (item) {
    const elemento = document.createElement("p");

    elemento.textContent = item;

    listaHistorico.appendChild(elemento);
  });
}

//mostra os cálculos mesmo após o reset da página
function mostrarHistorico() {
  listaHistorico.innerHTML = "";

  historico.forEach(function (item) {
    const elemento = document.createElement("p");

    elemento.textContent = item;

    listaHistorico.appendChild(elemento);
  });
}

//funcionalidade da calculadora
teclado.addEventListener("click", function (evento) {
  const valor = evento.target.textContent;

  console.log(valor);

  if (
    valor !== "+" &&
    valor !== "=" &&
    valor !== "*" &&
    valor !== "-" &&
    valor !== "/" &&
    valor !== "%"
  ) {
    numero = numero + valor;
  }

  if (
    valor === "+" ||
    valor === "*" ||
    valor === "-" ||
    valor === "/" ||
    valor === "%"
  ) {
    primeiroNumero = Number(numero);

    operador = valor;

    numero = "";
  }

  if (valor === "=") {
    const segundoNumero = Number(numero);

    if (operador === "+") {
      const resultado = primeiroNumero + segundoNumero;

      console.log(resultado);
      visor.value = resultado;

      adicionarHistorico(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);

      numero = "";

      console.log("SOMA");
    } else if (operador === "*") {
      const resultado = primeiroNumero * segundoNumero;

      console.log(resultado);
      visor.value = resultado;

      console.log("MULTIPLICAÇÂO");

      adicionarHistorico(`${primeiroNumero} * ${segundoNumero} = ${resultado}`);

      numero = "";
    } else if (operador === "-") {
      const resultado = primeiroNumero - segundoNumero;

      console.log(resultado);
      visor.value = resultado;

      console.log("SUBTRAÇÂO");

      adicionarHistorico(`${primeiroNumero} - ${segundoNumero} = ${resultado}`);

      numero = "";
    } else if (operador === "/") {
      const resultado = primeiroNumero / segundoNumero;

      console.log(resultado);
      visor.value = resultado;

      console.log("DIVISÂO");

      adicionarHistorico(`${primeiroNumero} / ${segundoNumero} = ${resultado}`);

      numero = "";
    }
  }
});

mostrarHistorico();
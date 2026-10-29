const teclado = document.getElementById("teclado");

const visor = document.getElementById("visor");

let numero = "";

let primeiroNumero = "";

let operador = "";

//eventClick
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

      numero = "";

      console.log("SOMA");
    } else if (operador === "*") {
      const resultado = primeiroNumero * segundoNumero;

      console.log(resultado);
      visor.value = resultado;

      console.log("MULTIPLICAÇÂO");

      numero = "";
    } else if (operador === "-") {
      const resultado = primeiroNumero - segundoNumero;

      console.log(resultado);
      visor.value = resultado;

      console.log("SUBTRAÇÂO");

      numero = "";
    } else if (operador === "/") {
      const resultado = primeiroNumero / segundoNumero;

      console.log(resultado);
      visor.value = resultado;

      console.log("DIVISÂO");

      numero = "";
    }
  }
});

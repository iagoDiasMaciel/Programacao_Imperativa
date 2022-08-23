console.log(`

    Seja Bem vindo ao MICROONDAS SUPER VELOZ!
    Faça sua escolha e se surpreenda!

      PRATO ------ TEMPO RECOMENDADO
      pipoca     –   10 segundos
      macarrao   –   08 segundos
      carne      –   15 segundos
      feijao     –   12 segundos
      brigadeiro –   08 segundos
`);

let TipoDeComida = "";
let Tempo = 0;
function microondas(TipoDeComida, Tempo) {
  if (TipoDeComida == "pipoca" && Tempo < 10) {
    return "tempo insuficiente";
  } else if (TipoDeComida == "pipoca" && Tempo >= 10 && Tempo < 20) {
    return "Prato pronto, bom apetite!!!";
  } else if (TipoDeComida == "pipoca" && Tempo >= 20 && Tempo < 30) {
    return "A comida queimou";
  } else if (TipoDeComida == "pipoca" && Tempo >= 30) {
    return "KABUMM";
  } else if (TipoDeComida == "macarrao" && Tempo < 8) {
    return "tempo insuficiente";
  } else if (TipoDeComida == "macarrao" && Tempo >= 8 && Tempo < 16) {
    return "Prato pronto, bom apetite!!!";
  } else if (TipoDeComida == "macarrao" && Tempo >= 16 && Tempo < 24) {
    return "A comida queimou";
  } else if (TipoDeComida == "macarrao" && Tempo >= 24) {
    return "KABUMM";
  } else if (TipoDeComida == "carne" && Tempo < 15) {
    return "tempo insuficiente";
  } else if (TipoDeComida == "carne" && Tempo >= 15 && Tempo < 30) {
    return "Prato pronto, bom apetite!!!";
  } else if (TipoDeComida == "carne" && Tempo >= 30 && Tempo < 45) {
    return "A comida queimou";
  } else if (TipoDeComida == "carne" && Tempo >= 45) {
    return "KABUMM";
  } else if (TipoDeComida == "feijao" && Tempo < 12) {
    return "tempo insuficiente";
  } else if (TipoDeComida == "feijao" && Tempo >= 12 && Tempo < 24) {
    return "Prato pronto, bom apetite!!!";
  } else if (TipoDeComida == "feijao" && Tempo >= 24 && Tempo < 36) {
    return "A comida queimou";
  } else if (TipoDeComida == "feijao" && Tempo >= 36) {
    return "KABUMM";
  } else if (TipoDeComida == "brigadeiro" && Tempo < 8) {
    return "tempo insuficiente";
  } else if (TipoDeComida == "brigadeiro" && Tempo >= 8 && Tempo < 16) {
    return "Prato pronto, bom apetite!!!";
  } else if (TipoDeComida == "brigadeiro" && Tempo >= 16 && Tempo < 24) {
    return "A comida queimou";
  } else if (TipoDeComida == "brigadeiro" && Tempo >= 24) {
    return "KABUMM";
  } else {
    return "Prato inexistente";
  }
}

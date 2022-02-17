import readline from "readline-sync";

function convert(units: string[], value: number, startUnit: string, newUnit: string): number {
  const startIndex = units.indexOf(startUnit);
  const newIndex = units.indexOf(newUnit);
  const exponent = newIndex - startIndex;

  return value * Math.pow(10, exponent);
}

function exec(units: string[]) {
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");

  const startUnitChoice = readline.keyInSelect(units, "Escolha um número para a unidade base:", { cancel: "SAIR" });
  if (startUnitChoice === -1) return console.log("Saindo!");

  const newUnitChoice = readline.keyInSelect(units, "Escolha um número para a conversão:", { cancel: "SAIR" });
  if (newUnitChoice === -1) return console.log("Saindo!");

  const startUnit = units[startUnitChoice];
  const newUnit = units[newUnitChoice];
  const result = convert(units, value, startUnit, newUnit);

  const message = `${value}${units[startUnitChoice]} é igual a ${result}${units[newUnitChoice]}`

  console.log(message);
}

export default {
  convert,
  exec
}
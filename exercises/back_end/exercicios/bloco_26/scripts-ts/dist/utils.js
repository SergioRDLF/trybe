"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function convert(units, value, startUnit, newUnit) {
    const startIndex = units.indexOf(startUnit);
    const newIndex = units.indexOf(newUnit);
    const exponent = newIndex - startIndex;
    return value * Math.pow(10, exponent);
}
function exec(units) {
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const startUnitChoice = readline_sync_1.default.keyInSelect(units, "Escolha um número para a unidade base:", { cancel: "SAIR" });
    if (startUnitChoice === -1)
        return console.log("Saindo!");
    const newUnitChoice = readline_sync_1.default.keyInSelect(units, "Escolha um número para a conversão:", { cancel: "SAIR" });
    if (newUnitChoice === -1)
        return console.log("Saindo!");
    const startUnit = units[startUnitChoice];
    const newUnit = units[newUnitChoice];
    const result = convert(units, value, startUnit, newUnit);
    const message = `${value}${units[startUnitChoice]} é igual a ${result}${units[newUnitChoice]}`;
    console.log(message);
}
exports.default = {
    convert,
    exec
};

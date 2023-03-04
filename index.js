//const prompt = require("prompt-sync")()
import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nome = prompt("Digite o seu nome: ")
console.log(`Olá, ${nome}!`)

const temp = Number(prompt("Digite a temperatura: "))

if(temp > 38){
    console.log(`Febre`)
}else if(temp < 32){
    console.log(`Hipotermia`)
}else{
    console.log(`Temperatura ok`)
}
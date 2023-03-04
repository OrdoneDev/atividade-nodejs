import chalk from "chalk"
//const prompt = require("prompt-sync")()
import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nome = prompt("Digite o seu nome: ")
console.log(`Olá, ${nome}!`)

const temp = Number(prompt("Digite a temperatura: "))

if(temp > 38){
    console.log(chalk.red(`Febre`))
}else if(temp < 32){
    console.log(chalk.blue(`Hipotermia`))
}else{
    console.log(chalk.green(`Temperatura ok`))
}
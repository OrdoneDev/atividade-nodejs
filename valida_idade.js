import chalk from "chalk"
import PromptSync from "prompt-sync"
const prompt = PromptSync()

const anoAtual = new Date()
let dataNascimento = Number(prompt("Informe o ano do seu nascimento: "))
let idade = anoAtual.getFullYear() - dataNascimento

console.log(`Sua idade é: ${idade}`)

if(idade > 18){
    console.log(chalk.green("Você já pode tirar a sua CNH"))
}else{
    console.log(chalk.red("Você precisa ter no mínimo 18 anos para tirar a CNH!"))
}
import PromptSync from "prompt-sync"
const prompt = PromptSync()

const ano_atual = new Date()
let data_nascimento = Number(prompt("Informe o ano do seu nascimento: "))
let idade = ano_atual.getFullYear() - data_nascimento

console.log(`Sua idade é: ${idade}`)

if(idade > 18){
    console.log("Você já pode tirar a sua CNH")
}else{
    console.log("Você precisa ter no mínimo 18 anos para tirar a CNH!")
}
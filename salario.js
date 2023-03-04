import chalk from "chalk"
import PromptSync from "prompt-sync"

const prompt = PromptSync()

let salario = Number(prompt("Informe o salário: "))
let porcentagem = Number(prompt("Informe a porcentagem: "))

salario = salario * (1 + (porcentagem/100))

console.log(chalk.blue(`Novo valor do salário: ${salario}`))
import chalk from "chalk"
import PromptSync from "prompt-sync"

const prompt = PromptSync()

let valor1 = Number(prompt(chalk.bgWhite.black("Informe o 1º Valor: ")))
let valor2 = Number(prompt(chalk.bgWhite.black("Informe o 2º Valor: ")))
let valor3 = Number(prompt(chalk.bgWhite.black("Informe o 3º Valor: ")))
let valor4 = Number(prompt(chalk.bgWhite.black("Informe o 4º Valor: ")))
let valor5 = Number(prompt(chalk.bgWhite.black("Informe o 5º Valor: ")))

let media = (valor1 + valor2 + valor3 + valor4 + valor5)/5
console.log(chalk.bgBlue.white(`Média: ${media}`))
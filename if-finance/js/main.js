/*console.log("Arquivo JS externo!")

// LET cria uma variável, que não possa ser recriada uma mesma variavel no bloco
// VAR cria uma variavel, permite recriar uma mesma variavel no bloc
// CONST cria uma constante

//exemplo escopo de bloco
let nome = "renan"

if (true) {
    let nome = "Pedro"
    console.log(nome)
}

console.log(nome)

//tipos de variáveis

//let var2 = "renan" + "Cavichi" String padrão
let var2 = `${nome} Cavichi ` //template string
var2 = 10
var2 = 34.5
var2 = true
var2 = [12, 54, 14]
var2 = {nome: "Renan", idade: 40}
console.log(var2)

//estrutura condicional
if (nome == "Renan") {

} else if(nome == "Pedro"){

} else{

}

// estrutura de repetição
for (let i = 0; i < 10; i++) {
 
}

const valor1 = 10
const valor2 = "10"

// comparação de valores e tipos ===
if (valor1 === valor2) {
    
}

const nomeCompleto = true
const meuNome = nomeCompleto ? "Guilherme Gomes" : "Guilherme"

//function soma(valor1, valor2){
//    return valor1 + valor2
//}

const soma = (valor1, valor2) => {
    return valor1 + valor2
}

const mostrar = "idade"

const user = {
    nome: "Guilherme",
    idade: 20,
    email: "guilhermegomes.luccas@gmail.com",
    endereco: {
        rua: "Manoel Gaspar",
        numero: 51,
        bairro: "Morro do algodão"
    },
    soma: soma,
    consoles: ["PS5", "switch", {teste: 10, valor: 50}]
}

const newUser = {
    ...user.endereco, rua: "Av. GUilherme de almeida"
}


console.log(user[mostrar])

console.log(user.email)
console.log(user.endereco.rua) */

function addCard() {
    const listaCards = document.querySelector('body > main')
    listaCards.innerHTML = listaCards.innerHTML + `
        <div class="card-ticker">
            <header>
                <h2><span>NASDAQ:</span> APPL</h2>
                <h1>Apple</h1>
            </header>
            <main>
                <p>R$ 250,80</p>
                <span>▲ 0,35%</span><span>R$ 0,60</span>
            </main>
            <footer>
                <div>
                    <p>40</p>
                    <span>Ações</span>
                </div>
                <div>
                    <p>R$ 34853,45</p>
                    <span>Posição</span>
                </div>
            </footer>
        </div>`
}
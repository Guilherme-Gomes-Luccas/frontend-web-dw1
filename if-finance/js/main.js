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

const allStock = [
    {
        bolsa: "NASDAQ", 
        codigo: "AAPL", 
        empresa: "Apple Inc", 
        setor: "Technology Service",
        site: "apple.com",
        valor: 25080,
        variacao: 0.35,
        nAcoes: 40
    },
    {
        bolsa: "NASDAQ", 
        codigo: "MSFT", 
        empresa: "Microsoft Corp", 
        setor: "Technology Service",
        site: "microsoft.com",
        valor: 50234,
        variacao: -1.5,
        nAcoes: 20
    },
    {
        bolsa: "NASDAQ", 
        codigo: "MSFT", 
        empresa: "Meta Platforms Inc", 
        setor: "Technology Service",
        site: "meta.com",
        valor: 43262,
        variacao: 2.3,
        nAcoes: 5
    },
    {
        bolsa: "NASDAQ", 
        codigo: "GOOGL", 
        empresa: "Alphabet Inc Class A",
        setor: "Technology Service", 
        site: "google.com",
        valor: 16615,
        variacao: -0.78,
        nAcoes: 8
    },
    {
        bolsa: "NASDAQ", 
        codigo: "NVDA", 
        empresa: "NVIDIA Copr", 
        setor: "Technology Service",
        site: "nvidia.com",
        valor: 87757,
        variacao: 0.02,
        nAcoes: 13
    }
]

function addCard({bolsa, codigo, empresa, valor, variacao, nAcoes}) {
    const listaCards = document.querySelector('body > main')
    listaCards.innerHTML = listaCards.innerHTML + `
        <div class="card-ticker">
            <header>
                <h2><span>${bolsa}:</span> ${codigo}</h2>
                <h1>${empresa}</h1>
            </header>
            <main>
                <p>R$ ${realFormat(+valor/100)}</p>
                <span ${variacao < 0 ? 'style="background: #FF0000;"' : ''}> ${variacao < 0 ? '▼' : '▲'} ${variacao}%</span>
                <span>R$ ${realFormat((valor/100) * (variacao/100))}</span>
            </main>
            <footer>
                <div>
                    <p>${nAcoes}</p>
                    <span>Ações</span>
                </div>
                <div>
                    <p>R$ ${realFormat(nAcoes * (valor/100))}</p>
                    <span>Posição</span>
                </div>
            </footer>
        </div>`
}

function addTable({bolsa, codigo, empresa, setor, site, valor, variacao, nAcoes}){
    const inserirLinhasDestaque = document.querySelector('#destaqueTable')
    inserirLinhasDestaque.innerHTML = inserirLinhasDestaque.innerHTML +  `
        <tr>
            <td>${bolsa}</td>
            <td>${codigo}</td>
            <td>${empresa}</td>
            <td>${setor}</td>
            <td>${site}</td>
        </tr>
    `
    const inserirLinhasAcoes = document.querySelector('#acoesTable')
    inserirLinhasAcoes.innerHTML = inserirLinhasAcoes.innerHTML +  `
        <tr>
            <td>${bolsa}</td>
            <td>${codigo}</td>
            <td>${empresa}</td>
            <td>${valor}</td>
            <td>${variacao}</td>
            <td>${nAcoes}</td>
        </tr>
    `
}

function realFormat(valor){
    return valor.toFixed(2).toString().replace('.',',')
}

function loadCards() {
    //for(let i = 0; i < allStock.length; i++){
    //    addCard(allStock[i])
    //}

    //allStock.map((stock) => {
    //    addCard(stock)
    //})

    allStock.map(addCard)
}

function loadTables() {
    allStock.map(addTable)
}

const openModal = () => {
    const modal = document.getElementById('addCardModal')
    modal.style.display = 'flex';
}

const closeModal = (event, id) => {
    const modal = document.getElementById('addCardModal')

    if (event?.target?.id === 'addCardModal' || id === 'addCardModal') {
        modal.style.display = 'none';
    }
    
}

const createCard = (event) => {
    event.preventDefault();

    const {bolsa, codigo, empresa, valor, variacao, nAcoes} = event.target.elements

    addCard({
        bolsa: bolsa.value,
        codigo: codigo.value,
        empresa: empresa.value,
        valor: valor.value,
        variacao: variacao.value,
        nAcoes: nAcoes.value
    })

    bolsa.value = ''

    closeModal(null, 'addCardModal')
}
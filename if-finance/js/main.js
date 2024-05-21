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

const token = "cp1berhr01qu1k1i3hkgcp1berhr01qu1k1i3hl0" //adicione seu token

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
        <div class="card-ticker" id=${codigo} onmouseenter="cardEnter(event)" onmouseleave="cardLeave(event)">,
            <header>
                <h2><span>${bolsa}:</span> ${codigo}</h2>
                <h1>${empresa}</h1>
            </header>
            <main>
                <p data-valor="${valor}">R$ ${realFormat(+valor/100)}</p>
                <span data-variacao="${variacao}" ${variacao < 0 ? 'style="background: #FF0000;"' : ''}> ${variacao < 0 ? '▼' : '▲'} ${variacao}%</span>
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
            <div class="card-menu">
                <span>Editar</span>
                <span onclick="removeCard(event)">Excluir</span>
            </div>
        </div>`

        const allEdit = listaCards.querySelectorAll('.card-ticker .card-menu span:first-child')

        allEdit.forEach(edit => {
            edit.addEventListener('click', openEditModal)
        })
}

function updateCard({bolsa, codigo, empresa, valor, variacao, nAcoes}) {
    const card = document.querySelector('#'+codigo)
    
    card.innerHTML = `
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
    <div class="card-menu">
        <span>Editar</span>
        <span onclick="removeCard(event)">Excluir</span>
    </div>`

    const edit = listaCards.querySelectorAll('.card-ticker .card-menu span:first-child')
    edit.addEventListener('click', openEditModal)
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

const openModal = (idModal) => {
    const modal = document.getElementById(idModal)
    modal.style.display = 'flex';
}

const closeModal = (event, id) => {
    const modal = document.getElementById(id)

    if (id) {
        const modal = document.getElementById(id)
        modal.style.display = 'none'
        return
    }

    if (event?.target?.className === "modal") {
        const modal = document.getElementById(event.target.id)
        modal.style.display = 'none';
        return
    }
    
}

const createCard = (event) => {
    event.preventDefault();

    //const {bolsa, codigo, empresa, valor, variacao, nAcoes} = event.target.elements
    //addCard({
    //    bolsa: bolsa.value,
    //    codigo: codigo.value,
    //    empresa: empresa.value,
    //    valor: valor.value,
    //    variacao: variacao.value,
    //    nAcoes: nAcoes.value
    //})

    const formData = new FormData(event.target)
    const stock = Object.fromEntries(formData)

    addCard(stock)

    event.target.reset()

    closeModal(null, 'addCardModal')
}

const createApiCard = async (event) => {
    event.preventDefault();

    const {codigo, nAcoes} = event.target.elements

    try{
        const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${codigo.value}&token=${token}`)
        const result = await response.json()

        const response2 = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${codigo.value}&token=${token}`)
        const profile = await response2.json()

        if (!response.ok || !response2.ok) {
            alert('Erro ao consultar ação!')
        }

        if (profile?.exchange === undefined || result?.d === null) {
            alert('Ação não encontrada!')
            return
        }
        
        const stock = {
            bolsa: profile.exchange.split(' ')[0],
            codigo: codigo.value,
            empresa: profile?.name || '',
            valor: result.c * 100,
            variacao: result.d,
            nAcoes: nAcoes.value
        }

        const card = document.getElementById(codigo.value)

        if (card) {
            updateCard(stock)
        } else{
            addCard(stock)
        }
    } catch(error){
        alert('Erro ao consultar ação')
        console.log('ERROR', error)
    }

    event.target.reset()
    closeModal(null, 'addApiModal')
}

const cardEnter = (event) => {
    const cardMenu = event.target.querySelector('.card-menu')
    console.log(event.target)
    cardMenu.style.display = 'flex'
    console.log('cardEnter')
}

const cardLeave = (event) => {
    const cardMenu = event.target.querySelector('.card-menu')
    console.log(event.target)
    cardMenu.style.display = 'none'
    console.log('cardLeave')
}

const removeCard = (event) => {
    event.target.closest('.card-ticker').remove()
}

const openEditModal = (event) => {
    const card = event.target.closest('.card-ticker')

    const inputBolsa = document.getElementById('e-bolsa')
    inputBolsa.value = card.querySelector('header h2 span').innerText.replace(': ')

    const inputCodigo = document.getElementById('e-codigo')
    inputCodigo.value = card.querySelector('header h2').innerText.split(': ')[1]

    const inputEmpresa = document.getElementById('e-empresa')
    inputEmpresa.value = card.querySelector('header h1').innerText

    const inputValor = document.getElementById('e-valor')
    inputValor.value = card.querySelector('main p ').dataset.valor

    const inputVariacao = document.getElementById('e-variacao')
    inputVariacao.value = card.querySelector('main > span').dataset.variacao

    const inputAcoes = document.getElementById('e-nAcoes')
    inputAcoes.value = card.querySelector('footer div p').innerText

    openModal('editFormModal')
}
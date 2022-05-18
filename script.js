
var list = [] //lista back para o javascript ler
var ul = document.querySelector('ul') //lista front pra gente ver
var emojiList = ['fa-face-party']

//Esse cara serve para pegar da list e jogar na ul
function attList() {

    ul.innerHTML = ""

    //vasculhando a list para add na ul
    list.map((item) => {        
        let li = document.createElement('li') //esse cara é o filho novo

        li.innerHTML = `${item}` //leitura: o filho.vai se chamar = o valor do newItem
        ul.appendChild(li) //add o li na ul
    })
}

//esse cara serve para add o item na list
function add() {
        let newItem = document.querySelector('#newItem')

        list.push(newItem.value) //adiciona o item na lita
        attList()
}
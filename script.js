
var list = [] //cria lista vazia
var ul = document.querySelector('ul') //chama a lista do html

//pega a array e add na ul
function attList() {
    let count = 0
    ul.innerHTML = ""

    //vasculhando a list para add na ul
    list.map((item) => {
        let li = document.createElement('li') //li criada
        li.id = count

        li.innerHTML = `<input type="checkbox" class="checkmark" onchange="riscar(${count},this)">
                        <span id="span${count}"> ${item}</span>` //leitura: o filho.vai se chamar = item
        ul.appendChild(li) //add o li na ul
        count++
    })
}

//add o item na list
function add() {
    let newItem = document.querySelector('#newItem')
    let msg = document.querySelector('#msg')

    if (newItem.value != "") {
        list.push(newItem.value) //adiciona o item na lita
        attList()
    } else {
        msg.innerHTML = `Please, write your task!`
        setTimeout(() => {
            msg.innerHTML = ""
        }, 3000)
    }
    newItem.value = ""
    newItem.focus()
}

//riscar o item
function riscar(count, checkbox) {
    let span = document.querySelector('#span' + count)

    if (checkbox.checked) {
        span.innerHTML = `<del>${span.innerHTML}</del>`
    } else { //aqui está procurando a tag del
        let removeDel = span.innerHTML.replace('<del>', '')  //está removendo do início
        removeDel = removeDel.replace('</del>', '') //está removendo do final
        span.innerHTML = removeDel
    }
}

//modo dark e light
function mode() {
    let iconMode = document.querySelector('#iconMode')
    let body = document.querySelector('body')
    let container = document.querySelector('#container')

    if (iconMode.classList.contains('fa-sun')) {

        iconMode.classList.remove('fa-sun', 'sun-dark')
        iconMode.classList.add('fa-moon', 'sun-light')

        body.classList.remove('bg-dark')
        body.classList.add('bg-light')

        container.classList.remove('c-dark')
        container.classList.add('c-light')
    } else {
        iconMode.classList.remove('fa-moon', 'sun-light')
        iconMode.classList.add('fa-sun', 'sun-dark')

        body.classList.remove('bg-light')
        body.classList.add('bg-dark')

        container.classList.remove('c-light')
        container.classList.add('c-dark')
    }
}

function limpar(){
    list = []
    attList()
    newItem.focus()
}

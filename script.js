
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

        li.innerHTML = `<input type="checkbox" onchange="riscar(${count},this)">
                        <span id="span${count}">${item}</span>` //leitura: o filho.vai se chamar = item
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
        msg.innerHTML = `Por favor insira uma tarefa!`
        setTimeout(() => {
            msg.innerHTML = ""
        }, 2000)
    }
    newItem.value = ""
}

// vai riscar o item
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

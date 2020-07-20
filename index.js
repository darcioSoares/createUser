
let form = document.querySelectorAll(".form [js]");
let user = {}
let tbody = document.querySelector("tbody")

function addLine(dataUser){

    let tr = document.createElement('tr')

    tr.innerHTML = `<tr>
    <td>${dataUser.nome}</td>
    <td>${dataUser.genero}</td>
    <td>${dataUser.email}</td>
    <td>${dataUser.setor}</td>
    <td>${1}</td>
    </tr>
    `
    tbody.appendChild(tr)

    console.log(dataUser)
}     

    // esse form esta completo
    let formSubmit = document.querySelector(".form")

    formSubmit.addEventListener("submit", function(e){
        event.preventDefault()

        form.forEach(function(field){

            if(field.name == "genero"){
                if(field.checked){
                    user[field.name] = field.value
                }
            }else{
                user[field.name] = field.value
            }
        })
        // função nativa que limpa input dos formularios
        formSubmit.reset()
        addLine(user)

    })


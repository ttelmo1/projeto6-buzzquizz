const urlAPI = "https://mock-api.driven.com.br/api/v4/buzzquizz/"

let container = document.getElementsByClassName("main-content")
let myQuizzes = document.getElementsByClassName("myQuizzes")
let allQuizzes = document.getElementsByClassName("allQuizzes")

let myQuizzesSaved = localStorage.getItem("myQuizId")

function renderMyQuizzes() {

    container.innerHTML = '';

    axios.get(`${urlAPI}quizzes`).then(response => {
        if (!myQuizzesSaved) {
            myQuizzes[0].innerHTML += `
                <div class="create-quizz">
                    <h1>Você não criou nenhum quizz ainda :(</h1>
                    <div onclick="createQuizz()" class="create-button">
                        <span>Criar Quizz</span>
                    </div>
                </div>`;
            console.log(container)
        }
        else{
            // usuario com quiz cadastrado
        }
        console.log(response)
    })
}

function renderAllQuizzes(){

    container.innerHTML = '';

    allQuizzes[0].innerHTML += `
        <div class="api-quizes">
            <div class="h1-all-quizes">
             <h1>Todos os Quizzes</h1>
        </div>
        <div class="list-quizes">
          <div class="quiz">
            Acerto todos os personagens!
          </div>
        </div>
      </div>`
    // axios.get(`${urlAPI}quizzes`).then(response =>{
    //     for(let i = 0; )
    //     container[0].innerHTML += `
    //         Alice está planejando`;
    // })
}

function createQuizz(){

    container[0].innerHTML = "";

    container[0].innerHTML += `
    <section class="infoQuizz"> 
        <h3> Comece pelo começo </h3>
            <li class="infoAnswers">
                <div>
                    <input placeholder="   Título do seu quizz  " type="text">
                    <input placeholder="   URL da imagem do seu quizz  " type="url">
                    <input placeholder="   Quantidade de perguntas do quizz   " type="numeric">
                    <input placeholder="   Quantidade de níveis do quiz  " type="numeric">
                </div>
            </li>
        <button> Prosseguir pra criar perguntas </button>
    </section>`

}


window.onload = function(){
    renderMyQuizzes()
    renderAllQuizzes()
}
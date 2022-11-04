//Salvando API em uma constante
const urlAPI = "https://mock-api.driven.com.br/api/v4/buzzquizz/"


//Variaveis globais
let container = document.getElementsByClassName("main-content")
let myQuizzes = document.getElementsByClassName("myQuizzes")
let allQuizzes = document.getElementsByClassName("allQuizzes")


//Quizzes salvos no PC do usuário
let myQuizzesSaved = localStorage.getItem("myQuizId")

//Renderizar quizzes do usuário
function renderMyQuizzes() {

    container.innerHTML = '';

    axios.get(`${urlAPI}quizzes`).then(response => {
        if (!myQuizzesSaved) {
            myQuizzes[0].innerHTML += `
                <div class="create-quizz">
                    <h1>Você não criou nenhum quizz ainda :(</h1>
                    <div onclick="createQuizz1()" class="create-button">
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

function createQuizz1(){

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
        <button onclick="createQuizz2()"> Prosseguir pra criar perguntas </button>
    </section>`

}

function createQuizz2(){
    container[0].innerHTML = "";

    container[0].innerHTML += `
    <section class="infoQuizz">
        <h3>Crie suas perguntas</h3>
        <li class="infoAnswers">
          <div>
            <h3 class="aside-text">Pergunta 1</h3>
            <input placeholder="   Texto da pergunta  " type="text" />
            <input placeholder="   Cor de fundo da pergunta  " type="url" />
          </div>
          <div>
            <h3 class="aside-text">Resposta Correta</h3>
            <input placeholder="   Resposta Correta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
          <div>
            <h3 class="aside-text">Resposta Incorreta</h3>
            <input placeholder="   Resposta Incorreta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
          <div class="spacing1"></div>
          <div>
            <input placeholder="   Resposta Incorreta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
          <div class="spacing1"></div>
          <div>
            <input placeholder="   Resposta Incorreta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
        </li>

        <li class="infoAnswers">
          <div>
            <h3 class="aside-text">Pergunta 2</h3>
            <input placeholder="   Texto da pergunta  " type="text" />
            <input placeholder="   Cor de fundo da pergunta  " type="url" />
          </div>
          <div>
            <h3 class="aside-text">Resposta Correta</h3>
            <input placeholder="   Resposta Correta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
          <div>
            <h3 class="aside-text">Resposta Incorreta</h3>
            <input placeholder="   Resposta Incorreta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
          <div class="spacing1"></div>
          <div>
            <input placeholder="   Resposta Incorreta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
          <div class="spacing1"></div>
          <div>
            <input placeholder="   Resposta Incorreta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
        </li>
        <li class="infoAnswers">
          <div>
            <h3 class="aside-text">Pergunta 3</h3>
            <input placeholder="   Texto da pergunta  " type="text" />
            <input placeholder="   Cor de fundo da pergunta  " type="url" />
          </div>
          <div>
            <h3 class="aside-text">Resposta Correta</h3>
            <input placeholder="   Resposta Correta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
          <div>
            <h3 class="aside-text">Resposta Incorreta</h3>
            <input placeholder="   Resposta Incorreta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
          <div class="spacing1"></div>
          <div>
            <input placeholder="   Resposta Incorreta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
          <div class="spacing1"></div>
          <div>
            <input placeholder="   Resposta Incorreta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
        </li>
        <button onclick="createQuizz3()">Prosseguir pra criar perguntas</button>
      </section>`
}

function createQuizz3(){
    container[0].innerHTML = "";

    container[0].innerHTML += `
    <section class="infoQuizz">
        <h3>Agora decida o nível</h3>
        <li class="infoAnswers">
          <div>
            <h3 class="aside-text">Nível 1</h3>
            <input placeholder="   Título do nível  " type="text" />
            <input placeholder="   % de acerto mínima  " type="url" />
            <input placeholder="   URL da imagem nível  " type="url" />
            <input placeholder="   Descrição do nível  " type="url" />
          </div>
          <div>
            <h3 class="aside-text">Nível 2</h3>
            <input placeholder="   Título do nível  " type="text" />
            <input placeholder="   % de acerto mínima  " type="url" />
            <input placeholder="   URL da imagem nível  " type="url" />
            <input placeholder="   Descrição do nível  " type="url" />
          </div>
          <div>
            <h3 class="aside-text">Nível 3</h3>
            <input placeholder="   Título do nível  " type="text" />
            <input placeholder="   % de acerto mínima  " type="url" />
            <input placeholder="   URL da imagem nível  " type="url" />
            <input placeholder="   Descrição do nível  " type="url" />
          </div>
          
        </li>
      </section>`
}



window.onload = function(){
    renderMyQuizzes()
    renderAllQuizzes()
}
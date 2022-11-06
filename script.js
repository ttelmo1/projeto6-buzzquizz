//Salvando API em uma constante
const urlAPI = "https://mock-api.driven.com.br/api/v4/buzzquizz/"


//Variaveis globais
let container = document.getElementsByClassName("main-content")
let myQuizzes = document.getElementsByClassName("myQuizzes")
let allQuizzes = document.getElementsByClassName("quizzes")
let insideQuizz = document.getElementsByClassName("insideQuizz")
let globalResponse;


//Quizzes salvos no PC do usuário
let myQuizzesSaved = localStorage.getItem("myQuizId")

//Renderizar quizzes do usuário
function renderMyQuizzes() {

    container.innerHTML = '';

    axios.get(`${urlAPI}quizzes`).then(response => {
        if (!myQuizzesSaved) {
            myQuizzes[0].innerHTML += `
      <div class="empty-user-quizzes cursor">
            <span>Você não criou nenhum<br />quizz ainda :(</span>
          <button onclick="createQuizz1()">
              Criar Quizz
          </button>
      </div>
      <div class="filled-user-quizzes hidden">
          <div class="title-user-quizzes">
              <h3>Seus Quizzes</h3>
              <ion-icon name="add-circle"></ion-icon>
          </div>
          <div class="quizzes"></div>
      </div>`;
        }
        else {
            // usuario com quiz cadastrado
        }
    })
}

//Renderizar Quizzes da API
function renderAllQuizzes() {

    container.innerHTML = '';

    axios.get(`${urlAPI}quizzes`).then(response => {
        for (let i = 0; i < response.data.length; i++) {
            allQuizzes[1].innerHTML += `
        <div onclick="initiateQuizz(${response.data[i].id})" class="quizz cursor" style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.62%, rgba(0, 0, 0, 0.8) 100%), url(${response.data[i].image});">
          <div class="texto-imagem">
                <h1>${response.data[i].title}</h1>
          </div>
        </div>`
        }
    })
}

//Página de criação de quizz 1
function createQuizz1() {

    container[0].innerHTML = "";

    container[0].innerHTML += `
    <section class="infoQuizz"> 
        <h3 class="cursor"> Comece pelo começo </h3>
            <li class="infoAnswers">
                <div>
                    <input placeholder="   Título do seu quizz  " type="text">
                    <input placeholder="   URL da imagem do seu quizz  " type="url">
                    <input placeholder="   Quantidade de perguntas do quizz   " type="numeric">
                    <input placeholder="   Quantidade de níveis do quiz  " type="numeric">
                </div>
            </li>
        <button class="cursor" onclick="createQuizz2()"> Prosseguir pra criar perguntas </button>
    </section>`

}

//Página de criação de quizz 2
function createQuizz2() {
    container[0].innerHTML = "";

    container[0].innerHTML += `
    <section class="infoQuizz">
        <h3 class="cursor">Crie suas perguntas</h3>
        <li class="infoAnswers">
          <div>
            <h3 class="aside-text cursor">Pergunta 1</h3>
            <input placeholder="   Texto da pergunta  " type="text" />
            <input placeholder="   Cor de fundo da pergunta  " type="url" />
          </div>
          <div>
            <h3 class="aside-text cursor">Resposta Correta</h3>
            <input placeholder="   Resposta Correta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
          <div>
            <h3 class="aside-text cursor">Resposta Incorreta</h3>
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

        <li class="infoAnswers" onclick="closePergunta()">
          <div>
            <h3 class="aside-text cursor">Pergunta 2</h3>
            <input placeholder="   Texto da pergunta  " type="text" />
            <input placeholder="   Cor de fundo da pergunta  " type="url" />
          </div>
          <div>
            <h3 class="aside-text cursor">Resposta Correta</h3>
            <input placeholder="   Resposta Correta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
          <div>
            <h3 class="aside-text cursor">Resposta Incorreta</h3>
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
            <h3 class="aside-text cursor">Pergunta 3</h3>
            <input placeholder="   Texto da pergunta  " type="text" />
            <input placeholder="   Cor de fundo da pergunta  " type="url" />
          </div>
          <div>
            <h3 class="aside-text cursor">Resposta Correta</h3>
            <input placeholder="   Resposta Correta  " type="text" />
            <input placeholder="   URL da imagem  " type="url" />
          </div>
          <div>
            <h3 class="aside-text cursor">Resposta Incorreta</h3>
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
        <button class="cursor" onclick="createQuizz3()">Prosseguir pra criar níveis</button>
      </section>`
}

//Página de criação de quizz 3
function createQuizz3() {
    container[0].innerHTML = "";

    container[0].innerHTML += `
    <section class="infoQuizz">
        <h3 class="cursor">Agora decida o nível</h3>
        <li class="infoAnswers">
          <div>
            <h3 class="aside-text cursor">Nível 1</h3>
            <input placeholder="   Título do nível  " type="text" />
            <input placeholder="   % de acerto mínima  " type="url" />
            <input placeholder="   URL da imagem nível  " type="url" />
            <input placeholder="   Descrição do nível  " type="url" />
          </div>
        </li>
        <li class="infoAnswers">
          <div>
            <h3 class="aside-text cursor">Nível 2</h3>
            <input placeholder="   Título do nível  " type="text" />
            <input placeholder="   % de acerto mínima  " type="url" />
            <input placeholder="   URL da imagem nível  " type="url" />
            <input placeholder="   Descrição do nível  " type="url" />
          </div>
        </li>
        <li class="infoAnswers">
          <div>
            <h3 class="aside-text cursor">Nível 3</h3>
            <input placeholder="   Título do nível  " type="text" />
            <input placeholder="   % de acerto mínima  " type="url" />
            <input placeholder="   URL da imagem nível  " type="url" />
            <input placeholder="   Descrição do nível  " type="url" />
          </div>
        </li>
        <button class="cursor" onclick="createQuizz4()">Finalizar Quizz</button>
      </section>`
}

//Página de criação de quizz 4
function createQuizz4() {
    container[0].innerHTML = "";
    container[0].style.paddingTop = "0px";

    container[0].innerHTML += `
  <section class="infoQuizz"> 
    <h3 class="quizzReady cursor"> Seu Quizz está pronto! </h3>
        <div class ="quizzReadyImg cursor">
          <img src="img/Rectangle.png" alt="">
          <h1 class="quizzReadyTitle">Titulo</h1>
        </div>
          <button class="cursor"> Acessar o Quizz </button>
          <div class="spacing1"></div> 
          <div class="voltar-home" onclick="reload()">
            <h1 class="backHome cursor">
              Voltar pra home
            </h1>
          </div>
    </section>`
}

//Função que inicia o quizz
function initiateQuizz(id) {
    container[0].innerHTML = "";




    let insidePerguntas = document.getElementsByClassName("perguntas")
    let insideOpcoes = document.getElementsByClassName("opcoes")

    axios.get(`${urlAPI}quizzes/${id}`).then(response => {
        globalResponse = response
        console.log(globalResponse)
        insideQuizz[0].innerHTML = `
          <div class="foto-titulo cursor">
                <img src="${response.data.image}"/>
                <h1 class="titulo-tela">${response.data.title}</h1>
          </div>`

        for (let i = 0; i < response.data.questions.length; i++) {
            insideQuizz[0].innerHTML += `
            <div class="perguntas cursor" id="pergunta${i}">
              <div class="titulo-pergunta id${i}">
                  <p>${response.data.questions[i].title}</p>
              </div>
              <div class="opcoes"></div>
            </div>`

            //Chamando a função aleatoriedade das alternativas
            let aleatorio = sortArray(response.data.questions[i].answers);


            for (let j = 0; j < response.data.questions[i].answers.length; j++) {
                insideOpcoes[i].innerHTML += `
                  <div onclick="selectOption(this)" class="opcao${j} cursor" data-answers="${aleatorio[j].isCorrectAnswer}">
                      <img src="${aleatorio[j].image}"/>
                      <p class="opcao-respostas cursor">${aleatorio[j].text}</p>
                  </div>`
            }
        }


    })
}

//Função que faz a aleatoriedade
function sortArray(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(!newArray.includes(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray.sort(() => Math.random()- 0.5);
}


//Função que trata as alternativas
//Tornar invisível as perguntas ainda não alcançadas
let optionVisible = 1;

//Contabilizar os acertos
let respostaCorreta = 0;

function selectOption(option) {
  //Armazena todas as opções disponíveis em uma pergunta
    let armazenarOpcoes = document.getElementById(`pergunta${optionVisible - 1}`).querySelectorAll("[data-answers]")

    

    for (let k = 0; k < armazenarOpcoes.length; k++) {
      //Torna branco tudo que é diferente do que foi clicado
        if (armazenarOpcoes[k].classList[0] != option.classList[0]) {
            armazenarOpcoes[k].classList.toggle("backgroundWhite")

        }
        //Se ao clicar em uma opção acertar 
        if (armazenarOpcoes[k].getAttribute("data-answers") == "true") {
            armazenarOpcoes[k].getElementsByTagName("p")[0].classList.toggle("text-acertou")
        }
        // Se ao clicar em uma opção errar
        else {
            armazenarOpcoes[k].getElementsByTagName("p")[0].classList.toggle("text-errou")
        }
    }

    let optionType = option.getAttribute("data-answers")
    if (optionType == "true") {
        respostaCorreta++
    }

    //Tornando visível as próximas perguntas
    let optionQtd = globalResponse.data.questions.length;
    if (optionVisible < optionQtd) {
        document.getElementById(`pergunta${optionVisible}`).style.display = "block";
        let proximaPergunta = document.getElementById(`pergunta${optionVisible-1}`).nextElementSibling;
        
        proximaPergunta.scrollIntoView();
        optionVisible++
    }

      //Contabilizando acertos
    else if (optionVisible == optionQtd) {
        let porcentagemAcertos = (respostaCorreta / globalResponse.data.questions.length) * 100;
        let maior = 0;
        for (let p = 0; p < globalResponse.data.levels.length; p++) {
            if (porcentagemAcertos >= globalResponse.data.levels[p].minValue) {
                maior = p
            }


        }

        //Tela de finalização do quizz
        insideQuizz[0].innerHTML += `
        <div class="resultado-perguntas">
        <div class="titulo-resposta cursor">
            <p>${porcentagemAcertos.toFixed(0)}% de acerto: ${globalResponse.data.levels[maior].title}</p>
        </div>
        <div class="resposta-final cursor">
            <img src="${globalResponse.data.levels[maior].image}"/>
            <p>${globalResponse.data.levels[maior].text}</p>
        </div>
    </div>

    <button onclick="reiniciarQuizz(${globalResponse.data.id})"class="reiniciar-quizz cursor">Reiniciar Quizz</button>
    <p class="voltar-home cursor" onclick="reload()">Voltar pra home</p>`
        optionVisible = 1
    }


}



function closePergunta() {
    let hideQuestion = document.querySelector(".infoAnswers")
    hideQuestion.classList.toggle("escondido")
}

//Função para retornar para a homepage
function reload() {
    window.location.reload();
}

//Executar funções básicas ao abrir a página
window.onload = function () {
    renderMyQuizzes()
    renderAllQuizzes()
}

function reiniciarQuizz(id) {
  initiateQuizz(id)
}


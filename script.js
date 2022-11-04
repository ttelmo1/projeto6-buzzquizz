//Salvando API em uma constante
const urlAPI = "https://mock-api.driven.com.br/api/v4/buzzquizz/"


//Variaveis globais
let container = document.getElementsByClassName("main-content")
let myQuizzes = document.getElementsByClassName("myQuizzes")
let allQuizzes = document.getElementsByClassName("quizzes")
let insideQuizz = document.getElementsByClassName("insideQuizz")


//Quizzes salvos no PC do usuário
let myQuizzesSaved = localStorage.getItem("myQuizId")

//Renderizar quizzes do usuário
function renderMyQuizzes() {

  container.innerHTML = '';

  axios.get(`${urlAPI}quizzes`).then(response => {
    if (!myQuizzesSaved) {
      myQuizzes[0].innerHTML += `
      <div class="empty-user-quizzes">
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
        <div onclick="initiateQuizz(${response.data[i].id})" class="quizz">
          <img src="${response.data[i].image}"  class="screen1Img" alt="imagem-quizz">
          <div class="texto-imagem">
                ${response.data[i].title}
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

//Página de criação de quizz 2
function createQuizz2() {
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
        <button onclick="createQuizz3()">Prosseguir pra criar níveis</button>
      </section>`
}

//Página de criação de quizz 3
function createQuizz3() {
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
        <button onclick="createQuizz4()">Finalizar Quizz</button>
      </section>`
}

//Página de criação de quizz 4
function createQuizz4() {
  container[0].innerHTML = "";

  container[0].innerHTML += `
  <section class="infoQuizz"> 
    <h3> Seu Quizz está pronto!!! </h3>
      <li class="infoAnswers">
        <div>
          <img src="img/Rectangle.png" alt="">
        </div>
      </li>
          <button> Acessar o Quizz </button>
          <div class="spacing1"></div> 
          <button onclick="reload()"> Voltar para o home </button>
    </section>`
}

function initiateQuizz(id){
  container[0].innerHTML = "";

  
  

  axios.get(`${urlAPI}quizzes/${id}`).then(response => {
    console.log(response)
    console.log(id)
        insideQuizz[0].innerHTML = `
          <div class="foto-titulo">
                <img src="${response.data.image}"/>
                <h1 class="titulo-tela">${response.data.title}</h1>
          </div>`
          
          insideQuizz[0].innerHTML += `
            <div class="perguntas">`
          for(let i = 0; i < response.data.questions.length; i++) {
            insideQuizz[0].innerHTML += `
              <div class="titulo-pergunta id${i}">
                  <p>${response.data.questions[i].title}</p>
              </div>`

              insideQuizz[0].innerHTML +=`
              <div class="opcoes">`

          for(let j = 0; j < response.data.questions[i].answers.length; j++){
            insideQuizz[0].innerHTML +=`
                  <div class="opcao${j}">
                      <img src="${response.data.questions[i].answers[j].image}"/>
                      <p class="opcao-respostas">Gatíneo</p>
                  </div>`
          }
              
        // </div>`
          } 

            

            // <div class="perguntas">
            //     <div class="titulo-pergunta id2">
            //         <p>Em qual animal Olho-Tonto Moody transfigurou Malfoy?</p>
            //     </div>
            //     <div class="opcoes">
            //         <div class="opcao1">
            //             <img src="./imagens/image 3.png"/>
            //             <p class="opcao-respostas">Gatíneo</p>
            //         </div>
            //         <div class="opcao2">
            //             <img src="./imagens/image 3.png"/>
            //             <p class="opcao-respostas">Gatíneo</p>
            //         </div>
            //         <div class="opcao3">
            //             <img src="./imagens/image 3.png"/>
            //             <p class="opcao-respostas">Gatíneo</p>
            //         </div>
            //         <div class="opcao4">
            //             <img src="./imagens/image 3.png"/>
            //             <p class="opcao-respostas">Gatíneo</p>
            //         </div>
            //     </div>
            // </div>

            // <div class="perguntas">
            //     <div class="titulo-pergunta id1">
            //         <p>Em qual animal Olho-Tonto Moody transfigurou Malfoy?</p>
            //     </div>
            //     <div class="opcoes">
            //         <div class="opcao1">
            //             <img src="./imagens/image 3.png"/>
            //             <p class="opcao-respostas">Gatíneo</p>
            //         </div>
            //         <div class="opcao2">
            //             <img src="./imagens/image 3.png"/>
            //             <p class="opcao-respostas">Gatíneo</p>
            //         </div>
            //         <div class="opcao3">
            //             <img src="./imagens/image 3.png"/>
            //             <p class="opcao-respostas">Gatíneo</p>
            //         </div>
            //         <div class="opcao4">
            //             <img src="./imagens/image 3.png"/>
            //             <p class="opcao-respostas">Gatíneo</p>
            //         </div>
            //     </div>
            // </div>

            // <div class="perguntas">
            //     <div class="titulo-pergunta id2">
            //         <p>Em qual animal Olho-Tonto Moody transfigurou Malfoy?</p>
            //     </div>
            //     <div class="opcoes">
            //         <div class="opcao1">
            //             <img src="./imagens/image 3.png"/>
            //             <p class="opcao-respostas">Gatíneo</p>
            //         </div>
            //         <div class="opcao2">
            //             <img src="./imagens/image 3.png"/>
            //             <p class="opcao-respostas">Gatíneo</p>
            //         </div>
            //         <div class="opcao3">
            //             <img src="./imagens/image 3.png"/>
            //             <p class="opcao-respostas">Gatíneo</p>
            //         </div>
            //         <div class="opcao4">
            //             <img src="./imagens/image 3.png"/>
            //             <p class="opcao-respostas">Gatíneo</p>
            //         </div>
            //     </div>
            // </div>

            // <div class="resultado-perguntas">
            //     <div class="titulo-resposta">
            //         <p>88% de acerto: Você é praticamente um aluno de Hogwarts!</p>
            //     </div>
            //     <div class="resposta-final">
            //         <img src="./imagens/image 10.png"/>
            //         <p>Parabéns Potterhead! Bem-vindx a Hogwarts, aproveite o loop infinito de comida e clique no botão abaixo para usar o vira-tempo e reiniciar este teste.</p>
            //     </div>
            // </div>

            // <button class="reiniciar-quizz">Reiniciar Quizz</button>
            // <p class="voltar-home">Voltar pra home</p>`
    
  })
}

//Função para retornar para a homepage
function reload(){
  window.location.reload();
}

//Executar funções básicas ao abrir a página
window.onload = function () {
  renderMyQuizzes()
  renderAllQuizzes()
}
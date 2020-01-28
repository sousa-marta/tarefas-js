/* -------------------- EVENTOS ---------------------- */
//Exe2: criar botão para dar um alerta quando clicado
let btnHello = document.getElementById('btnHello')

//Inserindo evento de clique (com arrow function):
btnHello.onclick = ()=> alert('Ui, você clicou em mim!')

  /* btnHello.onclick = function(){
    alert('Ui, você clicou em mim!')
  } */

//Exe3: inserir botão que quando clique mude cor de fundo do body para verde
let btnBckg = document.getElementById('btnBckg')
// let body = document.getElementsByTagName('body')

btnBckg.onclick = ()=>{
  document.body.style.backgroundColor = 'rgb(22, 117, 30)'
}

//4. Adicionar à página uma imagem que, ao passar do mouse em cima ela,imprima na linha de comando (“estou vendo a imagem”):
let dogImage = document.querySelector('#dogImage')
dogImage.onmouseover = ()=>console.log('Estou passando o mouse no cachorro')
   
//5. Adicionar outra imagem à página que, quando clicada, utilizando addEventListener, imprima na linha de comando (“estou clicando na imagem”).
let catImage = document.getElementById('catImage')
catImage.addEventListener('click',(event)=>{
  console.log('Estou clicando na imagem do gato')
  console.log('x:' + event.clientX + ' ' + 'y:' + event.clientY)
})

//6. Definir um ​ addEventListener ​ de forma que, quando o usuário clicar em qualquer parte do body da página, a cor de fundo do body todo mude para vermelho. Para isso, usar o ​ this ​ da função do evento.
let pageBody = document.querySelector('body')

function changeBckg(){
  this.style.backgroundColor = 'red'
}

pageBody.addEventListener('click',changeBckg) 
//OBS: botão de alterar cor do fundo para de funcionar, a menos que remova o listener

//7. Remover o listener
pageBody.removeEventListener('click',changeBckg)

//8. Criar um formulário básico com um action que redirecione para www.google.com.br​ . Usando JavaScript, fazer com que, quando o usuário clicar em Enviar, o formulário não seja enviado, mas sim que seja exibido um alert dizendo “Não é possível enviar”.
let btnSend = document.getElementById('btnSend')

btnSend.addEventListener('click',(event)=>{
  event.preventDefault()
  alert('Não foi possível enviar')
})

/* btnSend.onclick = (event)=>{
  event.preventDefault()
  alert('Não foi possível enviar')
} */

//9. Fazer com que o addEventListener criado na imagem imprima em linha de comando a localização do mouse em x e y.
// Resolvido no próprio exercício 5


/* -------------------- TIMERS ---------------------- */
//1. Se o usuário passar 10 segundos nessa página, seja exibido um alert que diga “tempo esgotado!
function timeUP(){
  alert('Tempo esgotado')
}

setTimeout(timeUP,30000)

//2. A cada 5 segundos que ele passe na página, fazer com que seja exibido um alert que diga “hora do intervalo”.
function breakTime(){
  alert('Hora do intervalo')
}

setInterval(breakTime, 15000)
//EVENTOS:
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
dogImage.onmouseover = ()=>console.log('Estou vendo a imagem')
   
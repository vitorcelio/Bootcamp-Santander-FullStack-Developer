document.getElementById('titulo'); //Pega o elemento cujo id é "titulo"
document.getElementsByName('li'); //Pega todas as tags "li"
document.getElementsByClassName('textos'); //Pega todos os elementos que possuem a class "textos"
document.querySelectorAll('.primeira-class .segunda-class'); //Seleciona o elemento que possue as duas class
document.createElement('div'); //Cria uma <div> (pode ser qualquer tag)
document.removeChild('div'); //Remove uma <div> (pode ser qualquer tag)
document.appendChild('div'); //Adiciona uma <div> (pode ser qaulquer tag)
document.replaceChild('section', 'div'); //Substitui uma <div> por uma <section> (pode ser qualquer tag)
document.getElementsByTagName('p').style.color = 'red'; //Muda css direto no elemento
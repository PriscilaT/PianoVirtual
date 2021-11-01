## JAVASCRIPT Cheat Sheet

Aulas do curso em vídeo 
https://youtu.be/Ptbk2af68e8?list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm

Crash Course JS
https://youtu.be/hdI2bqOjy3c 

Javascript Manipulação de DOM Rocketseat 
Projeto: piano virtual
https://youtu.be/UftSB4DaRU4 

Outra referência:
https://websitesetup.org/javascript-cheat-sheet/ 

 * Entender o conceito de cliente - servidor
 * Entender que um site precisa de html, css e js

 HTML = Conteúdo
 CSS = Estilo
 JS = Interação

 * internet surgiu em 1970 
 * html, http, www surgiu em 1993
 * navegador surgiu em 1994
 * javascript surgiu em 1995
 * padronização do js (ecma) foi em 1997
 * firefox surgiu em 2002
 * google surgiu em 2008
 * node.js surgiu em 2010, ajuda js rodar fora dos navegadores
 * Javascript é uma linguagem de programação
 
##### Você precisa: 
 *  Browser web
 *  Editor de texto

##### Para chamar um arquivo javascript no HTML

antes de fechar a tag body:

```html
    <script type="text/javascript" src="script.js"></script>
```
##### Olha que doideira:
    
    Não precisa de ponto e vírgula ;
    (Não faça como eu, se começar a colocar ; coloque em tudo, mas se não colocar, não coloque em nenhum rsrs)

##### Exemplo de primeiro comando JS

```js
    window.alert('Primeiro comando javascript!')
    var variavel = window.confirm('Confirmar essa janela ou não:')
    var variavel = window.prompt('Você está se sentindo com sorte?')
```

##### Documentação 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

###### Conhecimentos necessários para fazer projeto: word frequency counter
https://codepen.io/maxotar/pen/aLrwJM

###### Exemplos de projetos de tipos os níveis: 
https://github.com/florinpop17/app-ideas

###### Exemplos de projetos mais avançados:
https://github.com/bradtraversy/vanillawebprojects 


### Buscando e selecionando elementos

Esse comando aparece no "terminal", ao inspecionar a página
(Ajuda a encontrar erros)
```js
    console.log('olá')
```

Detalhes sobre o documento (object)
Mostra antes de renderizar 

```js
console.dir(document);
```

Para acessar (ler) os detalhes do object document (nesse exemplo, o dominio, url e tudo)
```js
console.log(document.domain);

console.log(document.URL);

console.log(document.all);

```
Para editar algo no document

```js
document.title = Teste; 

```
Pegar elemento do document pelo id (ou colocar em uma variável)

```js
console.log(document.getElementById('id')) ;

//ou

let headerTitle = document.getElementById('id');
console.log(headerTitle) ;
```

Pegar elemento do document pela classe

```js
console.log(document.getElementByClassName('class')) ;
```

Pegar elemento do document por tag

```js
console.log(document.getElementByTagName('class')) ;
```

Retorna um elemento (com formato css)

```js
document.querySelector(".classeExemplo")
```

Retorna vários elementos / NodeList
(é possível aplicar o método .forEach em NodeList, mas não em HTMLCollection)

```js
let exemplo = document.querySelectorAll("button")
exemplo.forEach( exemplo => console.log(exemplo))
```
### Manipulando conteúdo

Mudar o conteudo do titulo, por exemplo:

```js
headerTitle.textContent = 'Hello';

headerTitle.innerText = 'GoodBye';

headerTitle.innerHTML = 'See you';
```

Alterar estilos da página

```js
let app = document.querySelector("#id_exemplo")

app.style.backgroundColor = "white";

```

### Navegando pelos elementos

Parents
```js
variavel.parentNode

variavel.parentElement
```

Children (pega espaços tb)  
```js
variavel.childNodes.length

variavel.childElementCount

variavel.remove()

```
Siblings  
```js
variavel.nextSibling 

variavel.nextElementSibling

variavel.previousSibling

variavel.previousElementsSibling

```

Criando elementos 
```js
let iframe = document.createElement("iframe")

iframe.src = "um link de video"

iframe.width = "100px"

iframe.height = "100px"
```

Inserindo elementos no HTML 
```js
document.body.append(iframe) vem depois de tudo

document.body.prepend(iframe) vem antes de tudo

.insertBefore()

.insertAfter()

```

Eventos (click, keydown, load, scroll, change, submit)

```js
window.addEventListener("keydown",playNote) //evento dispara e chama a função playNote

function playNote(event){
    //aqui fica oq acontece quando o evento é disparado
}

```


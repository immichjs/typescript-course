import $ from 'jquery'
import Livro from './model/livro'

const livro = new Livro('Dom Quixote', 108.8, 0.1)
console.log(livro.precoComDesconto())

$('body').append(`<h1>${livro.nome}</h1>`)
$('body').append(`<h2>${livro.precoComDesconto()}</h2>`)
$('body').append(`<h2>Olá mundo</h2>`)
$('body').append('<p>Esse hot reload funciona com deley pra cacete.</p>')

var sum = require('./student.js')

console.log(sum(1, 2))

const express = require('express');
const app = express()
//////////////////  WEEK 2 ////////////////
app.get('/fotos', onhome)
    .listen(1900)
app.get('/pagina-2', offhome)

app.use(express.static('public'));

app.use((req, res, next) => { 
    res.status(404).send("404, error, werkt niet, loser.");
});

function onhome(req, res) {
    res.send('<h1>Lief poesje</h1> <p>Een hele leuke kat</p><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"</img>\n')
}

function offhome(req, res) {
    res.send('<h1>Dit is pagina 2!</h1><h2>Niet super belangrijk...</h2>')
}
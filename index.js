import express from 'express'
import morgan from 'morgan'
import path from 'path'
import bodyParser from 'body-parser'

const CoffeeMachine = require('./models/coffeeMachine')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))

let comments = []
app.locals.comments = comments

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
//use normal way
    CoffeeMachine.find()
        .then(documents => console.log(documents))
//use other way
//var MongoDB = require('./config/mongodb');
//MongoDB.find('coffeemachines', {}, {}, function (err, res) { console.log(res); });
    response.render('index')
})
app.get('/comments/new', (request, response) => {
    response.render('comments/new')
})

app.get('/comments', (request, response) => {
    response.render('comments/index')
})

app.post('/comments/new', (request, response) => {
    if(!request.body.comment){
        response.status(400).send('Do you want to say something?')
        return
    }
    comments.push({
        comment: request.body.comment,
        create_at: new Date()
    })
    response.redirect('/comments')
})


app.listen(4000, () => {
    console.log('Listen port: 4000')
})

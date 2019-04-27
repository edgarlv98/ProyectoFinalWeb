const express = require('express')
const engine = require('ejs-mate')
const path = require('path')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const flash = require('connect-flash')

//inicializaciones
const app = express();
require('./database')

//puerto
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs',engine)
app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}))
app.use(flash())
require('./passport/local-auth')
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    app.locals.signUpMessage = req.flash('signUpMessage')
    app.locals.signinMessage = req.flash('signinMessage')
    next()
})

//Routes
app.use('/', require('./routes/index'))

//empezar el server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})
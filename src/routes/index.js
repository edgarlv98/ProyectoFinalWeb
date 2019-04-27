const express = require('express')
const router = express.Router()
const passport = require('passport')

const fs = require('fs');
const myCss = {
    style : fs.readFileSync('./CSS/styles.css','utf8')
}

router.get('/', (req, res, next) => {
    res.render('index', {
        myCss: myCss
    })
})

router.get('/signup', (req, res, next) => {
    res.render('signup')
})

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}))

router.get('/signin', (req, res, next) => {
    res.render('signin')
})

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}))

router.get('/contacto', (req, res, next) => {
    res.render('contacto')
})

router.get('/signinAdmin', (req, res, next) => {
    res.render('signinAdmin')
})

router.post('/signinAdmin', passport.authenticate('local-signin', {
    successRedirect: '/profileAdmin',
    failureRedirect: '/signinAdmin',
    passReqToCallback: true
}))

router.get('/logout', (req, res, next) => {
    req.logOut()
    res.redirect('/')
})

router.use((req, res, next) => {
    isAuthenticated(req, res, next)
    next()
})

router.get('/profile', isAuthenticated, (req, res, next) => {
    res.render('profile')
})

router.get('/profileAdmin', isAuthenticated, (req, res, next) => {
    res.render('profileAdmin')
})

router.get('/consultar/jugadores', (req, res, next) => {
    res.render('consultarJugadores')
})

router.get('/consultar/equipos', (req, res, next) => {
    res.render('consultarEquipos')
})

router.get('/consultar/equipos/admin', (req, res, next) => {
    res.render('consultaEquiposAdmin')
})

router.get('/consultar/jugadores/admin', (req, res, next) => {
    res.render('consultaJugadoresAdmin')
})

router.get('/editar/jugadores', (req, res, next) => {
    res.render('editarJugadores')
})

router.get('/editar/equipos', (req, res, next) => {
    res.render('editarEquipos')
})

function isAuthenticated(req, res, next ) {
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/')
}

module.exports = router, myCss
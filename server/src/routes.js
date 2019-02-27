module.exports = (app) => {

//status end point
app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email} your user was registered have fun!`
    })
   })
}

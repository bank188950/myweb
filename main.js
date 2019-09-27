const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static("assets"));   // public
//app.use('/static', express.static('public')) => static/public

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', function (req, res) {
	res.render('home');
})

var product = require("./routes/product")
app.use("/product",product)

var about = require("./routes/about")
app.use("/about",about)

var contact = require("./routes/contact")
app.use("/contact",contact)


app.use(function(req,res){
	res.status(404).send("Page Not Found")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
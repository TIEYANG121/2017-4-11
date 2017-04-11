var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));
app.set('view engine','jade');

var students=[
	{name:"小明",age:2,sex:"female"},
	{name:"小红",age:3,sex:"male"},
	{name:"小蓝",age:5,sex:"female"},
	{name:"小紫",age:8,sex:"male"},
	{name:"小白",age:19,sex:"male"},
	{name:"超人",age:48,sex:"female"},
	{name:"蝙蝠侠",age:30,sex:"female"},
]
app.post("/inset",function(req,res){
	students.push(req.body);
	res.redirect("/")
})
app.post("/delete",function(req,res){})
app.get("/",function(req,res){
	res.render("/each",{students:students})
})
app.listen(8080,function(){
	console.log('server is running');
})
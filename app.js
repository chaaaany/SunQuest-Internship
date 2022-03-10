const express = require('express')
const app = express()
const port = 3000
var fs = require('fs'); 
var http = require('http');
var static = require('serve-static');
var template = require('./template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var qs = require('querystring');
var bodyParser = require('body-parser');
var ejs = require('ejs'); // html 랜더링

//app.use(static(path.join(__dirname,'../assets')));  // ejs impossible
//app.use(static(path.join(__dirname,'assets'))); // ejs possible
//app.use('/contact', static(path.join(__dirname,'assets'))); // ejs impossible
//app.use('/', express.static('assets')); // ejs possible
app.use(express.static('assets')); // ejs possible

app.set("views", __dirname); // ejs 파일 가져올 폴더 지정(프로젝트명) 및 ejs 관련 설정
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);
app.use(bodyParser.urlencoded({extend : false})); 

app.get('/', function(request, response){ // home으로 들어오면, 여기가 응답되도록 약속되어 있음. 
  // readdir은, data 디렉토리에 있는 파일들을 갖고 와서, 그것을 이용해서 파일을 구성. 
  // 현재 data 파일에 HTML이라는 파일 1개 있음. 
  // fs 모듈은 위에서 정의해야 함. 
  //fs.readdir('./html', function(error, filelist){
    //var filteredId = path.parse(request.params.pageId).base; 
    fs.readFile(`html/Main`, 'utf8', function(err, description){
      var title = "";       
      var topMenu = `<li class="nav-item">
      <a class="nav-link" href="/Womens-Scrubs">Womens</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="/Mens-Scrubs">Mens</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="/Accessories-Women">Accessories</a>
  </li>`;
      var html = template.HTML(title, topMenu, `${description}`);
      response.send(html);
    });
  //});
});



app.get('/Womens-Scrubs', function(request, response){   
  fs.readFile(`html/Womens-Scrubs`, 'utf8', function(err, description){     
    var title = " - Womens-Scrubs";
    var topMenu = `<li class="nav-item">
      <a class="nav-link" href="/Womens-Scrubs" style="color: #FD86A4">Womens</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="/Mens-Scrubs">Mens</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="/Accessories-Women">Accessories</a>
  </li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/Womens-PatientGowns', function(request, response){   
  fs.readFile(`html/Womens-PatientGowns`, 'utf8', function(err, description){     
    var title = " - Womens-PatientGowns";
    var topMenu = `<li class="nav-item">
      <a class="nav-link" href="/Womens-Scrubs" style="color: #FD86A4">Womens</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="/Mens-Scrubs">Mens</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="/Accessories-Women">Accessories</a>
  </li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/Womens-OtherApparel', function(request, response){   
  fs.readFile(`html/Womens-OtherApparel`, 'utf8', function(err, description){     
    var title = " - Womens-OtherApparel";
    var topMenu = `<li class="nav-item">
      <a class="nav-link" href="/Womens-Scrubs" style="color: #FD86A4">Womens</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="/Mens-Scrubs">Mens</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="/Accessories-Women">Accessories</a>
  </li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/Womens-LabCoats', function(request, response){   
  fs.readFile(`html/Womens-LabCoats`, 'utf8', function(err, description){     
    var title = " - Womens-LabCoats";
    var topMenu = `<li class="nav-item">
      <a class="nav-link" href="/Womens-Scrubs" style="color: #FD86A4">Womens</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="/Mens-Scrubs">Mens</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="/Accessories-Women">Accessories</a>
  </li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});


app.get('/Mens-Scrubs', function(request, response){   
  fs.readFile(`html/Mens-Scrubs`, 'utf8', function(err, description){     
    var title = " - Mens-Scrubs";
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs" style="color: #FD86A4">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/Mens-PatientGowns', function(request, response){   
  fs.readFile(`html/Mens-PatientGowns`, 'utf8', function(err, description){     
    var title = " - Mens-PatientGowns";
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs" style="color: #FD86A4">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/Mens-OtherApparel', function(request, response){   
  fs.readFile(`html/Mens-OtherApparel`, 'utf8', function(err, description){     
    var title = " - Mens-OtherApparel";
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs" style="color: #FD86A4">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/Mens-LabCoats', function(request, response){   
  fs.readFile(`html/Mens-LabCoats`, 'utf8', function(err, description){     
    var title = " - Mens-LabCoats";
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs" style="color: #FD86A4">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/Accessories-Women', function(request, response){   
  fs.readFile(`html/Accessories-Women`, 'utf8', function(err, description){     
    var title = " - Accessories-Women";
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women" style="color: #FD86A4">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/Accessories-Men', function(request, response){   
  fs.readFile(`html/Accessories-Men`, 'utf8', function(err, description){     
    var title = " - Accessories-Men";
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women" style="color: #FD86A4">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});


app.get('/GroupOrder', function(request, response){
  fs.readFile(`html/GroupOrder`, 'utf8', function(err, description){
    response.send(`${description}`);
  });
});

app.get('/shop-single', function(request, response){
  fs.readFile(`html/shop-single`, 'utf8', function(err, description){
    response.send(`${description}`);
  });
});

app.get('/shopping-cart', function(request, response){
  fs.readFile(`html/shopping-cart`, 'utf8', function(err, description){
    var title = " - Shopping-Cart";        
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/shop-single-popup', function(request, response){
  fs.readFile(`html/shop-single-popup`, 'utf8', function(err, description){
    response.send(`${description}`);
  });
});

app.get('/shipping-and-handling', function(request, response){
  fs.readFile(`html/shipping-and-handling`, 'utf8', function(err, description){
    var title = " - shipping-and-handling";       
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/login', function(request, response){
  fs.readFile(`html/login`, 'utf8', function(err, description){
    var title = " - Login";        
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/forget-your-id', function(request, response){
  fs.readFile(`html/forget-your-id`, 'utf8', function(err, description){
    var title = " - Login";        
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/forget-your-pw', function(request, response){
  fs.readFile(`html/forget-your-pw`, 'utf8', function(err, description){
    var title = " - Login";        
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/register', function(request, response){
  fs.readFile(`html/register`, 'utf8', function(err, description){
    var title = " - Register";        
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/about', function(request, response){ 
  fs.readFile(`html/about`, 'utf8', function(err, description){
    var title = " - About Us";        
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/term-and-policy', function(request, response){
  fs.readFile(`html/term-and-policy`, 'utf8', function(err, description){
    var title = " - Term & Policy";     
    var topMenu = `<li class="nav-item">
    <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Mens-Scrubs">Mens</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
    var html = template.HTML(title, topMenu, `${description}`);
    response.send(html);
  });
});

app.get('/faqs', function(request, response){ 
fs.readFile(`html/faqs`, 'utf8', function(err, description){
  var title = " - FAQs";        
  var topMenu = `<li class="nav-item">
  <a class="nav-link" href="/Womens-Scrubs">Womens</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="/Mens-Scrubs">Mens</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="/Accessories-Women">Accessories</a>
</li>`;
  var html = template.HTML(title, topMenu, `${description}`);
  response.send(html);
});
});

app.get('/sitemap.xml', function(request, response){
  fs.readFile(`sitemap.xml`, 'utf8', function(err, description){
    response.send(`${description}`);
  });
});

app.get('/robots.txt', function(request, response){
  fs.readFile(`robots.txt`, 'utf8', function(err, description){
    response.send(`${description}`);
  });
});

app.get('/google397fc672960e0b85.html', function(request, response){
  fs.readFile(`google397fc672960e0b85.html`, 'utf8', function(err, description){
    response.send(`${description}`);
  });
});

app.get('/naver843dc5059568d63fc61c4bd52c54630e.html', function(request, response){
  fs.readFile(`naver843dc5059568d63fc61c4bd52c54630e.html`, 'utf8', function(err, description){
    response.send(`${description}`);
  });
});

//-------------------------------------------------------------------------------------------------------
//JSON 추가 소스코드 입니다\

//DB connection
var mysql = require('mysql');

const { resolveSoa } = require('dns');
const { Router } = require('express');
var connection = mysql.createConnection({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b5f5777ab367c8",
  password: "c9e41b17",
  database: "heroku_42867c75216b761"
});

/*
//check connection 
connection.connect(function(err){
  if(err) { console.log('Disconnected');throw err;}
  console.log('Connected');
})

*/
function handleDisconnect() {
  clearTimeout();
  connection.connect(function(err) {            
    if(err) {                            
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 40000); 
    }                                   
  });                                 
                                         
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      return handleDisconnect();                      
    } else {                                    
      throw err;                              
    }
  });
}
handleDisconnect();


//list page base query
var listsql = 'select P_ID, LCH_DATE, P_NAME, PRICE, SORT, PATH from product where ';
var colorsql = 'select color from color where';
var sizesql = 'select size from size where';
var datesortsql = 'order by LCH_DATE desc';




//---------------------------------------------------------------------------------------------------
//Main page json
app.get('/main-json', function(req, res, next) {

  //example for~~~
  var rows = [
    {"P_ID":3,"LCH_DATE":"2021-08-04T15:00:00.000Z",
    "P_NAME":"Women's Scrubs Pants",
    "PRICE":30,
    "SORT":"BOTTOM",
    "COLOR":"Black",
    "PATH":"/img/sunqeust-product/bottom1.png"}
  ,{"P_ID":1,
  "LCH_DATE":"2021-08-03T15:00:00.000Z"
  ,"P_NAME":"Women's Scrubs Top"
  ,"PRICE":30,"SORT":"TOP"
  ,"COLOR":"Black"
  ,"PATH":"/img/sunqeust-product/top1.png"},
  {"P_ID":3,"LCH_DATE":"2021-08-04T15:00:00.000Z",
    "P_NAME":"Women's Scrubs Pants",
    "PRICE":30,
    "SORT":"BOTTOM",
    "COLOR":"Black",
    "PATH":"/img/sunqeust-product/bottom1.png"}
  ,{"P_ID":1,
  "LCH_DATE":"2021-08-03T15:00:00.000Z"
  ,"P_NAME":"Women's Scrubs Top"
  ,"PRICE":30,"SORT":"TOP"
  ,"COLOR":"Black"
  ,"PATH":"/img/sunqeust-product/top1.png"}
];

  res.send(rows);

});



//Womes-----------------------------------------------------

//Women-scrubs-json
app.get('/women-scrubs-json', function(req, res, next) {
  
  //var jsoninit;

  // query
  connection.query(listsql + 'P_CAT=\'SC\' and SEX = \'W\'' + datesortsql ,
  function (err, rows, fields) {
    if (err) console.log('DB failed');
      res.send(rows);
  });
});



///women-labcoat-json
app.get('/women-labcoat-json', function(req, res, next) {
  
  // query
  connection.query(listsql + 'P_CAT=\'LC\' and SEX = \'W\'' + datesortsql,
  function (err, rows, fields) {
    if (err) console.log('DB failed');
      res.send(rows);
  });
});

///women-patientgowns-json
app.get('/women-patientgowns-json', function(req, res, next) {
  
  // query
  connection.query(listsql + 'P_CAT=\'PG\' and SEX = \'W\'' + datesortsql,
  function (err, rows, fields) {
    if (err) console.log('DB failed');
      res.send(rows);
  });
});

///women-otherapparel-json
app.get('/women-otherapparel-json', function(req, res, next) {

  // query
  connection.query(listsql + 'P_CAT=\'OA\' and SEX = \'W\'' + datesortsql,
  function (err, rows, fields) {
    if (err) console.log('DB failed');
      res.send(rows);
  });
});






//Mens---------------------------------------------------

//men-scrubs-json
app.get('/men-scrubs-json', function(req, res, next) {
  // query
  connection.query(listsql + 'P_CAT=\'SC\' and SEX = \'M\'' + datesortsql,
  function (err, rows, fields) {
    if (err) console.log('DB failed');
      res.send(rows);
  });
});



///men-labcoat-json
app.get('/men-labcoat-json', function(req, res, next) {
  
  // query
  connection.query(listsql + 'P_CAT=\'LC\' and SEX = \'M\'' + datesortsql,
  function (err, rows, fields) {
    if (err) console.log('DB failed');
      res.send(rows);
  });
});

///men-patientgowns-json
app.get('/men-patientgowns-json', function(req, res, next) {
  
  // query
  connection.query(listsql + 'P_CAT=\'PG\' and SEX = \'M\'' + datesortsql,
  function (err, rows, fields) {
    if (err) console.log('DB failed');
      res.send(rows);
  });
});

///men-otherapparel-json
app.get('/men-otherapparel-json', function(req, res, next) {
  
  // query
  connection.query(listsql + 'P_CAT=\'OA\' and SEX = \'M\'' + datesortsql,
  function (err, rows, fields) {
    if (err) console.log('DB failed');
      res.send(rows);
  });
});






//Accessories------------------------------------------------
///men-accessories-json
app.get('/men-accessories-json', function(req, res, next) {
  
  // query
  connection.query(listsql + 'P_CAT=\'ACC\' and SEX = \'M\'' + datesortsql,
  function (err, rows, fields) {
    if (err) console.log('DB failed');
      res.send(rows);
  });
});

///women-accessories-json
app.get('/women-accessories-json', function(req, res, next) {
  
  // query
  connection.query(listsql + 'P_CAT=\'ACC\' and SEX = \'W\'' + datesortsql,
  function (err, rows, fields) {
    if (err) console.log('DB failed');
      res.send(rows);
  });
});



//---------------------------------------------------------------------------------------------------
//shop-single page json

app.get('/product-json', (req, res) => {

  var list = req.query;
  console.log(list.id);
  var getsql = 'select P_ID, P_CAT, P_NAME, P_DETAIL, FABRIC, CARE_INS, PRICE,SEX, PATH';
  var option = ' from product where P_ID = ' + list.id;
  connection.query(getsql + option ,
  function (err, rows, fields) {
    if (err) console.log('DB failed');
    res.send(rows); 
  });
});







/*
app.get('/color-json', function(req, res, next) {

  var getsql2 = 'select COLOR from color where P_ID = 11';
  connection.query(getsql2,
    function (err, rows, fields) {
      if (err) console.log('DB failed');
      res.send(rows); 
  });
});

app.get('/size-json', function(req, res, next) {

  var getsql2 = 'select size from size where P_ID = 1';
  connection.query(getsql2,
    function (err, rows, fields) {
      if (err) console.log('DB failed');
      res.send(rows); 
  });
});
*/





app.listen(process.env.PORT || port, () => console.log(`Example app listening`))

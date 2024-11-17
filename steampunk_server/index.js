const express = require('express')
var cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const bodyParser = require('body-parser')
const app = express()
const port = 8000
app.use(cors())
app.use(bodyParser.json());
var conn = new sqlite3.Database('news')
conn.serialize(()=>{
    conn.run('CREATE TABLE IF NOT EXISTS news(id INTEGER PRIMARY KEY, name TEXT, discription TEXT, url TEXT)')
})
conn.close()
app.get('/', async(req, res)=>{
    var data = {}
    var conn = new sqlite3.Database('news')
    try{
    const news = await new Promise((resolve, reject)=>{
        conn.all("SELECT id, name, discription, url FROM news",[],(err, news)=>{
            if (err) {
                reject(err);
            } else {
                resolve(news);
            }
    })})
    data = {news}
    res.json(data);
    return
} finally{conn.close()}})

app.post('/verify', (req,res)=>{
    if (req.body.login =='wnloved' && req.body.password =='wnloved'){
        res.json({verify:'verify'})
    }else{res.json({verify:'unverify'})}
})
app.post('/appendnew', async(req,res)=>{
    var conn = new sqlite3.Database('news')
    try{
    conn.prepare('INSERT INTO news (name, discription, url) VALUES (?,?,?)').run(req.body.name,req.body.discription,req.body.url).finalize()
    data = {succsess:'succsess'}
    res.json(data)
    return}finally{conn.close()}
})
app.post('/editnew', async(req,res)=>{
    var conn = new sqlite3.Database('news')
    try{
    conn.run(`UPDATE news SET name = ?, discription = ?, url = ? WHERE id = ?`, [req.body.name, req.body.discription,req.body.url, req.body.id]);
    data = {succsess:'succsess'}
    res.json(data)
    return}finally{conn.close()}
})
app.delete('/deletenew', async(req,res)=>{
    var conn = new sqlite3.Database('news')
    try{
    console.log(req.body)
    conn.run(`DELETE FROM news WHERE id = ?`, [req.body.id]);
    data = {succsess:'succsess'}
    res.json(data)
    return}finally{conn.close()}
})
app.listen(port, 'localhost')
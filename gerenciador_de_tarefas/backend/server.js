const express = require('express')
const mysql = require('mysql2/promise')
const app = express()

let conexao

async function conectar(){
  conexao = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: '20261_usjt_sdmobile_tarefas'
  })
  console.log('Conectado ao MySQL!')
}

conectar()

app.get('/', (req, res) => {
  res.json({
    mensagem: 'Servidor funcionando...'
  })
})

const port = 3000
app.listen(port, console.log(`Servidor rodando na porta ${port}.`))
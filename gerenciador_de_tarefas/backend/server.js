const express = require('express')
const mysql = require('mysql2/promise')
const app = express()
app.use(express.json())//middleware
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

app.get('/tarefas', async (req, res) => {
  try{
    const [linhas] = await conexao.query('SELECT * FROM tb_tarefa')
    res.json(linhas)
  }
  catch(e){
    console.log(`Erro: ${e}`)
    res.status(500).json({
      erro: 'Erro ao criar a tarefa'
    })
  }
})
//fazer a rota post, ou seja, aquela que permite que uma tarefa seja cadastrada na base
app.post('/tarefas', async (req, res) => {
  try{
    const sql = 'INSERT INTO tb_tarefa (titulo, descricao) VALUES(?, ?)'
    const [resultado] = await conexao.query(
      sql,
      [req.body.titulo, req.body.descricao]
    )
    res.json({
      cod_tarefa: resultado.insertId,
      titulo: req.body.titulo,
      descricao: req.body.descricao
    })
  }
  catch(e){
    console.log(`Erro: ${e}`)
    res.status(500).json({
      erro: 'Erro ao criar tarefa'
    })
  }
})

app.put('/tarefas/:id', async (req, res) => {
  //completar esse método em 15 minutos
})




app.get('/', (req, res) => {
  res.json({
    mensagem: 'Servidor funcionando...'
  })
})

const port = 3000
app.listen(port, console.log(`Servidor rodando na porta ${port}.`))
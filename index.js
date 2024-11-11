const express = require('express') // chamando o express

const app = express() // criar um aplicativo web com o express

app.use(express.json())//app.use=adicona middlewares(bloco de códigos)

app.get('/', (req, res) => {// retornar informações
    res.send('App rodando')// função de resposta, enviar resposta
})

app.get('/prof', (req, res) => {
    res.send('prof rojerinho rei delas')
})

app.post('/cursos', (req, res) => { // metedo http utilizado para enviar infirmações e serem processadas
    const dadosCurso = req.body // corpo da requisição, informações enviadas pelo cliente para API
    console.log(dadosCurso)
    res.send('curso adicionado com sucesso')
})

app.get('/aluno', (req, res) => {
    res.send('enzo')
})

app.listen(3000, () =>{ // o servidor "escuto" as requisições que vem da porta
    console.log('App online')// mensagem
})
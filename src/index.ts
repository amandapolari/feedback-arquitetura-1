import express from 'express'
import cors from 'cors'
import { CryptocoinController } from './controller/CryptocoinController'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

// Instância da Controller

const cryptocoinController = new CryptocoinController();

// GET /cryptocoins
app.get('/cryptocoins', cryptocoinController.getAllCoins)

// POST /cryptocoins
app.post('/cryptocoins', cryptocoinController.createCoin)

// PUT /cryptocoins/:id
app.put('/cryptocoins', cryptocoinController.editCoin)

// DELETE /cryptocoins/:id
app.delete('/cryptocoins', cryptocoinController.deleteCoin)

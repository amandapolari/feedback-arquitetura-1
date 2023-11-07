import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

// Instância da Controller

// GET /cryptocoins

// POST /cryptocoins

// PUT /cryptocoins/:id

// DELETE /cryptocoins/:id

# feedback-arquitetura-1

### POST /cryptocoins
- req.body.id
- req.body.name
- req.body.acronym
- req.body.priceInDollars

### PUT /crytocoins/:id
- só deve ser possível alterar o preço atual em dóllar
- req.body.priceInDollars

### Validação de inputs
- id deve possuir mais de 1 caractere
- name deve possuir mais de 1 caractere
- acronym deve possuir entre 3 e 4 letras
- o preço de uma criptomoeda deve ser sempre maior ou igual a zero
export class CryptocoinBusiness {
  public getAllCoins = async () => {

  }

  public createCoin = async () => {
    const { id, name, acronym, priceInDollars } = input

    if (typeof id !== "string") {
      // res.status(400)
      throw new Error("'id' deve ser string")
    }

    if (typeof name !== "string") {
      // res.status(400)
      throw new Error("'Name' deve ser string")
    }

    if (typeof acronym !== "string") {
      // res.status(400)
      throw new Error("'acronym' deve ser string")
    }

    if (typeof priceInDollars !== "number") {
      // res.status(400)
      throw new Error("'priceInDollars' deve ser number")
    }



    const criyptoCoinDatabase = new CriyptoCoinDatabase()
    const criyptoCoinDBExists = await criyptoCoinDatabase.findCoinById(id)

    if (criyptoCoinDBExists) {
      // res.status(400)
      throw new Error("'id' jรก existe")
    }

    const newCryptoCoin = new CriptoCoin(
      id,
      name,
      acronym,
      priceInDollars
    )

    const newCryptoCoinDB: CryptoCoinDB = {
      id: newCryptoCoin.getId(),
      name: newCryptoCoin.getName(),
      acronym: newCryptoCoin.getAcronym(),
      priceInDollars: newCryptoCoin.getPriceInDollars()
    }

    await criyptoCoinDatabase.insertCryptoCoin(newCryptoCoinDB)

    return newCryptoCoin



  }
  }

  public editCoin = async () => {

  }

  public deleteCoin = async () => {

  }
}

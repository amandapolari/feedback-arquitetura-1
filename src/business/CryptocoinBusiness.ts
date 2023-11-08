import { CryptocoinDatabase } from "../database/CryptocoinDatabase"
import { Cryptocoin } from "../models/Cryptocoin"
import { CryptocoinDB } from "../types"

export class CryptocoinBusiness {

  public getAllCoins = async (input: any) => {
    const { q } = input

    const allCoinsDatabase = new CryptocoinDatabase()
    const allCoinsDB = await allCoinsDatabase.findAllCoins()

    const allCoins = allCoinsDB.map((allCoinsDB) => new Cryptocoin(
      allCoinsDB.id,
      allCoinsDB.name,
      allCoinsDB.acronym,
      allCoinsDB.price_in_dollars,
    ))

    return allCoins
  }

  public createCoin = async (input: any) => {
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



    const criyptoCoinDatabase = new CryptocoinDatabase()
    const criyptoCoinDBExists = await criyptoCoinDatabase.findCoinById(id)

    if (criyptoCoinDBExists) {
      // res.status(400)
      throw new Error("'id' já existe")
    }

    const newCryptoCoin = new Cryptocoin(
      id,
      name,
      acronym,
      priceInDollars
    )

    const newCryptoCoinDB: CryptocoinDB = {
      id: newCryptoCoin.id,
      name: newCryptoCoin.name,
      acronym: newCryptoCoin.acronym,
      price_in_dollars: newCryptoCoin.priceInDollars
    }

    await criyptoCoinDatabase.insertCoin(newCryptoCoinDB)

    return newCryptoCoin
  }

  public editCoin = async (input: any) => {}


  public deleteCoin = async (input: any) => {};
}

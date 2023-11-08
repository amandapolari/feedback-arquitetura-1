import allCoinsDataBase from "../database/AllCoinsDatabase"
import AllCoins from "../models/AllCoins"
import AllCoinsDB from "../types"

export class CryptocoinBusiness {

  public getAllCoins = async (input: any) => {
    const { q } = input

    const allCoinsDatabase = new allCoinsDatabase()
    const allCoinsDB = await allCoinsDatabase.findUsers(q)

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
    const allCoins: AllCoins[] = allCoinsDB.map((allCoinsDB) => new allCoins(
      llCoinsDB.id,
      llCoinsDB.name,
      llCoinsDB.acronym,
      llCoinsDB.price_in_dollars,
    ))

    return allCoins
  }



  public createCoin = async () => {}
  
  public editCoin = async () => {}


  public deleteCoin = async () => {};
}

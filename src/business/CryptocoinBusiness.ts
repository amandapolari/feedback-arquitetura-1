import allCoinsDataBase from "../database/AllCoinsDatabase"
import AllCoins from "../models/AllCoins"
import AllCoinsDB from "../types"

export class CryptocoinBusiness {
  public getAllCoins = async (input: any) => {
    const { q } = input

    const allCoinsDatabase = new allCoinsDatabase()
    const allCoinsDB = await allCoinsDatabase.findUsers(q)

    const allCoins: AllCoins[] = allCoinsDB.map((allCoinsDB) => new allCoins(
      llCoinsDB.id,
      llCoinsDB.name,
      llCoinsDB.acronym,
      llCoinsDB.price_in_dollars,
    ))

    return allCoins
  }



  public createCoin = async () => {

  }

  public editCoin = async () => {

  }

  public deleteCoin = async () => {

  }
}

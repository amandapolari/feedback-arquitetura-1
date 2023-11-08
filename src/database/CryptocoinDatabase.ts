import { CryptocoinDB } from "../types"
import { BaseDatabase } from "./BaseDatabase"

export class CryptocoinDatabase extends BaseDatabase {
  public static TABLE_CRYPTOCOINS = "cryptocoins"
  
  public findAllCoins = async () => {
    const result: CryptocoinDB[] = await BaseDatabase
      .connection(CryptocoinDatabase.TABLE_CRYPTOCOINS)
      .select()

    return result
  }

  public findCoinById = async (id: string) => {
    const [result]: CryptocoinDB[] | undefined[] = await BaseDatabase
      .connection(CryptocoinDatabase.TABLE_CRYPTOCOINS)
      .select()
      .where({ id })

    return result
  }

  public insertCoin = async (cryptocoinDB: CryptocoinDB) => {
    await BaseDatabase
      .connection(CryptocoinDatabase.TABLE_CRYPTOCOINS)
      .insert(cryptocoinDB)
  }

  public updateCoinById = async () => {

  }

  public deleteCoinById = async () => {

  }
}

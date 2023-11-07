import { Request, Response } from "express";
import { CryptocoinBusiness } from "../business/CryptocoinBusiness";

export class CryptocoinController {
  public getAllCoins = async () => {

  }

  public createCoin = async (req: Request, res: Response) => {
    try {
      const input = {
        id: req.body.id,
        name: req.body.name,
        acronym: req.body.acronym,
        priceInDollar: req.body.id
      }

      const cryptocoinBusiness = new CryptocoinBusiness();
      const output = await cryptocoinBusiness.createCoin(input)

      res.status(201).send(output)
    } catch (error) {
      console.log(error);

      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }      
    }
  }

  public editCoin = async () => {

  }

  public deleteCoin = async () => {

  }
}

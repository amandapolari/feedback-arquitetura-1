import { Request, Response } from "express";
import { CryptocoinBusiness } from "../business/CryptocoinBusiness";

export class CryptocoinController {
  public getAllCoins = async () => {};

  public createCoin = async () => {};

  public editCoin = async (req: Request, res: Response) => {
    try {
      const input = {
        id: req.params.id,
        priceInDollars: req.body.priceInDollars,
      };

      const cryptocoinBusiness = new CryptocoinBusiness();
      const response = cryptocoinBusiness.createCoin(input);

      res.status(201).send(response);
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
  };

  public deleteCoin = async () => {};
}

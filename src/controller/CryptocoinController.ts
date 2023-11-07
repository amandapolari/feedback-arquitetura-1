import { Request, Response } from 'express';
import { CryptocoinBusiness } from '../business/CryptocoinBusiness';

export class CryptocoinController {
  public getAllCoins = async () => {

  }

  public createCoin = async () => {

  }

  public editCoin = async (req: Request, res: Response) => {
    try{
    const input: any ={
      id: req.params.id,
      priceInDollars: req.body.priceInDollars
    }

    const cryptocoinBusiness = new CryptocoinBusiness();
    const output = await cryptocoinBusiness.editCoin(input);

    res.status(200).send(output)

  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
        res.status(500);
    }

    if (error instanceof Error) {
        res.send(error.message);
    } else {
        res.send('Erro inesperado');
    }
}
}

  public deleteCoin = async () => {

  }
}

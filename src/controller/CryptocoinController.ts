
import { Request, Response } from "express";
import { CryptocoinBusiness } from "../business/CryptocoinBusiness";

export class CryptocoinController {
  public getAllCoins = async () => {};

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

  public deleteCoin = async (req:Request , res:Response) =>{
      try {
          const input = {id: req.params.id}
          
          const cryptocoinBusiness = new CryptocoinBusiness()

          const response = await cryptocoinBusiness.deleteCoin(input)
  
          // if (typeof idToDelete !== "string") {
          //     res.status(400)
          //     throw new Error("'id' deve ser string")
          // }
  
          // const userDataBase = new UsersDatabase();
          // const userDBExists = await userDataBase.findUserById(idToDelete);
  
          // if (!userDBExists) {
          //     res.status(404)
          //     throw new Error("'id' não encontrado")
          // }
  
          // const user = new User(
          //     userDBExists.id,
          //     userDBExists.name,
          //     userDBExists.created_at
          // )
  
          // await userDataBase.deleteUserById(user.getId());
          
          // res.status(200).send("Usuario deletado com sucesso")
      } catch (error) {
          console.log(error)
  
          if (req.statusCode === 200) {
              res.status(500)
          }
  
          if (error instanceof Error) {
              res.send(error.message)
          } else {
              res.send("Erro inesperado")
          }
      }
    }
  }



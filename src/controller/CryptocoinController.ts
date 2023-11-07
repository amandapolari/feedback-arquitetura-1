import { CryptocoinBusiness } from "../business/CryptocoinBusiness"

export class CryptocoinController {
  public getAllCoins = async () => {

  }

  public createCoin = async () => {

  }

  public editCoin = async () => {

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


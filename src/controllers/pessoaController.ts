import {Request, Response} from 'express'
import {Pessoa} from '../models/Pessoa'


export const index = async (req: Request, res: Response) => {
    let pessoa = await Pessoa.findAll()

    // Renderizando o template com os dados de 'pessoa', agora com o curso incluído
    res.render('pages/pessoa', {
      pessoa
    });
  }

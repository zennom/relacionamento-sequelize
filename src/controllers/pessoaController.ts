import {Request, Response} from 'express'
import {Pessoa} from '../models/Pessoa'

export const index = async (req: Request, res:Response) =>{

    let pessoa = await Pessoa.findAll()

    res.render('pages/pessoa',{
        pessoa
    })
}

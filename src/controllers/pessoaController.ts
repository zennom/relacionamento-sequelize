import {Request, Response} from 'express'
import {Pessoa} from '../models/Pessoa'
import {Curso} from '../models/Curso'

export const index = async (req: Request, res: Response) => {
  
  const pessoasComCursos = await Pessoa.findAll({
    include: {
      model: Curso,
      as: 'curso', // Nome do alias
      required: false, // Caso nem todas as pessoas tenham curso preferido
    },
  })

  res.render('pages/pessoa', {
    pessoasComCursos
  });
}


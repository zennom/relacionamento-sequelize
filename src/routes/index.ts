import {Router} from 'express'
import * as pessoaController from '../controllers/pessoaController'

const router = Router()

router.get('/',(req,res) =>{
    res.send('teste')
})

router.get('/pessoas',pessoaController.index)


export default router
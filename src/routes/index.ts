import {Router} from 'express'

const router = Router()

router.get('/',(req,res) =>{
    res.send('teste')
})


export default router
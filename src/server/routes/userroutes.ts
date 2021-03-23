import * as express from 'express';
import db from '../db/connection';

const router = express.Router();

router.post('/', async (req,res)=>{
    let userdetails = req.body
    try {
        const userinfo = await db.users.post(userdetails.name, userdetails.email)
        res.json(userinfo)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req,res)=>{
    let id:string = req.params.id
    try {
        res.json(await db.users.put(id, req.body.name, req.body.email))
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req,res)=>{
    let id:string = req.body.id
    try {
        res.json(await db.users.remove(id))
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

export default router
import * as express from 'express';
import db from '../db/connection';

const router = express.Router();

router.post('/', async (req,res)=>{
    let tagDeets = req.body
    try {
        const tagInfo = await db.tags.post(tagDeets.name)
        res.json(tagInfo)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req,res)=>{
    let id:string = req.params.id
    try {
        res.json(await db.tags.put(id, req.body.name))
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req,res)=>{
    let id:string = req.params.id
    try {
        res.json(await db.tags.remove(id))
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

export default router
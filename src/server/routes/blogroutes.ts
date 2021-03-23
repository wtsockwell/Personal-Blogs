import * as express from 'express';
import db from '../db/connection';

const router = express.Router();

router.get('/:id?', async (req,res) =>{
    try {
        let id:string = req.params.id
        if(id){
            res.json((await db.blogs.one(id))[0])
        } else {
            res.json(await db.blogs.all())
        }
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.post('/', async (req,res) =>{
    let blog = req.body
    try {
        const blogbody = await db.blogs.post(blog.title, blog.content, blog.authorid)
        res.json(blogbody)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req,res) =>{
    let updated = req.body
    try {
        res.json(await db.blogs.put(req.params.id, updated.title, updated.content))
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req,res)=>{
    let id:string = req.params.id
    try {
        res.json(await db.blogs.remove(id))
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

export default router
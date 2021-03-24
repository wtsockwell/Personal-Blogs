import * as express from 'express';
import db from '../db/connection';

const router = express.Router();

router.get('/:id', async(req,res) =>{
    try {
        let id = req.params.id
        res.json(await db.blogtags.get(id))
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})
router.post('/', async (req, res) => {
    let bloginfo = req.body
    try {
        const btinfo = await db.blogtags.post(bloginfo.blogid, bloginfo.tagid)
        res.json(btinfo)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req, res) => {
    try {
        res.json(await db.blogtags.put(req.body.newblogid, req.body.newtagid, req.body.oldblogid, req.body.oldtagid))
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        res.json(await db.blogtags.remove(req.body.oldblogid, req.body.oldtagid))
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

export default router
import {Query} from './connection'

const post = async (blogid:string, tagid:string) => Query('INSERT INTO BlogTags(blogid, tagid) VALUE(?,?)', [blogid, tagid])

const put = async (newblogid:string, newtagid:string, oldblogid:string, oldtagid:string) => Query('UPDATE BlogTags SET blogid=?, tagid=? WHERE blogid = ? AND tagid = ?', [newblogid, newtagid, oldblogid,oldtagid])

const remove = async (oldblogid:string, oldtagid:string) => Query('DELETE FROM BlogTags WHERE id=?', [oldblogid, oldtagid])

export default {
    post,
    put,
    remove
}
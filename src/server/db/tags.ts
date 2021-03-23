import {Query} from './connection'

const post = async (name:string) => Query('INSERT INTO Tags(name) VALUE(?)', [name])

const put = async (id:string, name:string) => Query('UPDATE Tags SET name=? WHERE id=?', [name, id])

const remove = async (id:string) => Query('DELETE FROM Tags WHERE id=?', [id])

export default {
    post,
    put,
    remove
}
import {Query} from './connection'

const post = async (name:string, email:string) => Query('INSERT INTO Authors(name,email) VALUE(?,?)', [name, email])

const put = async (id:string, name:string, email:string) => Query('UPDATE Authors SET name=?, email=? WHERE id=?', [name, email, id])

const remove = async (id:string) => Query('DELETE FROM Authors WHERE id=?', [id])

export default {
    post,
    put,
    remove
}
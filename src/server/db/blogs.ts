import { Query } from './connection'

const all = async () => Query('SELECT b.id, a.name as user, b.content, b.title FROM Blogs b JOIN Authors a ON a.id = b.authorid ORDER BY b.id')

const one = async (id: string) => Query('SELECT a.name as user, b.content, b.title FROM Blogs b JOIN Authors a ON a.id = b.authorid FROM Blogs where id=?', [id])

const post = async (title: string, content: string, authorid: string) => Query('INSERT INTO Blogs (title, content, authorid) VALUES(?,?,?)', [title, content, authorid])

const put = async (id: string, title: string, content: string) => Query('UPDATE Blogs set title=?, content=? WHERE id=?', [title, content, id])

const remove = async (id: string) => Query('DELTE FROM Blogs WHERE id = ?', [id])

export default {
    all,
    one,
    post,
    put,
    remove
}
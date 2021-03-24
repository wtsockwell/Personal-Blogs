import * as React from 'react'
import { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface blogProps extends RouteComponentProps<{ id: string }> { }
interface blog {
    id: number,
    user: string,
    content: string,
    title: string
}

const EditBlog: React.FC<blogProps> = ({ history, match: { params: { id } } }) => {

    const [newTitle, setTitle] = useState('')
    const [newContent, setContent] = useState('')

    const getBlog = async () => {
        let r = await fetch(`/api/blog/${id}`)
        let blog = await r.json()
        setTitle(blog.title)
        setContent(blog.content)
    }

    useEffect(() => { getBlog() }, [])

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }

    const handleEdit = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        updateBlog()
    }

    const handleDelete = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        deleteBlog()
    }

    const updateBlog = async () => {
        try {
            let blog = {
                title: newTitle,
                content: newContent
            }
            let r = await fetch(`/api/blog/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blog)
            })
            history.goBack()
        } catch (err) {
            console.log(err)
        }
    }

    const deleteBlog = () => {
        let r = fetch(`/api/blog/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        history.push('/')
    }

    return (
        <div className="container mt-5">
            <form>
                <div className="form-group">
                    <label htmlFor="">New Title</label>
                    <input type="text" name="title" id="title" value={newTitle} onChange={handleTitle} className="form-crontrol" />
                </div>
                <div className="form-group">
                    <label htmlFor="">New Content</label>
                    <textarea name="content" id="" cols={30} rows={10} value={newContent} onChange={handleContent} className="form-control" ></textarea>
                </div>
                    <button className="btn btn-info mx-2" onClick={handleEdit}>Save Edits</button>
                    <button className="btn btn-danger mx-2" onClick={handleDelete}>Delete Blog</button>
            </form>

        </div>
    )



}

export default EditBlog
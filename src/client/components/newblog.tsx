import * as React from 'react'
import { useState, useEffect } from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'

interface blogProps extends RouteComponentProps<{ id: string }> { }
interface blog {
    id: number,
    user: string,
    content: string,
    title: string
}



const NewBlog: React.FC<blogProps> = ({ history, match: { params: { id } } }) => {

    const [title, setTitle] = useState('')
    const [content, setcontent] = useState('')
    const [author, setAuthor] = useState('')
    const [email, setEmail] = useState('')
    const [tags, setTags] = useState('')

    const handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setcontent(e.target.value)
    }
    const handleAuthor = (e:React.ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value)
    }
    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleTags = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTags(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        createBlog()
    }

    const createBlog = async () => {
        try {
            let user = {
                name: author,
                email: email
            }
            let userRes = await fetch(`/api/user`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(user)
            })
            
            let newUser = await userRes.json()

            let blog = {
                title: title,
                content: content,
                authorid: newUser.insertId
            }
            let blogRes = await fetch(`/api/blog/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blog)
            })

            let newPost = await blogRes.json()

            let tagsArr = tags.split(" ")
            
            for(let i = 0; i<tagsArr.length; i++){
                let tagRes = await fetch(`/api/tags`,{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name:tagsArr[i]})
                })
                let newTagId = await tagRes.json()
                
                let blogTags = {
                    blogid: newPost.insertId,
                    tagid: newTagId.insertId
                }

                let blogTagRes = await fetch(`/api/blogtags`,{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(blogTags)
                })
            }
            history.goBack
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="author">Username</label>
                    <input type="text" name="author" id="author" className="form-control" onChange={handleAuthor} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="form-control" onChange={handleEmail} />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={handleTitle} />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea name="content" id="" cols={30} rows={10} onChange={handleContent}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="tags">Tags</label>
                    <input type="text" name="tags" id="tags" className="form-control" onChange={handleTags} />
                </div>
            </form>
            <button className="btn btn-success" onClick={handleSubmit}>Post</button>
            <Link to='/' className="btn btn-secondary">Go Back</Link>
        </div>
    )



}

export default NewBlog
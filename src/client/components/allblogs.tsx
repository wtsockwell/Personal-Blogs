import * as React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

interface blogsProps { }
interface blogs {
    id:number,
    user:string,
    content:string,
    title:string
}

const AllBlogs: React.FC<blogsProps> = (props) =>{

    const [blogs, setBlogs] = useState<blogs[]>([])

    const getBlogs = async() =>{
        let r = await fetch('/api/blog')
        let blog = await r.json()
        setBlogs(blog)
    }

    useEffect(()=>{getBlogs()}, [])

    return(
        <div>
            <div className="jumbotron d-flex align-items-center flex-column">
                <h1 className="display-3">Welcome to the Blogs Spot</h1>
                <Link to={'/create/newblog'} className="btn btn-primary">Mmm What'chya say</Link>
            </div>
            <div className="container mt-3">
                {blogs.map(blog =>(
                    <div key={blog.id} className="row">
                        <div className="card my-2 col-4">
                            <div className="card-body">
                                <h3 className="card-title">{blog.title}</h3>
                                <p className="text-muted">{blog.user}</p>
                                <p className="card-text">{blog.content}</p>
                                <Link to={`/${blog.id}`} className="btn btn-secondary"> Read more</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )



}

export default AllBlogs
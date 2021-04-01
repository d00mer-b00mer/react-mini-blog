import { useState } from "react";
import { useHistory } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setPending(true)
        const blog = { title, body, author }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(blog)
        })
        .then(() => {
            setPending(false)
            console.log('new blog added...')
            history.push('/')
        })
        .catch(err => {
            setPending(false)
            console.error(err)
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} />
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled style={{backgroundColor: 'gray'}}>Adding Blog...</button>}
            </form>
        </div> 
    );
}
 
export default Create;
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController()

        fetch(url, { signal: abortCont.signal})
            .then(res => {
                if(res.ok){
                    return res.json()
                }
                else {
                    throw Error('could not fetch data for resource')
                }
            })
            .then(data => {
                setData(data)
                setPending(false)
                setError(null)
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('Fetch aborted')
                }
                else {
                    setPending(false)
                    setError(err.message)
                }
            })
        return () => abortCont.abort()
    }, [url]) // Run function only when certain variable dependencies are changed

    return { data, isPending, error }
}

export default useFetch
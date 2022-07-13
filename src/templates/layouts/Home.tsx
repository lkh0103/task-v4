import React, { useEffect, useState } from 'react'
import useRequestWithState from '../../hooks/useRequest'
import useTitle from '../../hooks/useTitle'

export default function Home() {

    const { api, loading, error } = useRequestWithState()
    const [search, setSearch] = useState('')
    const [param, setParam] = useState('posts')
    useEffect(() => {
        loadUser()
    }, [param])

    useTitle('React project')

    const loadUser = () => {
        api('https://jsonplaceholder.typicode.com/', param)
            .then((e) => {
                console.log('success', e)
            })
            .catch(console.error)
    }

    if (loading) return <div>Loading</div>
    if (error) return <h1>{error}</h1>

    return (
        <div>
            <h2>Home</h2>
            <h1>Route Objects Example</h1>

            <p>
                ABC
            </p>

            <p>
                React Router exposes a <code>useRoutes()</code> hook that allows you to
                hook into the same matching algorithm that <code>&lt;Routes&gt;</code>{" "}
                uses internally to decide which <code>&lt;Route&gt;</code> to render.
                When you use this hook, you get back an element that will render your
                entire route hierarchy.
            </p>

            <input value={search} onChange={(e) => {
                setSearch(e.target.value)
            }} />
            <button onClick={(e) => {
                setParam(search)
            }}>Search</button>
        </div>
    )
}

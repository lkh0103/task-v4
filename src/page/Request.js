import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Request() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const useRequest = axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        })
        //Xử lý thành công
        useRequest.then((result) => {
            // alert('Vui long cho 2s')
            setPosts(result.data);
        })
        //Xử lý thất bại
        useRequest.catch(err => {
            console.log('err', err);
            //console.log({ err })
        })
    }, [])

    // const useRequest = useEffect(() => {
    //     try {
    //         fetch('https://jsonplaceholder.typicode.com/posts')
    //             .then(res => res.json())
    //             .then(result => setPosts(result))
    //         // alert('Vui long cho 2s')
    //         console.log('success')
    //     } catch (err) {
    //         // alert('That Bai')
    //         console.log('err', err)
    //     }
    // }, [])

    return (
        <div>POST <br />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

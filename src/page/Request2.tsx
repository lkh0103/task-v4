import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface X {
    title: string
}

export default function Request2() {
    
    const [post2, setPost2] = useState([]);
    
    useEffect(() => {
        const useRequest2 = axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        })
        //Xử lý thành công
        useRequest2.then((result) => {
            // alert('Vui long cho 2s')
            setPost2(result.data);
        })
        //Xử lý thất bại
        useRequest2.catch(err => {
            console.log('err', err);
            //console.log({ err })
        })
    }, [])

    return (
        <div>Request2
            <ul>
                {/* {cmts.map(cmt => (
                    <li key={cmt.id}>{cmt.body}</li>
                ))} */}
                {post2.map((cmt: X, index)=>{
                    return <li key={index}>
                        {cmt.title}
                    </li>
                })}
            </ul>
        </div>
    )
}

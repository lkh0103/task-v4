import React, { useEffect, useState } from 'react'
import { useLogger } from '../components/LoggerProvider';
import useTitle from '../hooks/useTitle';

export default function Newtitle() {
    useTitle('Test 2')
    const [title, setTitle] = useState('')
    const logger = useLogger()
    
    const viewLog = () => {
        console.log(logger)
        logger.setLastError('A')
    }

    useEffect(() => {
        // document.title = title;
    })

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div className='container' style={{textAlign: 'center'}} >
            <p>Change Title: </p>
            <input value={title}
                onChange={(e) => handleChangeTitle(e)} >
            </input>
            <button onClick={viewLog}>X</button>
        </div>
    )
}

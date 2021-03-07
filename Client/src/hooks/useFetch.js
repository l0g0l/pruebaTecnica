import { useState, useEffect } from 'react';
import axios from 'axios';
// import data from '../hooks/data'

// const useFetch = (url) => {
//     const [data, setData] = useState([])
//     useEffect(async () => {
//         const res = await fetch(url);
//         console.log(`RES: ${res}`)
//         const json = await res.json();
//         console.log(`JSON: ${json}`)
//         setData([json])
//     },[url])
//     console.log(`DATA: ${data}`)
//     return data
// }


const useFetch = (url) => {

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = async (url) => {
            try {
                await axios.get(url)
                    .then(res => {
                        setData([...res.data]);
                    })
            } catch (error) {
                console.log(error)
            }

        }

        fetchData(url)
    }, [url])
    return data
}

export default useFetch
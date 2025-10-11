import { useEffect, useState } from "react";

const useBooks = () =>{
    const [allbooks, setAllBooks]= useState([])
     const [loading, setLoading]= useState(true)
    
        useEffect(()=>{
            fetch('http://localhost:5000/bookcollection')
            .then(res=>res.json())
            .then(data=>{
                setAllBooks(data)
                setLoading(false)
            })
    
        }, [])

        return [allbooks, loading];

}

export default useBooks;
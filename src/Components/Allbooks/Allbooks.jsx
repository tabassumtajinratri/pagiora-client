import { div } from "framer-motion/client";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import AllbookCard from "../AllbookCard/AllbookCard";
import useBooks from "../Hooks/useBooks";

const Allbooks = () => {
    
    const [allbooks, setAllBooks]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/bookcollection')
        .then(res=>res.json())
        .then(data=>setAllBooks(data))

    }, [])
    return (
        <div>
            <div className="text-2xl">
            <p className="mt-5 italic text-amber-500 text-center">---Popular---</p>
            <h1 className="text-5xl mt-5 text-amber-700 text-center font-bold italic">Available Books</h1>
        </div>

        <div>
            <Marquee pauseOnHover speed={150}>
                {
                   allbooks && allbooks.map(allbook =><AllbookCard key={allbook._id} allbook={allbook}></AllbookCard>)
                }
            </Marquee>
        </div>
        </div>

    );
};

export default Allbooks;
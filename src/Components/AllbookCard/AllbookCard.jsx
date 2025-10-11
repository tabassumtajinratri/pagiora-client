import React from 'react';

const AllbookCard = ({allbook}) => {
    const {name, author, category, genre, img, popularity, description, price} = allbook
    return (
        <div>
            <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
            <img
                width={400}
                height={400}
                className="h-[275px] w-[350px] rounded-lg object-cover"
                src= {img}
                alt="card navigate ui"
             />
            <div className="grid gap-2">
                <h1 className="text-2xl font-semibold text-amber-950">{name}</h1>
                <h1 className="text-lg font-semibold text-amber-500">{author}</h1>
                <div className="text-lg font-semibold text-green-500">${price}</div>
            </div>
        </div>
        </div>
    );
};

export default AllbookCard;
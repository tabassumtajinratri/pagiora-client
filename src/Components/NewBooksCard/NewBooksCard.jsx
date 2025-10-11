import React from 'react';

const NewBooksCard = ({newbook}) => {
    const {name, author, price, img} = newbook
    return (
        <div>
            <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
            <img
                width={400}
                height={400}
                className="h-[275px] w-[350px] rounded-lg object-cover"
                src={img}
                alt="card navigate ui"
             />
            <div className="grid gap-2">
                <h1 className="text-lg font-semibold">{name}</h1>
                <p className="text-sm text-gray-500 dark:text-white/60">{author}</p>
                <div className="text-lg font-semibold">${price}</div>
            </div>
           
        </div>
        </div>
    );
};

export default NewBooksCard;
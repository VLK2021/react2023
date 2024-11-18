import React from 'react';

const Car = ({car}) => {
    const {model, price, year} = car;


    return (
        <div>
            {model} - {year} - {price}
            <hr/>
        </div>
    );
};

export {Car};
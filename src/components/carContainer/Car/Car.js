import React, {useRef, useState} from 'react';
import {useDispatch} from "react-redux";

import {carService} from "../../../services";
import {carActions} from "../../../redux/slices/carSlice";
import empty from '../../../assets/images/empty.png';


const Car = ({car}) => {
    const {id, brand, price, year, photo} = car;
    const dispatch = useDispatch();

    const fileInput = useRef();
    const [image, setImage] = useState(null)

    const deleteCar = async () => {
        await carService.deleteById(id);
        await dispatch(carActions.getAll());
    }

    const addPhoto = async ()=> {
        const formData = new FormData();
        const file = fileInput.current.files[0];
        formData.append('photo', file)
        await carService.addPhoto(id, formData)
        setImage(URL.createObjectURL(file))
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={deleteCar}>delete</button>
            <img
                src={photo || image || empty}
                style={{cursor: photo || image ? 'default' : 'pointer'}}
                alt={brand}
                width={'200px'}
                onClick={() => fileInput.current.click()}
            />
            <input
                type="file"
                accept={'image/jpeg, image/png'}
                ref={fileInput}
                style={{display: 'none'}}
                disabled={!!photo || !!image}
                onChange={addPhoto}
            />
            <hr/>
        </div>
    );
};

export {Car};
import React, {useState} from 'react';

import css from './Maine.module.css';
import clsx from "clsx";


const Maine = () => {
    const [changeBackground, setChangeBackground] = useState('grey')
    const [changeBorder, setChangeBorder] = useState('black')


    const changeBackgroundColor = (currentColorBackground) => {
        switch (currentColorBackground) {
            case 'red':
                setChangeBackground('red');
                break;
            case 'blue':
                setChangeBackground('blue');
                break;
            case 'green':
                setChangeBackground('green');
                break;
            case 'pink':
                setChangeBackground('pink');
                break;
        }
    }

    const changeBorderColor = (currentColorBackground) => {
        switch (currentColorBackground) {
            case 'red':
                setChangeBorder('red');
                break;
            case 'blue':
                setChangeBorder('blue');
                break;
            case 'green':
                setChangeBorder('green');
                break;
            case 'pink':
                setChangeBorder('pink');
                break;
        }
    }


    const changeBack = (e) => {
        const currentColorBackground = e.target.textContent;
        changeBackgroundColor(currentColorBackground);
    };

    const changeBorderFunction = (e) => {
        const currentColorBorder = e.target.textContent;
        changeBorderColor(currentColorBorder)
    };


    return (
        <div className={clsx(`${css.wrap}`)}>
            <div className={clsx(`${css.objectBlock}`)}>
                <h1>object for experiments</h1>

                <div className={css.objectBlockObject} style={{
                    backgroundColor: changeBackground,
                    border: `1px solid ${changeBorder}`
                }}>

                </div>
            </div>


            <div className={clsx(`${css.functionalBlock}`)}>
                <h1>Different styles</h1>

                <div className={clsx(`${css.functionalBlockAll}`)}>
                    <div className={clsx(`${css.functionalBlockFirst}`)}>
                        <p>change background</p>
                        <button className={clsx(`${css.red}`)} onClick={changeBack}>red</button>
                        <button className={clsx(`${css.blue}`)} onClick={changeBack}>blue</button>
                        <button className={clsx(`${css.green}`)} onClick={changeBack}>green</button>
                        <button className={clsx(`${css.pink}`)} onClick={changeBack}>pink</button>
                    </div>

                    <div className={clsx(`${css.functionalBlockSecond}`)}>
                        <p>change border</p>
                        <button className={clsx(`${css.red}`)} onClick={changeBorderFunction}>red</button>
                        <button className={clsx(`${css.blue}`)} onClick={changeBorderFunction}>blue</button>
                        <button className={clsx(`${css.green}`)} onClick={changeBorderFunction}>green</button>
                        <button className={clsx(`${css.pink}`)} onClick={changeBorderFunction}>pink</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export {Maine};
import React from 'react';
import clsx from "clsx";

import css from './BackgroundChanges.module.css';
import {UseAppContext} from "../../hooks";


const BackgroundChanges = () => {
    const {setBackground} = UseAppContext();

    const changeBackgroundColor = (currentColorBackground) => {
        switch (currentColorBackground) {
            case 'red':
                setBackground('red');
                break;
            case 'blue':
                setBackground('blue');
                break;
            case 'green':
                setBackground('green');
                break;
            case 'pink':
                setBackground('pink');
                break;
            case 'yellow':
                setBackground('yellow');
                break;
            case 'orange':
                setBackground('orange');
                break;
        }
    }

    const changeBack = (e) => {
        const currentColorBackground = e.target.textContent;
        changeBackgroundColor(currentColorBackground);
    };
    return (
        <div className={css.wrap}>
            <p>change background</p>
            <button className={clsx(`red`)} onClick={changeBack}>red</button>
            <button className={clsx(`blue`)} onClick={changeBack}>blue</button>
            <button className={clsx(`green`)} onClick={changeBack}>green</button>
            <button className={clsx(`pink`)} onClick={changeBack}>pink</button>
            <button className={clsx(`yellow`)} onClick={changeBack}>yellow</button>
            <button className={clsx(`orange`)} onClick={changeBack}>orange</button>
        </div>
    );
};

export {BackgroundChanges};
import React from 'react';

import css from './BackgroundChanges.module.css';
import clsx from "clsx";


const BackgroundChanges = (props) => {
    const {setChangeBackground} = props;

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
            case 'yellow':
                setChangeBackground('yellow');
                break;
            case 'orange':
                setChangeBackground('orange');
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
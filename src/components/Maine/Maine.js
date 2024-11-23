import React, {useState} from 'react';
import clsx from "clsx";

import css from './Maine.module.css';
import {BackgroundChanges} from "../BackgroundChanges/BackgroundChanges";
import {BorderChanges} from "../BorderChanges/BorderChanges";


const Maine = () => {
    const [changeBackground, setChangeBackground] = useState('grey');
    const [changeBorder, setChangeBorder] = useState('black');


    return (
        <div className={clsx(`${css.wrap}`)}>
            <div className={clsx(`${css.objectBlock}`)}>
                <h1>object for experiments</h1>

                <div className={css.objectBlockObject} style={{
                    backgroundColor: changeBackground,
                    border: `3px solid ${changeBorder}`
                }}></div>
            </div>


            <div className={clsx(`${css.functionalBlock}`)}>
                <h1>Different styles</h1>

                <div className={clsx(`${css.functionalBlockAll}`)}>
                    <div className={clsx(`${css.functionalBlockFirst}`)}>
                        <BackgroundChanges setChangeBackground={setChangeBackground}/>
                    </div>

                    <div className={clsx(`${css.functionalBlockSecond}`)}>
                        <BorderChanges setChangeBorder={setChangeBorder}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export {Maine};
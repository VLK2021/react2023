import React, {useState} from 'react';
import clsx from "clsx";

import css from './Maine.module.css';
import {BackgroundChanges} from "../BackgroundChanges/BackgroundChanges";
import {BorderChanges} from "../BorderChanges/BorderChanges";
import {UseAppContext} from "../../hooks";


const Maine = () => {
    const {currentBackground, currentBorderColor} = UseAppContext();


    return (
        <div className={clsx(`${css.wrap}`)}>
            <div className={clsx(`${css.objectBlock}`)}>
                <h1>object for experiments</h1>

                <div className={css.objectBlockObject} style={{
                    backgroundColor: currentBackground,
                    border: `3px solid ${currentBorderColor}`
                }}></div>
            </div>


            <div className={clsx(`${css.functionalBlock}`)}>
                <h1>Different styles</h1>

                <div className={clsx(`${css.functionalBlockAll}`)}>
                    <div className={clsx(`${css.functionalBlockFirst}`)}>
                        <BackgroundChanges/>
                    </div>

                    <div className={clsx(`${css.functionalBlockSecond}`)}>
                        <BorderChanges/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export {Maine};
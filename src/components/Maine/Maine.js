import React from 'react';
import clsx from "clsx";

import css from './Maine.module.css';
import {BackgroundChanges} from "../BackgroundChanges/BackgroundChanges";
import {BorderChanges} from "../BorderChanges/BorderChanges";
import {UseAppContext} from "../../hooks";
import {WidthChanges} from "../WidthChanges/WidthChanges";
import {HeightChanges} from "../HeightChanges/HeightChanges";


const Maine = () => {
    const {
        currentBackground,
        currentBorderColor,
        currentWidth,
        currentHeight
    } = UseAppContext();


    return (
        <div className={clsx(`${css.wrap}`)}>
            <div className={clsx(`${css.objectBlock}`)}>
                <h1>object for experiments</h1>

                <div className={css.objectBlockObject} style={{
                    backgroundColor: currentBackground,
                    border: `3px solid ${currentBorderColor}`,
                    width: currentWidth,
                    height: currentHeight
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

                <div className={css.inputsBlock}>
                    <div className={css.inputsBlockWidth}>
                        <WidthChanges/>
                    </div>
                    <div className={css.inputsBlockHeight}>
                        <HeightChanges/>
                    </div>
                    <div className={css.inputsBlockBorderRadius}>

                    </div>
                </div>

            </div>
        </div>
    );
};

export {Maine};
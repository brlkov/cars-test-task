import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import "../styles/switcher.scss"
import {state} from "../store/reducer";

const Switcher: FC = () => {

    const dispatch = useDispatch()
    const sort = useSelector((state: state)  => state.sort)

    return (
        <div className="switcher">
            <div
                className={`switcher__year ${sort === 'year' ? '_active' : ''}`}
                onClick={event => dispatch({type: "changeSort", payload: "year"})}
            >
                Году выпуска
            </div>
            <div
                className={`switcher__price ${sort === 'price' ? '_active' : ''}`}
                onClick={event => dispatch({type: "changeSort", payload: "price"})}
            >
                Цене
            </div>
    </div>
);
};

export default Switcher;
import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCars, state} from "../store/reducer";
import CarItem from "./CarItem";
import {Api} from "../http/api";

const CarList: FC = () => {

    const dispatch = useDispatch()
    const cars = useSelector((state: state)  => state.cars)
    const sort = useSelector((state: state)  => state.sort)

    useEffect(() => {
        dispatch(getCars())
    }, [])

    const getCars: any = () => {
        return (dispatch: any) => {
            Api.getAllCars()
                .then(response => dispatch(addCars(response.data)))
        }
    }

    return (
        <div className="car-list">
            {cars.map(car =>
                <CarItem car={car} key={car.id}/>
            )}
        </div>
    );
};

export default CarList;
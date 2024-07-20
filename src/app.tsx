import React, {FC} from 'react';
import './styles/app.scss'
import Header from "./components/Header";
import CarList from "./components/CarList";
import CarsMap from "./components/CarsMap";
import {useSelector} from "react-redux";
import {state} from "./store/reducer";

const App: FC = () => {

    const cars = useSelector((state: state)  => state.cars)

    return (
        <div className="app">
            <Header/>
            <CarList/>
            <CarsMap cars={cars}/>
        </div>
    );
}

export default App;

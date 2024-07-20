import React, {FC, FormEventHandler, useState} from 'react';
import "../styles/carItem.scss"
import {useDispatch} from "react-redux";
import {ICar} from "../models/Car";

const CarItem: FC<{car: ICar}> = ({car}) => {
    const {id, name, model, year, color, price} = car;

    const [activeRefactor, setActiveRefactor] = useState<boolean>(false)
    const [refactorName, setRefactorName] = useState<string>("")
    const [refactorModel, setRefactorModel] = useState<string>("")
    const [refactorPrice, setRefactorPrice] = useState<number>(0)

    const dispatch = useDispatch()

    const refactorHandler: FormEventHandler<HTMLButtonElement | HTMLFormElement> = (e) => {
        e.preventDefault();
        dispatch({type: "changeCar", payload: {id: id, refactorName: refactorName, refactorModel: refactorModel, refactorPrice: refactorPrice}})
    }

    return (
        <div className="car-item">

            <div className="car-item__car">
                <div className="car-item__car__name">
                    {name} {model}
                </div>

                <div className="car-item__car__info">
                    <div>
                        Год выпуска: {year}
                    </div>
                    <div>
                        Цвет: {color}
                    </div>
                    <div>
                        Цена: {price}$
                    </div>
                </div>

                <div className={`car-item__car__refactor ${activeRefactor ? "_activeRefactor" : ""}`}>
                    <div>Редактировать:</div>
                    <form onSubmit={refactorHandler}>
                        <input
                            placeholder="Марка"
                            value={refactorName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRefactorName(e.target.value.trimStart())}
                            type="text"
                        />
                        <input
                            placeholder="Модель"
                            value={refactorModel}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRefactorModel(e.target.value.trimStart())}
                            type="text"
                        />
                        <input
                            placeholder="Цена"
                            value={refactorPrice}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setRefactorPrice(Number(e.target.value))}
                            type="number"
                        />
                        <button type="submit" onClick={refactorHandler}>Применить</button>
                    </form>
                </div>
            </div>

            <div className="car-item__buttons">
                <button onClick={() => setActiveRefactor(!activeRefactor)} id="car-item__buttons__refactor"></button>
                <button onClick={() => dispatch({type: "deleteCar", payload: id})} id="car-item__buttons__delete"></button>
            </div>

        </div>
    );
};

export default CarItem;
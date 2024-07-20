import {ICar} from "../models/Car";

export interface state {
    sort: string,
    cars: ICar[]
}

enum ActionTypes {
    CHANGE_SORT = "changeSort",
    ADD_CARS = "addCars",
    DELETE_CAR = "deleteCar",
    CHANGE_CAR = "changeCar"
}

interface IChangeSort {
    type: ActionTypes.CHANGE_SORT,
    payload: "year" | "price"
}

interface IAddCars {
    type: ActionTypes.ADD_CARS,
    payload: ICar[]
}

interface IDeleteCar {
    type: ActionTypes.DELETE_CAR,
    payload: number
}

interface IChangeCar {
    type: ActionTypes.CHANGE_CAR,
    payload: {id: number, refactorName: string, refactorModel: string, refactorPrice: number}
}

export type actions = IChangeSort | IAddCars | IDeleteCar | IChangeCar

const defaultState: state = {
    sort: "price",
    cars: []
}


export const reducer = (state = defaultState, action: actions) : state => {
    switch (action.type) {
        case "changeSort":
            let newCars: ICar[] = []
            if (action.payload === "year") {
                newCars = state.cars.sort((a,b) => a.year - b.year)
            } else {
                newCars = state.cars.sort((a, b) => a.price - b.price)
            }
            return {...state, sort: action.payload, cars: newCars}
        case "addCars":
            return {...state, cars: action.payload}
        case "deleteCar":
            return {...state, cars: state.cars.filter(car => car.id !== action.payload)}
        case "changeCar":
            const refactorCar = state.cars.find(car => car.id === action.payload.id)
            if (refactorCar) {
                if (action.payload.refactorName !== "") {
                    refactorCar.name = action.payload.refactorName
                }
                if (action.payload.refactorModel !== "") {
                    refactorCar.model = action.payload.refactorModel
                }
                if (action.payload.refactorPrice !== 0) {
                    refactorCar.price = action.payload.refactorPrice
                }
            }
            return {...state, cars: [...state.cars]}
        default:
            return state
    }
}

export const addCars = (payload: any) => ({type: "addCars", payload})
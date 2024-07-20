import React, {FC} from 'react';
import "../styles/map.scss"
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import {ICar} from "../models/Car";

const CarsMap: FC<{cars: ICar[]}> = ({cars}) => {
    return (
        <div>
            <YMaps>
                <Map
                    className="map"
                    defaultState={{ center: [59.98, 30.32], zoom: 8, controls: []}}
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                >
                    {cars.map((car) =>
                        <Placemark properties={{balloonContent: `${car.name} ${car.model} <br/> ${car.price}$`}} geometry={[car.latitude, car.longitude]} key={car.id} />
                    )}
                </Map>
            </YMaps>
        </div>
    );
};

export default CarsMap;
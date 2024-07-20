import React, {FC} from 'react';
import Switcher from "./Switcher";
import "../styles/header.scss"

const Header: FC = () => {
    return (
        <div className="header">
            <h1>Список доступных автомобилей</h1>
            <div className="sort">
                <div>
                    Сортировка по:
                </div>
                <Switcher />
            </div>
        </div>
    );
};

export default Header;
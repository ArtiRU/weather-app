import React from "react";

export const List = (props) => {
    const isEmpty = props.weathers.length === 0;

    if (isEmpty) {
        return <p className="center">Вы пока что не добавили города!</p>;
    }
    return (
        !isEmpty && (
            <table className="centered responsive-table">
                <thead>
                    <tr>
                        <th>Город</th>
                        <th>Темпетарура</th>
                        <th>Погода</th>
                        <th>Ветер</th>
                    </tr>
                </thead>
                <tbody>
                    {props.weathers.map((weather) => {
                        return (
                            <tr className="col" key={weather.id}>
                                <td>{weather.city}</td>
                                <td className="align">
                                    <img
                                        className="mr-1"
                                        src={`https://openweathermap.org/img/w/${weather.icon}.png`}
                                        alt="icon"
                                    />
                                    {parseFloat(weather.temp - 273.15).toFixed(
                                        1
                                    )}
                                    &deg;C
                                </td>
                                <td className="fisrt-letter">
                                    {weather.description}
                                </td>
                                <td>{weather.wind}</td>
                                <td>
                                    <i
                                        className="material-icons red-text cursor"
                                        onClick={() =>
                                            props.onRemove(weather.id)
                                        }
                                    >
                                        delete
                                    </i>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        )
    );
};

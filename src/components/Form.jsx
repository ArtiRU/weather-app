import React, { useRef } from "react";
import axios from "axios";

export const Form = (props) => {
    const API_KEY = "75cb41e6211c0de1e2ed7be06dfa7856";
    const defaultLang = "ru";
    const date = new Date();
    const inputRef = useRef(null);

    const handleClick = (event) => {
        event.preventDefault();
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&lang=${defaultLang}&appid=${API_KEY}
        `
            )
            .then(({ data }) =>
                props.onAdd({
                    city: data.name,
                    temp: data.main.temp,
                    wind: data.wind.speed,
                    icon: data.weather[0].icon,
                    description: data.weather[0].description,
                })
            );
        inputRef.current.value = "";
    };
    const handlePress = (event) => {
        event.stopPropagation();
        if (event.key === "Enter") {
            axios
                .get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&lang=${defaultLang}&appid=${API_KEY}
        `
                )
                .then(({ data }) =>
                    props.onAdd({
                        city: data.name,
                        temp: data.main.temp,
                        wind: data.wind.speed,
                        icon: data.weather[0].icon,
                        description: data.weather[0].description,
                    })
                );
            inputRef.current.value = "";
        }
    };

    return (
        <>
            <div className="input-field mt-5">
                <input
                    ref={inputRef}
                    onKeyPress={handlePress}
                    id="weather"
                    type="text"
                    className="validate"
                />
                <label
                    htmlFor="weather"
                    style={{ fontSize: "20px", color: "#ffffff" }}
                    className="active"
                >
                    Введите название города
                </label>
                <div className="mt-2">
                    <button
                        onClick={handleClick}
                        className="btn waves-effect waves-light"
                        type="submit"
                    >
                        Добавить
                        <i className="material-icons right">send</i>
                    </button>
                </div>
                <div className="center fs-big">
                    {"Сегодня: " +
                        date.getDate() +
                        "." +
                        date.getMonth() +
                        1 +
                        "." +
                        date.getFullYear()}
                </div>
            </div>
        </>
    );
};

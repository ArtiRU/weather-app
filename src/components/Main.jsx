import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import { List } from "./List";

export const Main = () => {
    const [weathers, setWeathers] = useState([]);

    const addHandler = (value) => {
        const currentWeather = {
            id: Date.now(),
            city: value.city,
            temp: value.temp,
            wind: value.wind,
            icon: value.icon,
            description: value.description,
        };
        setWeathers([currentWeather, ...weathers]);
    };
    const removeHandler = (id) => {
        setWeathers((prev) => prev.filter((weather) => weather.id !== id));
    };
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("weathers"));
        setWeathers(saved);
    }, []);
    useEffect(() => {
        localStorage.setItem("weathers", JSON.stringify(weathers));
    }, [weathers]);
    return (
        <>
            <div className="container">
                <Form onAdd={addHandler} />
                <List weathers={weathers} onRemove={removeHandler} />
            </div>
        </>
    );
};

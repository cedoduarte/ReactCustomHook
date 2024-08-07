import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import "./Home.css";

export const END_POINT_URL = "https://jsonplaceholder.typicode.com/todos/1";

export function Home() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const { data, isLoading } = useFetch(END_POINT_URL);   

    function onSubmit(event) {
        event.preventDefault();
        setName(data.title);
        setAge(data.id);
    }

    function nameChanged(event) {
        setName(event.target.value);
    }

    function ageChanged(event) {
        setAge(event.target.value);
    }    

    return (
        <>
            <form className="home-form" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name" className="form-label">
                        Enter your name:
                    </label>
                    <input className="form-control" type="text" id="name" placeholder="Enter name" value={name} onChange={nameChanged} />
                </div>
                <div className="home-div">
                    <label htmlFor="age" className="form-label">
                        Enter your age:
                    </label>
                    <input className="form-control" type="number" id="age" placeholder="Enter age" value={age} onChange={ageChanged} />
                </div>
                <button className="btn btn-outline-primary home-submit" type="submit">Submit</button>
            </form>
        </>
    );
}
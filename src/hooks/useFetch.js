import { useState, useEffect } from "react";

export function useFetch(endPoint) {
    const [ data, setData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    async function fetchData() {
        try {
            const response = await fetch(endPoint);
            const data = await response.json();
            setData(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [endPoint]);

    return {
        data,
        isLoading
    };
}
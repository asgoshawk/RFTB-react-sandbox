import { useState, useEffect } from "react"

const useFetch = (url, options) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        setIsLoading(true);
        fetch(url, options)
            .then(res => res.json())
            .then(jsonData => setData(jsonData))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))

        // const fetchData = async () => {
        //     try {
        //         const res = await fetch(url, options);
        //         const rawData = await res.json();
        //         setData(rawData);
        //         setIsLoading(false);

        //     } catch (error) {
        //         setError(error);
        //         setIsLoading(false);
        //     }
        // }
        // fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return { data, isLoading, error }
}

export default useFetch
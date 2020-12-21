import {useState, useEffect}  from 'react';
import axios from 'axios';

function useAxiosGet(uri) {
    const [request, setRequest] = useState({
        loading: true,
        data: null,
    });

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
        });
        const url = `http://localhost:3001/${uri}`;

        axios.get(url)
            .then((response) => {
                setRequest({
                    loading: false,
                    data: response.data,
                });
            }).catch(() => {
                alert('Something went wrong.');
                setRequest({
                    loading: false,
                    data: null,
                });
            });
    }, [uri]);

    return request;
}

export default useAxiosGet;
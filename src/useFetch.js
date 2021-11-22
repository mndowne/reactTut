import {useState, useEffect} from 'react';


const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource')
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setIsPending(false);
                setdata(data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                console.log('need to be running the JSON server. can do this with the following command...');
                console.log('npx json-server --watch data/db.json --8000');
                setIsPending(false);
            });
    }, [url] );

    return { data, isPending, error }
}

export default useFetch;

import {useState, useEffect} from 'react';


const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
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
                if (err.name === 'AbourtError') {
                    console.log('fetch abourted');
                } else {
                    setError(err.message);
                    console.log('need to be running the JSON server. can do this with the following command...');
                    console.log('npx json-server --watch data/db.json --port 8000');
                    setIsPending(false);
                }
            });

        return () => abortCont.abort();

    }, [url] );

    return { data, isPending, error }
}

export default useFetch ;

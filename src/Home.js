import {useState, useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource')
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setIsPending(false);
                setBlogs(data);
                setError(null)
            })
            .catch(err => {
                setError(err.message);
                console.log('need to be running the JSON server. can do this with the following command...');
                console.log('npx json-server --watch data/db.json --8000');
                setIsPending(false);
            });
    }, [] );


    return (
        <div className="home">
        { error && <div>{ error } </div> }
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title='All me blogs!'/>}
        </div>
    );
}

export default Home;


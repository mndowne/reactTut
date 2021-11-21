import {useState} from 'react';
import BlogList from './BlogList';
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website' , body: 'lorem ipsum...', author: 'mario', id: 1 } ,
        { title: 'Welcom party' , body: 'lorem ipsum...', author: 'yoshi', id: 2 } ,
        { title: 'Web dev top tips' , body: 'lorem ipsum...', author: 'peach', id: 3 } ,
        { title: 'VIM is the best!' , body: 'lorem ipsum...', author: 'mario', id: 4 } 
    ]);

    return (
        <div className="home">
        <BlogList blogs={blogs} title='All me blogs!'/>
        <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title='Marios blogs!'/>
        </div>
    );
}

export default Home;


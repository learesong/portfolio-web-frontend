import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const useBlogClient = () => {

    const [blogposts, setBlogPosts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/blogs')
        .then(res => {
            setBlogPosts(res.data);
            console.log(blogposts);
        })  
        .catch(err => {
            console.error(err);
        })
    }, [])

    return blogposts
}
export default useBlogClient;
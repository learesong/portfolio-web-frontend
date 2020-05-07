import React, { useEffect, useState } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';

import BlogPost from '../components/BlogPost'

function BlogPostPage(props) {

    const [blogposts, setBlogPosts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/blogs')
        .then(resp => {
            setBlogPosts(resp.data);
            console.log(blogposts);
        })  
        .catch(err => {
          console.log(err);
        })
        
    })
    
    return(
        <div>
        {blogposts.map(function(blogpost){

        return <div>
            <BlogPost 
                title={blogpost.title} 
                subTitle={blogpost.subTitle} 
                category={blogpost.category} 
                content={blogpost.content}/>
            </div>
        })
        }
        </div>
    );
}
export default BlogPostPage;
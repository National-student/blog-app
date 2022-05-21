import './post.css';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

//post image...

import Body from '../../../assets/images/body.png'
import Groups from '../../../assets/images/group.png'
import Time from '../../../assets/images/time.png'


function Postpage() {

    const {userId}=useParams()
    const [posts, setPosts]=useState([])


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then((res)=>res.json())
        .then((data)=>setPosts(data))
        .catch((err)=>(err))
    },[userId])


    return(
        <>
        <div className='post-page'>
            
            <ul className='post-list'>
                <li className='post-imig'>
                    <img src={Groups} alt="" />
                </li>           
                <li className='post-item' key={posts.id} post={posts}>
                    <p className='post-id'>User interface - {posts.id}</p>
                    <hr />
                    <h3 className='post-title'>{posts.title}</h3>
                    <ul className='date-time'>
                        <li className='date'>October 24, 2020</li>
                        <li><img src={Time} alt="time" width={17} height={17}/></li>
                        <li className='date-text'>3 minutes read</li>
                    </ul>
                    <img className='post_img' src={Body} alt="body images" />
                    <p className='post-body'>{posts.body}</p>
                </li>
            </ul>

            


        </div>
        </>
    )
    
}
export default Postpage;
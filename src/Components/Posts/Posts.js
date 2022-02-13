import React, { useContext, useEffect, useState } from 'react';
import PostCard from './PostCard';
import Header from '../Header';
import CircleSVG from './CircleSVG';
import { data } from 'autoprefixer';
import FilterForm from './FilterForm';
import { v4 as uuid } from 'uuid';
import Api from '../../Api';
import AuthContext from '../Auth/authContext';
import ProtectedRoute from '../Auth/ProtectedRoute';

const Posts = () => {

    const[posts, getPosts]=useState([]);
    const [filterCriteria, setFilterCriteria] = useState({});
    const { currUser } = useContext(AuthContext);
    // console.log("rendering posts page, ", currUser);

//     //Retreve Post
//     const retrievePosts =async () =>{
//     const response = await api.get("/post");
//     return response.data;
//   };

    //effect to filter posts based on search criteria
    useEffect(()=> {
        const setposts = async (criteria) =>{
            //remove empty strings from criteria, which would otherwise throw server error
            // const cleanedCriteria = {};
            // for (const property in criteria) {
            //     if (criteria[property] != "") {
            //     cleanedCriteria[property] = criteria[property];
            //     }
            // }
        //   const res = await getAllPost(cleanedCriteria);
            const res = await Api.setposts(criteria);
            // console.log(res);
            // console.log(typeof(res));
            getPosts(res);
        };
    
        setposts(filterCriteria);
        // console.log(filterCriteria);
        return () =>{};
    }, [filterCriteria]);

    const addFilterCriteria = (formData) => {
      setFilterCriteria(formData);
    //   console.log(formData);
    };


    return (
    <>
    {currUser.username ? (
    <div className="bg-gray-100">
            <Header
            title="Currently Recruiting"
            category="posts"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae."
            />
        <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-20">
            <CircleSVG />
            <FilterForm addFilterCriteria={addFilterCriteria} />
            <div className="relative grid gap-5 grid-cols-1 sm:grid-cols-2">
              {posts.map((j) => (
                <PostCard post={j} key={uuid()} />
            ))}
            </div>
        </div>
    </div>
    ) : (
        <ProtectedRoute />
        )}
    </>  
    );
};

export default Posts;
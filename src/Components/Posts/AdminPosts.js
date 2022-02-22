import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header';
import { v4 as uuid } from 'uuid';
import Api from '../../Api';
import AuthContext from '../Auth/authContext';
import ProtectedRoute from '../Auth/ProtectedRoute';
import { Spinner } from 'phosphor-react';
import AdminPostCard from './AdminPostCard';


const AdminPosts = () => {

    const[posts, getPosts]=useState([]);
    const [filterCriteria, setFilterCriteria] = useState({});
    const { currUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [hasNoMatch, setHasNoMatch] = useState(false);
    const [errorMsgs, setErrorMsgs] = useState([]);
    // console.log("rendering posts page, ", currUser);


    //effect to filter posts based on search criteria
    useEffect(()=> {
        const setposts = async () =>{
        try {
          setErrorMsgs([]);  
          setIsLoading(true);
          setHasNoMatch(false);
            //remove empty strings from criteria, which would otherwise throw server error
            // const cleanedCriteria = {};
            // for (const property in criteria) {
            //   if (criteria[property] != "") {
            //     cleanedCriteria[property] = criteria[property];
            //   }
            // }
            const res = await Api.setposts();
            // if (res.length === 0) {
            //   setHasNoMatch(true);
            // }
            // console.log(res);
            // console.log(typeof(res));
            getPosts(res);
            setIsLoading(false);
        } catch (e) {
          setErrorMsgs(e);
          setIsLoading(false);
          }
        };
    
        setposts();
        // console.log(filterCriteria);
        return () =>{};
    }, []);

    // const addFilterCriteria = (formData) => {
    //   setFilterCriteria(formData);
    // //   console.log(formData);
    // };


    return (
    <>
    {currUser.username ? (
    <div className="bg-gray-100">
            <Header
            title="All Transfer Request"
            category="posts"
            description="If you want to see profile ditails. Click username"
            />
        <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-20">
            <div className="relative grid gap-5 grid-cols-1 sm:grid-cols-2">
              {posts.map((j) => (
                <AdminPostCard post={j} key={uuid()} />
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

export default AdminPosts;
import React, { useContext, useEffect, useState } from 'react';
import PostCard from './PostCard';
import Header from '../Header';
import FilterForm from './FilterForm';
import { v4 as uuid } from 'uuid';
import Api from '../../Api';
import AuthContext from '../Auth/authContext';
import ProtectedRoute from '../Auth/ProtectedRoute';
import { Spinner } from 'phosphor-react';


const Posts = () => {

    const[posts, getPosts]=useState([]);
    const [filterCriteria, setFilterCriteria] = useState({});
    const { currUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [hasNoMatch, setHasNoMatch] = useState(false);
    const [errorMsgs, setErrorMsgs] = useState([]);
    // console.log("rendering posts page, ", currUser);


    //effect to filter posts based on search criteria
    useEffect(()=> {
        const setposts = async (criteria) =>{
        try {
          setErrorMsgs([]);  
          setIsLoading(true);
          setHasNoMatch(false);
            //remove empty strings from criteria, which would otherwise throw server error
            const cleanedCriteria = {};
            for (const property in criteria) {
              if (criteria[property] != "") {
                cleanedCriteria[property] = criteria[property];
              }
            }
            const res = await Api.setposts(cleanedCriteria);
            if (res.length === 0) {
              setHasNoMatch(true);
            }
            // console.log(res);
            // console.log(typeof(res));
            getPosts(res);
            setIsLoading(false);
        } catch (e) {
          setErrorMsgs(e);
          setIsLoading(false);
          }
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
            title="All Transfer Request"
            category="posts"
            description="Browse through all listed posts below. See something you like?"
            />
        <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-20">
            <FilterForm addFilterCriteria={addFilterCriteria} />
            {isLoading && (
              <div className="font-xl font-mono text-center">
                <Spinner />
              </div>
            )}
            {hasNoMatch && (
              <div className="text-center font-mono">
                Oops! Your search didn't return any matches.
              </div>
            )}
            {errorMsgs.length > 0 && (
              <div className="text-center font-mono text-red-400 pb-10">
                Ooops, you entered an invalid search term! Try again.{" "}
              </div>
            )}
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
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Api from '../../Api';
import DeleteButton from '../Posts/DeleteButton';


const AdminUserCard = ({user}) => {   
  const history = useHistory(); 

  const handleClick = async () => {
    const id = user.id;
    try {
    await Api.deleteuser(id);
    console.log("wdaaaa");
    history.push('/adminhome');
    } catch (err) {
        console.log(`error: ${err.message}`);
    }
  }

  return (
    <div
    className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
    >
      <div className="p-5">
        <p className="mb-2 font-bold font-mono">{user.designation}</p>
        <p className="text-sm leading-5 text-gray-900 italic">
            username:{" "}
          <span className="font-normal not-italic">{user.username}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            firstname:{" "}
          <span className="font-normal not-italic">{user.firstname}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            lastname:{" "}
          <span className="font-normal not-italic">{user.lastname}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            email:{" "}
          <span className="font-normal not-italic">{user.email}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            phone:{" "}
          <span className="font-normal not-italic">{user.phone}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            designation:{" "}
          <span className="font-normal not-italic">{user.designation}</span>
        </p>
        <div className="flex justify-center pt-4">
        <DeleteButton handleClick={handleClick}/>
        </div>
      </div>
      <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-red-accent-400 group-hover:scale-x-100" />
    </div>
  );
};

export default AdminUserCard;
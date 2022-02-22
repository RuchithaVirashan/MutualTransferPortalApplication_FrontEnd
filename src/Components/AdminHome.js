import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AuthContext from "./Auth/authContext";
import ProtectedRoute from "./Auth/ProtectedRoute";

const AdminHome = () => {
    const { currUser } = useContext(AuthContext);
    const history = useHistory();
    const handleClick1 = () => {
      history.push(`/adminpost`);
    };
    const handleClick2 = () => {
      history.push(`/missing`);
    };
    return (
      <>
        {currUser.username  ? (
          <>
          
          <AdminHeader/>
          <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-20">
            <div className="relative grid gap-5 grid-cols-1 sm:grid-cols-2">
          <div
            onClick={handleClick1}
            className="cursor-pointer flex flex-col justify-between overflow-hidden text-center transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
          >
            <div className="p-5">
              <p className="mb-2 font-bold font-mono">View All Transfer Requests</p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-red-accent-400 group-hover:scale-x-100" />
          </div>
          <div
            onClick={handleClick2}
            className="cursor-pointer flex flex-col justify-between overflow-hidden text-center transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
          >
            <div className="p-5">
              <p className="mb-2 font-bold font-mono">fchhchf</p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-red-accent-400 group-hover:scale-x-100" />
          </div>
          </div>
          </div>
          
        </>
        ) : (
          <ProtectedRoute />
        )}
      </>
    );
  };
  
  export default AdminHome;
import { useContext } from "react";
import AuthContext from "./Auth/authContext";
import ProtectedRoute from "./Auth/ProtectedRoute";

const AdminHome = () => {
    const { currUser } = useContext(AuthContext);
    return (
      <>
        {currUser.username  ? (
          <>
          <div>
              <p>this is the admin dashboadrd</p>
          </div>
        </>
        ) : (
          <ProtectedRoute />
        )}
      </>
    );
  };
  
  export default AdminHome;
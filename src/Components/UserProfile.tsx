import { useLocation, Link } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import { getCookie } from "../Services/CookiesHelper";


function decode(cookie: string | undefined){
    if (typeof cookie === 'string'){
        const token = jwt_decode(String(cookie))
        const json = JSON.parse(JSON.stringify(token))
        return json
    }else{
        return ""
    }
}


const UserProfile: React.FC = () => {
    var userdata = decode(getCookie('token'))
  return (
    <div>
      <div>
        <div>
          <strong>Id:</strong> {userdata.datos.id}{" "}
        </div>
        <div>
          <strong>Name:</strong> {userdata.datos.name}{" "}
        </div>
      </div>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default UserProfile;
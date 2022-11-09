import jwt_decode from 'jwt-decode'
import { Nav } from 'react-bootstrap'
import { getCookie } from '../Services/CookiesHelper'


function decode(cookie: string | undefined){
    if (typeof cookie === 'string'){
        const token = jwt_decode(String(cookie))
        const json = JSON.parse(JSON.stringify(token))
        return json.datos.name
    }else{
        return ""
    }
}
const User: React.FC = () => {
    console.log(getCookie('token'))
    return(
        <>
        { typeof getCookie('token') === 'undefined'?
            <p></p>
            :
            <Nav.Link href="/Home">{decode(getCookie('token'))}</Nav.Link>
        }
        </>
)}

export default User;
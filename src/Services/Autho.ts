import jwt_decode from 'jwt-decode'


export function decode(cookie: string | undefined){
    if (typeof cookie === 'string'){
        const token = jwt_decode(String(cookie))
        const json = JSON.parse(JSON.stringify(token))
        return json
    }else{
        return ""
    }
}
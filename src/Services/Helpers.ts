import jwtDecode from 'jwt-decode'
import { getCookie, setCookie } from './CookiesHelper'

export const setJwtToken = (token: string, domain?: string) => (
    setCookie('nds-jwt', token, domain)
)
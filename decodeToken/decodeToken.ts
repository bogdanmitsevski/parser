import jwtDecode from 'jwt-decode';

function decodeToken(token: any) {
    try {
        return jwtDecode(token);
    }
    catch (e) {
        return e;
    }
}

export default decodeToken;
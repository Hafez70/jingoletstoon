import {useDispatch, useSelector} from 'react-redux';
import {cleanUser, setToken, setUser} from "../../../store/userSlice";
import {useState} from "react";
import useAxios from "../../../hooks/useAxios";
import useNotificationStore from "../../../hooks/useNotificationStore";

const useMock ={Id : 1,name :'hafez'}
const loginResponseMock ={user : useMock , token :'123456'}
const RegisterResponseMock =loginResponseMock

const useAuth = () => {
    const {addNotification} = useNotificationStore()
    const {user, token} = useSelector((state) => {
        return state.userInfo;
    });

    const dispatch = useDispatch();
    const {post, get} = useAxios();

    const [isLoading, setIsLoading] = useState(false);

    const handleUserResponse = (data) => {
        const {token, user} = data;
        dispatch(setToken(token));
        return user;
    }

    const getUser = async () => {
        console.log("getUser");
        let user = null;
        if (token && token.length > 0) {
            setIsLoading(true)
            //user = await get('/users/profile');
            user = useMock;//todo : change Mock
            setIsLoading(false)
            if(user.unAuthorize === true){
                logOut();
                return null
            }
        }
        dispatch(setUser(user));
        return user;
    };

    const login = async (loginCredentialsDTO) => {
        setIsLoading(true)
        let user = null;
        //const response = await post('/users/login', loginCredentialsDTO);
        let response = loginResponseMock;//todo : change Mock
        if (response !== null) {
            user = await handleUserResponse(response);
            dispatch(setUser(user));
        }
        setIsLoading(false)
        return user;
    };

    const registerUser = async (registerCredentialsDTO) => {
        setIsLoading(true)
        let user = null;
        //const response = await post('/users/register', registerCredentialsDTO , { headers: { 'Content-Type': 'multipart/form-data' } });
        let response = RegisterResponseMock;//todo : change Mock
        if (response !== null) {
            user = await handleUserResponse(response);
            dispatch(setUser(user));
            addNotification({
                type: 'success',
                title: 'done',
                message: 'You have registared successfully'
            })
        }
        setIsLoading(false)
        return user;
    };

    const logOut = async () => {
        dispatch(cleanUser());
        //window.location.assign(window.location.origin);
    };

    return {user, token, login, getUser, registerUser, logOut, isLoading};
};
export default useAuth;

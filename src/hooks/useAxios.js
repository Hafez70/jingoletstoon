import { axios } from 'lib/axios';
import useNotificationStore from "./useNotificationStore";

const useAxios = () => {
    const {addNotification} = useNotificationStore();
    const get = async  (url) => {
        return await axios.get(url);
    };

    const post = async (url,data) => {
        let result = await axios.post(url,data);
        if(result.status === 'Failed'){
            if(result.validatorError){
                result.errors.map(val =>{
                    addNotification({type : 'error', title:val.param, message :val.msg})
                })
            }
            else{

            }
            return null;
        }
        else{
            return result;
        }

    };

    return { get, post };
};
export default useAxios;

import { useDispatch, useSelector } from 'react-redux';
import { add, dismiss } from 'store/notificationSlice';

const useNotificationStore = () => {
    
    const { notifications } = useSelector((state) => {
        return state.notification
    });

    const dispatch = useDispatch();

    const addNotification = (notification) => {
        dispatch(add(notification));
    };

    const dismissNotification = (id) => {
        dispatch(dismiss(id));
    };

     return { notifications , addNotification , dismissNotification };
};
export default useNotificationStore
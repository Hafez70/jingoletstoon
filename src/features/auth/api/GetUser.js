import { useAxios } from 'hooks/useAxios';

export const GetUser = () => {
    const { get } = useAxios();
    return get('/auth/me');
};

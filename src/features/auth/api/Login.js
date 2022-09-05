import { useAxios } from '../../../hooks/useAxios';

export const LoginWithEmailAndPassword = (loginCredentialsDTO) => {
    const { post } = useAxios();
    return post('/auth/login', loginCredentialsDTO);
};

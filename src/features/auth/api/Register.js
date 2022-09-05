import { useAxios } from '../../../hooks/useAxios';

export const RegisterWithEmailAndPassword = (registerCredentialsDTO) => {
    const { post } = useAxios();
    return post('/auth/register', registerCredentialsDTO);
};

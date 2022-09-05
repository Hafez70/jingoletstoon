import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import {LandingBackground} from "../../../components/landingBackground";

export const Login = () => {
    const navigate = useNavigate();

    return (
        <LandingBackground className={'justify-center items-center'}>
            <LoginForm onSuccess={() => {navigate(`/`)}} />
        </LandingBackground>
    );
};

import { useNavigate  } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';
import {LandingBackground} from "../../../components/landingBackground";

export const Register = () => {
    const navigate = useNavigate();

    return (
        <LandingBackground className={'justify-center items-center'}>
            <RegisterForm onSuccess={() => navigate('/')} />
        </LandingBackground>
    );
};

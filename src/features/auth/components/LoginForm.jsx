import {useForm} from "react-hook-form";
import {Button, Checkbox, Input} from "@chakra-ui/react";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigate, useParams} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useEffect} from "react";
import useCustomTranslate from "../../../hooks/useCustomTranslate";
import {useTranslation} from "react-i18next";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required('Password is mendatory').min(8, 'Password must be at 8 char long'),
}).required();

const LoginForm = ({onSuccess}) => {
    const navigator = useNavigate();
    const {login, isLoading} = useAuth();
    const {t} = useTranslation('shared')
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});

    const handleLogin = async (values) => {
        let data= {...values}
        let result = await login(data);
        if(result !== null){
            onSuccess();
        }
    };

    const hanldeRegister = async () => {
        navigator(`/register`)
    };

    return (
        <form
            className={'flex flex-col gap-[22px]'}
            onSubmit={handleSubmit(handleLogin)}>
            <span className={'text-center text-white font-bold text-4xl'}>{t('login')}</span>
            <Input
                variant="unstyled"
                placeholder={t('email')}
                className={'twc-input-transparent mt-5'}
                {...register("email")} />
            {errors.email && <span
                className={'text-red-400 flex items-center'}>
                {errors.email.message}</span>}
            <Input
                variant="unstyled"
                placeholder={t('password')}
                className={'twc-input-transparent'}
                type="password" {...register("password")} />
            {errors.password && <span
                className={'text-red-400 flex items-center'}>
                {errors.password.message}</span>}
            <div className={'flex flex-row justify-between align-baseline'}>
                <Checkbox
                    defaultChecked={true}
                    iconSize='25'
                    size='lg' className={' twc-checkbox-transparent font-roboto-thin'}
                    {...register("remember")}/>
                <span className={'text-white flex items-center'}>{t('rememberMe')}</span>
                <Button isLoading={isLoading} type="submit"
                        className="bg-btnEnter w-[117px] h-[33px] rounded-md text-white">{t('login')}</Button>
            </div>
            <div className={'border-[1px] border-white w-full'} />
            <div className={'flex flex-row justify-between align-baseline'}>
                <span className={'text-white flex items-center'}>{t('noAccount')}</span>
                <Button isLoading={isLoading} onClick={hanldeRegister}
                        className="bg-btn-accent w-[90px] h-[33px] rounded-md text-white">{t('signUp')}</Button>
            </div>
        </form>
    );
};
export default LoginForm;
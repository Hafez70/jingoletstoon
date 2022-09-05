import * as React from 'react';
import {useState} from "react";
import useAuth from "../hooks/useAuth";
import {Button, Checkbox, Input} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useNavigate, useParams} from "react-router-dom";
import * as yup from "yup";
import useCustomTranslate from "../../../hooks/useCustomTranslate";
import {useTranslation} from "react-i18next";

const schema = yup.object({
    fullName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required('Password is mendatory').min(8, 'Password must be at 8 char long'),
    confirmPassword: yup.string().required('Retype Password here').min(8, 'password does not match'),
}).required();

export const RegisterForm = ({ onSuccess }) => {
    const { registerUser, isLoading } = useAuth();
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});
    const {t} = useTranslation('shared')
    const navigate = useNavigate();
    const hanldeRegister = async (values) => {

        let data = {...values}
        var formData = new FormData();

        for (let key in data) {
            formData.append(key, data[key]);
        }
        let result = await registerUser(formData);
        if (result !== null) {
            onSuccess();
        }
    };

    const hanldeLogin = () => {
        navigate(`/login`)
    };

    return (
        <form
            className={'flex flex-col'}
            onSubmit={handleSubmit(hanldeRegister)}>
            <span className={'text-start text-white font-bold text-4xl'}>{t('information')}</span>
            <Input
                variant="unstyled"
                placeholder={t('name')}
                className={'twc-input-transparent mt-2 sm:mt-5'}
                {...register("fullName")} />
            {errors.fullName && <span
                className={'text-red-400 flex items-center'}>
                {errors.fullName.message}</span>}
            <Input
                variant="unstyled"
                placeholder={t('email')}
                className={'twc-input-transparent mt-2 sm:mt-3'}
                {...register("email")} />
            {errors.email && <span
                className={'text-red-400 flex items-center'}>
                {errors.email.message}</span>}
            <Input
                variant="unstyled"
                placeholder={t('phoneNumber')}
                className={'twc-input-transparent mt-2 sm:mt-3'}
                {...register("phoneNumber")} />
            {errors.phoneNumber && <span
                className={'text-red-400 flex items-center'}>
                {errors.phoneNumber.message}</span>}
            <Input
                variant="unstyled"
                placeholder={t('password')}
                className={'twc-input-transparent mt-2 sm:mt-3'}
                type="password" {...register("password")} />
            {errors.password && <span
                className={'text-red-400 flex items-center'}>
                {errors.password.message}</span>}
            <Input
                variant="unstyled"
                placeholder={t('repeatPassword')}
                className={'twc-input-transparent mt-2 sm:mt-3'}
                type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && <span
                className={'text-red-400 flex items-center'}>
                {errors.confirmPassword.message}</span>}
            <div className={'flex flex-row justify-between align-baseline mt-2 sm:mt-4'}>
                <Checkbox
                    defaultChecked={true}
                    iconSize='25'
                    size='lg' className={' twc-checkbox-transparent font-roboto-thin'}
                    {...register("remember")}/>
                <span className={'text-white flex items-center'}>{t('rememberMe')}</span>
                <Button isLoading={isLoading} type="submit"
                        className="bg-btnEnter w-[117px] h-[33px] rounded-md text-white">{t('register')}</Button>
            </div>
            <div className={'border-[1px] border-white w-full mt-2 sm:mt-3'}/>
            <div className={'flex flex-row justify-start align-baseline mt-2 sm:mt-3'}>
                <span className={'text-white flex items-center'}>{t('haveAccount')}</span>
                <Button isLoading={isLoading} onClick={hanldeLogin}
                        className="text-btn-accent w-[90px] h-[33px] rounded-md text-white">{t('login')}</Button>
            </div>
        </form>
    );
};

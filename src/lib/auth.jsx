import { initReactQueryAuth } from "react-query-auth";

import {
  LoginWithEmailAndPassword,
  GetUser,
  RegisterWithEmailAndPassword,
} from "features/auth";
import storage from "utils/storage";
import { Spinner } from "@chakra-ui/react";
import useNotificationStore from "hooks/useNotificationStore";

//response : { jwt: string; user: user;}
//user = {id,email, name,phoneNumber,avatar}

async function handleUserResponse(data) {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    const data = await GetUser();
    return data;
  }
  return null;
}
//LoginCredentialsDTO = {email,password}
async function loginFn(loginCredentialsDTO) {
  const response = await LoginWithEmailAndPassword(loginCredentialsDTO);
  const user = await handleUserResponse(response);
  return user;
}
//registerCredentialsDTO = {email, name,phoneNumber,password,avatar}
async function registerFn(registerCredentialsDTO) {
  const response = await RegisterWithEmailAndPassword(registerCredentialsDTO);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin);
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  },
  ErrorComponent(error) {
    const { addNotification } = useNotificationStore();
    addNotification({
      type: "error",
      title: "Authentication",
      message: error
    });
    return <></>;
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth(authConfig);

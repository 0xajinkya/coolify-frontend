"use client";

import { API_URL } from "@/constants";
import { getFromLocalStorage, setToLocalStorage } from "@/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { IUser } from "./global";

interface IFormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export type TSignupKeys = "name" | "email" | "password" | "confirmPassword";

interface ISignup {
  formState: IFormState | {};
  handleChange: (key: TSignupKeys, value: string) => void;
  submitForm: () => Promise<void>;
  login: () => Promise<void>;
}

const initialValue = {
  formState: {},
  handleChange: () => {},
  submitForm: async () => {},
  login: async () => {},
};

export const SignupContext = createContext<ISignup>(initialValue);

export const SignupProvider = ({
  children,
  user,
  setUser,
  setMode,
}: {
  children: ReactNode;
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  setMode: Dispatch<SetStateAction<"signup" | "not-signup">>;
}) => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    key: "name" | "email" | "password" | "confirmPassword",
    value: string
  ) => {
    setFormState((st) => ({ ...st, [key]: value }));
  };

  const submitForm = async () => {
    try {
      if (formState.confirmPassword !== formState.password) {
        enqueueSnackbar({ message: "Password mismatch!", variant: "error" });
        return;
      }
      const res = await axios.post(API_URL + "/auth/signup", {
        ...formState,
      });
      console.log(res);

      enqueueSnackbar({
        message: "User signup successful!",
        variant: "success",
      });

      setToLocalStorage("accessToken", res.data.content.meta.access_token);
      setMode("signup");
      setUser(res.data.content.data);
      return;
    } catch (error: any) {
      enqueueSnackbar({
        message:
          error.response.data && error.response.data.errors
            ? error.response.data.errors[0].message
            : error.response.data.message,
        variant: "error",
      });
    } finally {
      return;
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(API_URL + "/auth/signin", {
        ...formState,
      });
      console.log(res);

      enqueueSnackbar({
        message: "User logged in!!",
        variant: "success",
      });

      setToLocalStorage("accessToken", res.data.content.meta.access_token);
      setUser(res.data.content.data);
      setMode("not-signup");
      router.replace("/");
      return;
    } catch (error: any) {
      enqueueSnackbar({
        message:
          error.response.data && error.response.data.errors
            ? error.response.data.errors[0].message
            : error.response.data.message,
        variant: "error",
      });
    } finally {
      return;
    }
  };

  useEffect(() => {
    const getUser = () => {
      if (getFromLocalStorage("accessToken")) {
        router.replace("/");
      }
    };
    getUser();
  }, []);

  return (
    <SignupContext.Provider
      value={{
        formState,
        handleChange,
        submitForm,
        login,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};

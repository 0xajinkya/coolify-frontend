import { API_URL } from "@/constants";
import { getFromLocalStorage, setToLocalStorage } from "@/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { ReactNode, createContext, useEffect, useState } from "react";

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
  open: boolean;
  closeModal: () => void;
  resendOtp: () => Promise<void>;
  submitOtp: (val: string) => Promise<void>;
  login: () => Promise<void>
}

const initialValue = {
  formState: {},
  handleChange: () => {},
  submitForm: async () => {},
  open: false,
  closeModal: () => {},
  resendOtp: async () => {},
  submitOtp: async (val: string) => {},
  login: async() => {}
};

export const SignupContext = createContext<ISignup>(initialValue);

export const SignupProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [open, setOpen] = useState(false);

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
      if (!res.data.content.data.verified) {
        setOpen(true);
        return;
      }
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

  const login = async() => {
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
      if (res.data.content.data.verified === false) {
        setOpen(true);
        resendOtp();
        return;
      } 
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
  }

  const resendOtp = async () => {
    try {
      const res = await axios.post(
        API_URL + "/auth/resend",
        {},
        {
          headers: {
            Authorization: getFromLocalStorage("accessToken"),
          },
        }
      );
      enqueueSnackbar({
        message: "OTP sent on your email!",
        variant: "success",
      });
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

  const submitOtp = async (val: string) => {
    try {
      const res = await axios.post(
        API_URL + "/auth/verify",
        {
          otp: val,
        },
        {
          headers: {
            Authorization: getFromLocalStorage("accessToken"),
          },
        }
      );
      console.log(res);
      enqueueSnackbar({
        message: "Email verified successfully!",
        variant: "success",
      });
      setOpen(false);
      router.replace("/");
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

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getUser = () => {
      if(getFromLocalStorage("accessToken")){
        router.replace("/");
      }
    };
    getUser();
  }, [])

  return (
    <SignupContext.Provider
      value={{
        formState,
        handleChange,
        submitForm,
        open,
        closeModal,
        resendOtp,
        submitOtp,
        login
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};

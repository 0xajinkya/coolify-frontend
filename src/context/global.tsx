"use client";

import { API_URL } from "@/constants";
import {
  clearLocalStorage,
  getFromLocalStorage,
  setToLocalStorage,
} from "@/utils";
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

export interface IUser {
  id: string;
  name?: string;
  email: string;
  verified: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface IGlobal {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  resendOtp: () => Promise<void>;
  submitOtp: (val: string) => Promise<void>;
  setMode: Dispatch<SetStateAction<"signup" | "not-signup">>;
  logOut: () => void;
  open: boolean;
}

export const GlobalContext = createContext<IGlobal>({
  user: null,
  setUser: () => {},
  resendOtp: async () => {},
  submitOtp: async (val: string) => {},
  open: false,
  logOut: () => {},
  setMode: () => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [mode, setMode] = useState<"signup" | "not-signup">("not-signup");
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
      closeModal();
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

  const logOut = () => {
    clearLocalStorage();
    setUser(null);
    enqueueSnackbar({ message: "You just logged out!", variant: "error" });
    router.replace("/");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const authT = getFromLocalStorage("accessToken");
        if (user !== null) {
          if (user.verified === false) {
            setOpen(true);
            mode !== "signup" && (await resendOtp());
          }
          return;
        } else if (user === null && !!authT) {
          const res = await axios.get(API_URL + "/auth/me", {
            headers: {
              Authorization: authT,
            },
          });
          if (res) {
            setUser(res.data.content.data);
          }
        } else {
        }
      } catch (error: any) {
        console.log(error);
        enqueueSnackbar({
          message:
            error.response && error.response.data && error.response.data.errors
              ? error.response.data.errors[0].message
              : error.response && error.response.data && error.response.data. message ? error.response.data.message : error?.message,
          variant: "error",
        });
      }
    };
    getUser();
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        resendOtp,
        submitOtp,
        open,
        setMode,
        logOut,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

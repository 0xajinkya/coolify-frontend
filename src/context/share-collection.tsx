"use client";

import { enqueueSnackbar } from "notistack";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { ICollection, IMeta } from "./collection";
import axios from "axios";
import { API_URL } from "@/constants";
import { getFromLocalStorage } from "@/utils";
import { IPost } from "./single-collection";
import { useRouter } from "next/navigation";

interface IShareCollection {
  collection: ICollection | {};
  posts: IPost[];
  meta: IMeta;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  loading: boolean;
}

export const ShareCollectionContext = createContext<IShareCollection>({
  collection: {},
  posts: [],
  meta: {
    page: 0,
    pages: 0,
    total: 0,
  },
  page: 1,
  setPage: () => {},
  loading: false,
});

export const ShareCollectionProvider = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  const router = useRouter();
  const [posts, setPosts] = useState<IPost[] | []>([]);
  const [meta, setMeta] = useState<IMeta>({
    total: 0,
    page: 0,
    pages: 0,
  });
  const [page, setPage] = useState(1);
  const [collection, setCollection] = useState<ICollection | {}>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        setLoading(true);
        const accessToken = getFromLocalStorage("accessToken");
        if (!accessToken) {
          enqueueSnackbar({ message: "Please login first!", variant: "error" });
          router.replace("/log-in");
          return;
        }
        const res = await axios.get(
          API_URL + "/collection/share/" + id + "?page=" + page,
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
        console.log(res.data.content.data);
        setPosts(() => res.data.content.data.posts);
        setCollection(() => res.data.content.data.collection);
        setMeta(() => res.data.content.meta);
      } catch (error) {
        enqueueSnackbar({ message: "Cannot fetch posts!", variant: "error" });
      } finally {
        setLoading(false);
      }
    };
    fetchCollection();
  }, [page]);

  return (
    <ShareCollectionContext.Provider
      value={{
        posts,
        meta,
        page,
        setPage,
        collection,
        loading,
      }}
    >
      {children}
    </ShareCollectionContext.Provider>
  );
};

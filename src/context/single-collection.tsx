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
import { fetchCollectionApiCall, getFromLocalStorage, togglePostApiCall } from "@/utils";

export interface IPost {
  id: string;
  postId: string;
  tag: "linkedin" | "twitter"
}

export interface ISingleCollection {
  collection: ICollection | {};
  posts: IPost[];
  meta: IMeta;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  togglePost: (id: string) => Promise<void>;
  loading: boolean;
}

export const SingleCollectionContext = createContext<ISingleCollection>({
  collection: {},
  posts: [],
  meta: {
    page: 0,
    pages: 0,
    total: 0,
  },
  page: 1,
  setPage: () => {},
  togglePost: async () => {},
  loading: false,
});

export const SingleCollectionProvider = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  const [posts, setPosts] = useState<IPost[] | []>([]);
  const [meta, setMeta] = useState<IMeta>({
    total: 0,
    page: 0,
    pages: 0,
  });
  const [page, setPage] = useState(1);
  const [collection, setCollection] = useState<ICollection | {}>({});
  const [loading, setLoading] = useState(true);

  const togglePost = async (id: string) => {
    try {
      setLoading(true);
      const accessToken = getFromLocalStorage("accessToken");

      const res = await togglePostApiCall(
        (collection as ICollection).id,
        id,
        accessToken as string
      );
      
      setPosts((p) => p.filter((po) => po.postId !== id));
      setMeta((m) => ({ ...m, total: meta.total - 1 || 0 }));
      enqueueSnackbar({
        message: "Removed from collection!",
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar({
        message: "Unable to delete the post!",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        setLoading(true);
        const accessToken = getFromLocalStorage("accessToken");
        // API call
        const res = await fetchCollectionApiCall(id, page, accessToken as string);
        console.log(res.content.data);
        setPosts(() => res.content.data.posts);
        setCollection(() => res.content.data.collection);
        setMeta(() => res.content.meta);
      } catch (error) {
        enqueueSnackbar({ message: "Cannot fetch posts!", variant: "error" });
      } finally {
        setLoading(false);
      }
    };
    fetchCollection();
  }, [page]);

  return (
    <SingleCollectionContext.Provider
      value={{
        posts,
        meta,
        page,
        setPage,
        collection,
        togglePost,
        loading,
      }}
    >
      {children}
    </SingleCollectionContext.Provider>
  );
};

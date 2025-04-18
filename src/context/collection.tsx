"use client";

import { API_URL } from "@/constants";
import { getFromLocalStorage } from "@/utils";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { ReactNode, createContext, useEffect, useState } from "react";

export interface ICollection {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  permission: "private" | "public" | "unlisted",
  owner?: {
    name: string,
    id: string
  }
}

export interface IMeta {
  page: number;
  pages: number;
  total: number;
}

export interface IShareCollection {
  name: string,
  id: string,
  description: string
}

interface ICollectionCtx {
  collections: ICollection[] | [];
  meta: IMeta | {};
  deleteCollection: (id: string) => Promise<void>;
  loading: boolean;
  handleCollectionForm: (key: "name" | "description" | "permission", val: string) => void;
  createCollection: () => Promise<void>;
  createModal: boolean;
  toggleModal: () => void;
  shareCollection: IShareCollection | null;
  openShareCollectionModal: (name: string, id: string, description: string) => void;
  closeShareCollectionModal: () => void
}

export const CollectionContext = createContext<ICollectionCtx>({
  collections: [],
  meta: {},
  deleteCollection: async () => {},
  loading: false,
  handleCollectionForm: () => {},
  createCollection: async () => {},
  createModal: false,
  toggleModal: () => {},
  shareCollection: null,
  openShareCollectionModal: (name: string, id: string, description: string) => {},
  closeShareCollectionModal: () => {}
});

export const CollectionProvider = ({ children }: { children: ReactNode }) => {
  const [shareCollection, setShareCollection] = useState<IShareCollection | null>(null);
  const [createModal, setCreateModal] = useState(false);
  const [collections, setCollections] = useState<ICollection[] | []>([]);
  const [collectionForm, setCollectionForm] = useState({
    name: "",
    description: "",
    permission: "private"
  });
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState<IMeta | {}>({});

  const toggleModal = () => setCreateModal((c) => !c);

  const deleteCollection = async (id: string) => {
    try {
      setLoading(true);
      const accessToken = getFromLocalStorage("accessToken");
      const res = await axios.delete(`${API_URL}/collection/${id}`, {
        headers: {
          Authorization: accessToken,
        },
      });
      setCollections((c) => c.filter((cl) => cl.id !== id));
      enqueueSnackbar({ message: res.data.message, variant: "success" });
    } catch (error: any) {
      enqueueSnackbar({
        message:
          error?.message ?? "Cannot delete this collection, please try again!",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCollectionForm = (key: "name" | "description" | "permission", val: string) => {
    setCollectionForm((f) => ({ ...f, [key]: val }));
  };

  const createCollection = async () => {
    console.log(collectionForm)
    const accessToken = getFromLocalStorage("accessToken");
    try {
      setLoading(true);
      const res = await axios.post(
        `${API_URL}/collection`,
        {
          ...collectionForm,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      console.log(res.data.content.data);
      setCollections((c) => [res.data.content.data, ...c]);
      setCreateModal(false);
      setCollectionForm({ name: "", description: "", permission: "private"});
      enqueueSnackbar({
        message: "Collection created successfully!",
        variant: "success",
      });
    } catch (error: any) {
      enqueueSnackbar({
        message:
          Array.isArray(error?.response?.data?.errors) ? error?.response?.data?.errors.message : "Cannot delete this collection, please try again!",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const closeShareCollectionModal = () => setShareCollection(null);
  const openShareCollectionModal = (name: string, id: string, description: string) => setShareCollection({name, id, description})

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoading(true);
        const accessToken = getFromLocalStorage("accessToken");
        const res = await axios.get(`${API_URL}/collection/`, {
          headers: {
            Authorization: accessToken,
          },
        });

        setCollections(res.data.content.data);
        setMeta(res.data.content.meta);
      } catch (error) {
        console.log(error);
        // enqueueSnackbar({})
      } finally {
        setLoading(false);
      }
    };
    fetchCollections();
  }, []);

  return (
    <CollectionContext.Provider
      value={{
        collections,
        meta,
        deleteCollection,
        loading,
        handleCollectionForm,
        createCollection,
        toggleModal,
        createModal,
        shareCollection,
        openShareCollectionModal,
        closeShareCollectionModal
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

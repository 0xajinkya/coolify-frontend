import { API_URL } from "@/constants";

export const togglePostApiCall = async (
  collectionId: string,
  postId: string,
  token: string
) => {
  const url = `${API_URL}/collection/toggle/${collectionId}?postId=${postId}`;
  const options = {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to toggle post");
  }
  return response.json();
};

export const fetchCollectionApiCall = async (
  collectionId: string,
  page: number,
  token: string
) => {
  const url = `${API_URL}/collection/${collectionId}?page=${page}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });
  if (!response.ok) {
    const res = await response.json();
    console.log(res);
    throw new Error("Failed to fetch collection");
  }
  return response.json();
};

export const fetchCollectionMeta = async (collectionId: string) => {
  const url = `${API_URL}/collection/meta/${collectionId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch collection");
  }
  return response.json();
};

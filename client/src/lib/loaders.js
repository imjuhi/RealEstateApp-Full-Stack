import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};
export const listPageLoader = async ({ request, params }) => {
  const url = new URL(request.url);
  const query = url.search;
  console.log("Full URL:", request.url); // Log the full URL

  console.log("Frontend query:", query);
  const res = await apiRequest("/posts" + query);
  return res.data;
};

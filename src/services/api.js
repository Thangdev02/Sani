import axios from "axios"

const API_BASE_URL = "https://ads.eposh.io.vn/api/v1"



export const loginLocal = async (username, password) => {
    // simple client-side check
    if (username === "admin" && password === "admin") {
      return { ok: true, user: { username: "admin", role: "admin" } };
    }
    return { ok: false, message: "Invalid credentials" };
  };

  
export const getProducts = async (pageNumber = 1, pageSize = 10, language = "vi") => {
    try {
      const res = await axios.get(`${API_BASE_URL}/products`, {
        params: {
          pageNumber,
          pageSize,
          language,
        },
      });
      console.log(res.data?.data?.items);
      
      return res.data?.data?.items || [];
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
export const getProductById = async (id) => {
    const res = await axios.get(`${API_BASE_URL}/products/${id}`)
    return res.data.data
  }

  export const createProduct = async (payload) => {
    const res = await axios.post(`${API_BASE_URL}/products/create`, payload);
    return res.data;
  };
  
  export const updateProduct = async (id, payload) => {
    const res = await axios.patch(`${API_BASE_URL}/products/update/${id}`, payload);
    return res.data;
  };
  
  export const deleteProduct = async (id) => {
    const res = await axios.delete(`${API_BASE_URL}/products/delete/${id}`);
    return res.data;
  };

  export const getPosts = async (pageNumber = 1, pageSize = 10, language = "vi") => {
    try {
      const res = await axios.get(`${API_BASE_URL}/posts`, {
        params: { pageNumber, pageSize, language },
      });
      // API trả về data.items
      return res.data?.data?.items || [];
    } catch (err) {
      console.error("Error fetching posts:", err);
      throw err;
    }
  };
  export const createPost = async (payload) => {
    const res = await axios.post(`${API_BASE_URL}/posts/create`, payload);
    return res.data;
  };
  
  export const updatePost = async (id, payload) => {
    const res = await axios.patch(`${API_BASE_URL}/posts/update/${id}`, payload);
    return res.data;
  };
  
  export const deletePost = async (id) => {
    const res = await axios.delete(`${API_BASE_URL}/posts/delete/${id}`);
    return res.data;
  };
  
  // ================== SECTIONS ==================
  export const getSections = async (postId, pageNumber = 1, pageSize = 20, language = "vi") => {
    try {
      const res = await axios.get(`${API_BASE_URL}/sections`, {
        params: { postId, pageNumber, pageSize, language },
      });
      return res.data?.data?.items || [];
    } catch (err) {
      console.error("Error fetching sections:", err);
      throw err;
    }
  };
  
  export const createSection = async (payload) => {
    const res = await axios.post(`${API_BASE_URL}/sections/create`, payload);
    return res.data;
  };
  
  export const updateSection = async (id, payload) => {
    const res = await axios.patch(`${API_BASE_URL}/sections/update/${id}`, payload);
    return res.data;
  };
  
  export const deleteSection = async (id) => {
    const res = await axios.delete(`${API_BASE_URL}/sections/delete/${id}`);
    return res.data;
  };
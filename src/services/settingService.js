// src/services/settingService.js
import axios from "axios";

const API_URL = "https://ads.eposh.io.vn/api/v1/settings/sliders";

// GET all sliders
export const getSliders = async () => {
  const res = await axios.get(API_URL);
  return res.data?.data || [];
};

// CREATE new slider
export const createSlider = async (payload) => {
  const res = await axios.post(API_URL, payload);
  return res.data;
};

// UPDATE slider
export const updateSlider = async (id, payload) => {
  const res = await axios.put(`${API_URL}/${id}`, payload);
  return res.data;
};

// DELETE slider
export const deleteSlider = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};

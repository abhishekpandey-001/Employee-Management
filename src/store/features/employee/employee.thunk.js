import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance";

//give employee/.. because employee is the name in employeeSlice
export const getEmployees = createAsyncThunk(
  "employee/getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("employee");
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);


//Writing the logic for the posting of the data, similarly, we will write for the deletion of the data...

export const postEmployee = createAsyncThunk(
  "employee/postEmployee",
  async (details, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post("employee", details);
      dispatch(getEmployees());
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);
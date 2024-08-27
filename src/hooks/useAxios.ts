import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, useCurrentToken } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Axios = axios.create({
  baseURL: "https://bike-rental-service-serverside.vercel.app/api",
});

const useAxios = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(useCurrentToken);

  useEffect(() => {
    Axios.interceptors.request.use((config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    Axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          dispatch(logout());
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [accessToken, navigate, dispatch]);
  return [Axios];
};

export default useAxios;

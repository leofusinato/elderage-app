import React, { useCallback, useEffect } from "react";
import { useAuth } from "../contexts/AuthProvider";
import * as localStorage from "../services/auth.storage";
import AuthRoutes from "./auth.routes";
import MainRoutes from "./main.routes";

const Routes: React.FC = () => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    (async () => {
      await loadStorageData();
    })();
  }, []);

  const loadStorageData = useCallback(async () => {
    const isAuth = await localStorage.clear();
    // const isAuth = await localStorage.isAuthenticated();
    // if (isAuth) {
    //   const authStorage = await localStorage.getAuth();
    //   setUser(authStorage);
    // }
  }, []);

  if (user) {
    return <MainRoutes />;
  }
  return <AuthRoutes />;
};

export default Routes;

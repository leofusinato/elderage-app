import React, { useCallback, useEffect } from "react";
import { useAuth } from "../contexts/AuthProvider";
import * as localStorage from "../services/auth.storage";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    (async () => {
      await loadStorageData();
    })();
  }, []);
  const loadStorageData = useCallback(async () => {
    // await localStorage.clear();
    const isAuth = await localStorage.isAuthenticated();
    if (isAuth) {
      const authStorage = await localStorage.getAuth();
      setUser(authStorage);
    }
  }, []);

  if (user) {
    return <AppRoutes />;
  }
  return <AuthRoutes />;
};

export default Routes;

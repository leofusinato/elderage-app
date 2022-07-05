import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthStorageData } from "../global/models/auth";

const AUTH_STORAGE_KEY = "@Elderage:auth";

const keysToClear = [AUTH_STORAGE_KEY];

export async function setAuth(auth: AuthStorageData): Promise<void> {
  const stringAuth = JSON.stringify(auth);
  await AsyncStorage.setItem(AUTH_STORAGE_KEY, stringAuth);
}

export async function getAuth(): Promise<AuthStorageData | null> {
  const auth = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
  if (!auth) {
    return null;
  }
  return JSON.parse(auth);
}

export async function isAuthenticated(): Promise<boolean> {
  const auth = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
  return !!auth;
}

export async function clear(): Promise<void> {
  keysToClear.map(async (key) => await AsyncStorage.removeItem(key));
}

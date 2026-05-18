import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "auth_token";

export const saveToken = async (token) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const getToken = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
};

export const removeToken = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};

/////////////////////////////////
const ROLE_KEY = "role_user";

export const saveRole = async (role) => {
  await AsyncStorage.setItem(ROLE_KEY, role);
}

export const getRole = async () => {
  return await AsyncStorage.getItem(ROLE_KEY);
}

export const removeRole = async () => {
  await AsyncStorage.removeItem(ROLE_KEY);
}

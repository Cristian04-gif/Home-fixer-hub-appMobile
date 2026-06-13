import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "auth_token";

export const saveToken = async (token) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const getToken = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
};


/////////////////////////////////
const ROLE_KEY = "role_user";

export const saveRole = async (role) => {
  await AsyncStorage.setItem(ROLE_KEY, role);
}

export const getRole = async () => {
  return await AsyncStorage.getItem(ROLE_KEY);
}

////////////////////////////////////////////////////

const USER_ID_KEY = "userId";

export const saveUserId = async (userId) => {
  await AsyncStorage.setItem(USER_ID_KEY, userId);
}

export const getUserId = async () => {
  return await AsyncStorage.getItem(USER_ID_KEY);
}

////////////////////////////////////////////////
const USER_DATA = "user_data";
export const saveUser = async (data) => {
  await AsyncStorage.setItem(USER_DATA, JSON.stringify(data));
}

export const getUser = async () => {
  const user = await AsyncStorage.getItem(USER_DATA);

  return user ? JSON.parse(user) : null;
}

////////////////////////////////////////
export const logout = async () => {

  await AsyncStorage.multiRemove([
    ROLE_KEY,
    USER_ID_KEY,
    TOKEN_KEY,
    USER_DATA
  ]);
};
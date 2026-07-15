import { createContext, useContext, useState, useEffect } from 'react';
import { getUser, getToken, getUserId, getRole, logout } from '../storage/AuthStorage';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        restoreSession();
    }, []);

    const restoreSession = async () => {
        try {
            const userStored = await getToken();
            if (userStored) {
                setUser(userStored);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const loginContext = async (userData) => {
        setUser(userData);
    };

    const logoutContext = async () => {
        await logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                loginContext,
                logoutContext
            }}
        >
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);
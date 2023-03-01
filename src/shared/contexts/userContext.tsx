import type { FC, ReactElement } from "react";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  getAuthToken,
  removeRefreshToken,
  setAuthToken as persistAuthToken,
  removeAuthToken,
  subscribeToAuthToken,
} from "../utils/api";
// import { otherApi } from "../api/otherApi";

interface UserProfile {
  role: "patient" | "doctor";
  role_id: string;
  user_id: string;
}

interface UserContextType {
  authToken: string | null;
  logout: () => void;
  setAuthToken: (token: string | null) => void;
  setUser: (user: UserProfile | null) => void;
  user: UserProfile | null;
}

const _authToken = getAuthToken();

export const UserContext = createContext<UserContextType>({
  authToken: _authToken ?? null,
  user: null,
  logout: () => Promise.resolve(),
  setAuthToken: () => Promise.resolve(),
  setUser: (user: UserProfile | null) => user,
});

export const UserContextProvider: FC<{ children: ReactElement }> = (props) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [authToken, _setAuthToken] = useState<string | null>(
    _authToken ?? null,
  );
  // const [isLoading, setIsLoading] = useState<boolean | null>(null);

  // const loadUser = useCallback(async () => {
  //   setIsLoading(true);

  //   return otherApi
  //     .getProfile()
  //     .then(({ data }) => {
  //       setUser({
  //         user_id: data.userId,
  //         role: data.role,
  //         role_id: data.profileId,
  //       });
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (authToken) {
  //     loadUser();
  //   }
  // }, [authToken, loadUser]);

  const setAuthToken = (token: string | null) => {
    _setAuthToken(token);

    if (token) {
      persistAuthToken(token);
    } else {
      removeAuthToken();
    }
  };

  const logout = useCallback(() => {
    removeRefreshToken();
    setAuthToken(null);
    setUser(null);
  }, []);

  // useEffect(() => {
  //   if (authToken) {
  //     loadUser();
  //   }
  // }, [authToken, loadUser]);

  useEffect(() => {
    subscribeToAuthToken((_token, newToken) => {
      setAuthToken(newToken ?? null);
    });
  }, []);

  const userContext = useMemo<UserContextType>(
    () => ({
      // isLoading,
      // loadUser,
      user,
      setUser,
      logout,
      authToken,
      setAuthToken,
    }),
    [user, logout, authToken],
  );

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

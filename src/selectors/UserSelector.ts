import { RootStateOrAny } from "react-redux";
import { createSelector } from "reselect";

const getUser = (state: RootStateOrAny) => state.user;

export const getUsername = createSelector(
  [getUser],
  (user) => {
    return user && user.login;
  }
);

export const getUserId = createSelector(
  [getUser],
  (user) => {
    return user?.id;
  }
);

export const isUserLoggedIn = createSelector(
  [getUser],
  (user) => {
    return !!user;
  }
);

export const getUserNavbarData = createSelector(
  [getUser],
  (user) => {
    return { userId: user?.id, username: user?.login }
  }
);

export const getUserData = createSelector(
  [getUser],
  (user) => {
    return user;
  }
);

export const getUserRole = createSelector(
  [getUser],
  (user) => {
    return user.role;
  }
);
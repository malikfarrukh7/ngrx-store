import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { authActions } from './auth-actions';

export type AuthState = {
  token: string | null;
  userId: number | null;
  error: string | null;
  isloading: boolean;

};

export const initialAuthState: AuthState = {
  token: null,
  userId: null,
  error: null,
  isloading: false,
}

export const authFeatures = createFeature({


    name: 'auth',
    reducer: createReducer(
      initialAuthState,
      on(authActions.loginSuccess, (state, { token})=>
      ({
        ...state,
        token,
      })),
      on(authActions.loginFailure, (state, {error}) => ({
        ...state,
        token:null,
        error
      })),

      on(authActions.login, (state) => ({
        ...state,
        isloading: true,
        error: null,
      })),

      on(authActions.register, (state) => ({
        ...state,
        isloading: true,
        error: null,
      })),
      on(authActions.registerSuccess,(state) => ({
        ...state,
        isloading: false,
      })),

      on(authActions.registerFailure, (state, {error}) =>({
        ...state,
        isloading: false,
        error
      })),

      on(authActions.logoutSuccess,(state) =>({
        ...state,
        userId: null,
        isLoading:false,
      })),
    ),

     extraSelectors: ({ selectToken }) => ({
    selectIsAuthenticated: createSelector(selectToken, (token) => !!token),
  }),



});

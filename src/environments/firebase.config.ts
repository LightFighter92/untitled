import {AuthMethods, AuthProviders} from "angularfire2";
/**
 * Created by dch61 on 14.02.2017.
 */
export const firebaseConfig ={
  apiKey: "AIzaSyAW-DQQklbq25AvsmLACSbderxEjm_drTA",
  authDomain: "stvtombola.firebaseapp.com",
  databaseURL: "https://stvtombola.firebaseio.com",
  storageBucket: "stvtombola.appspot.com",
  messagingSenderId: "167060322595"
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

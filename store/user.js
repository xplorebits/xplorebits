import { defineStore } from "pinia";
import isAuth from "./actions/user/isAuth";
import signin from "./actions/user/signin";
import signinwithrealm from "./actions/user/signinwithrealm";
import signout from "./actions/user/signout";
import signup from "./actions/user/signup";
import loadUser from "./actions/user/loadUser";
import updateEmail from "./actions/user/updateEmail";
import updateFullName from "./actions/user/updateFullName";
import clean from "./actions/clean";

const defaultStates = () => {
  return {
    realmUserId: "",
    profile: {},
  };
};

export const useUser = defineStore("user", {
  state: () => {
    return {
      ...defaultStates(),
    };
  },
  getters: {
    getProfile() {
      return this.profile;
    },
    getAuthUserId() {
      return this.profile?.uid || "";
    },
  },
  actions: {
    defaultStates,
    isAuth,
    signin,
    signinwithrealm,
    signout,
    signup,
    loadUser,
    updateEmail,
    updateFullName,
    clean,
  },
});

import { defineStore } from "pinia";
import clean from "./actions/clean";

const defaultStates = () => {
  return {
    loader: null,
    alert: null,
    confirm: null,
  };
};

export const useDialog = defineStore("dialog", {
  state: () => {
    return {
      ...defaultStates(),
    };
  },
  actions: {
    defaultStates,
    registerDialog(name, ref) {
      this[name] = ref;
    },
    clean,
  },
});

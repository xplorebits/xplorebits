import { getAuth } from "firebase/auth";

export default function () {
  return new Promise((r) => {
    const cb = getAuth().onAuthStateChanged((user) => {
      cb();
      if (user) {
        r(true);
      } else {
        r(false);
      }
    });
  });
}

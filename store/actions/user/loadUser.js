import { getAuth } from "firebase/auth";

export default async function () {
  if (!(await this.isAuth())) {
    return false;
  }

  const currentUser = getAuth().currentUser;
  this.profile = {
    uid: currentUser.uid,
    displayName: currentUser.displayName,
    email: currentUser.email,
    photoURL: currentUser.photoURL,
  };

  return true;
}

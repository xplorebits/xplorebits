import { getAuth, updateEmail, updateProfile } from "firebase/auth";

export default async function (email) {
  await updateEmail(getAuth().currentUser, email);
  this.profile["email"] = email;

  return;
}

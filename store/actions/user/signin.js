import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default async function (email, password) {
  return await signInWithEmailAndPassword(getAuth(), email, password);
}

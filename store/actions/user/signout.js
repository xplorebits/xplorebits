import { getAuth, signOut } from "firebase/auth";

export default async function () {
  await signOut(getAuth());
  this.clean();
  return;
}

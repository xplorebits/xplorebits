import { getAuth } from "firebase/auth";
import { Credentials } from "realm-web";

export default async function () {
  const idTokenResult = await getAuth().currentUser.getIdTokenResult(true);

  const credentials = Credentials.jwt(idTokenResult.token);
  const user = await useNuxtApp().$rApp.logIn(credentials);
  this.realmUserId = user.id;

  return this.realmUserId;
}

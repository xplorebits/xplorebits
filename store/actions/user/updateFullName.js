import { getAuth, updateProfile } from "firebase/auth";

export default async function (name) {
  await updateProfile(getAuth().currentUser, {
    displayName: name,
  });

  this.profile["displayName"] = name;

  return;
}

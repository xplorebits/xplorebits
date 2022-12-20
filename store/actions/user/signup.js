import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export default async function (firstName, lastName, email, password) {
  const res = await createUserWithEmailAndPassword(getAuth(), email, password);

  // Create user document
  await setDoc(doc(getFirestore(), "users", res.user.uid), {
    firstName,
    lastName,
    email,
  });

  // Update auth object user
  await updateProfile(getAuth().currentUser, {
    displayName: `${firstName} ${lastName}`,
  });

  return getAuth().currentUser.uid;
}

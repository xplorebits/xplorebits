import * as Realm from "realm-web";

export default defineNuxtPlugin(() => {
  const app = new Realm.App({ id: "mychatra-witjs" });
  return {
    provide: { rApp: app },
  };
});

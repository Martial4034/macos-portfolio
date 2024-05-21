import type { UserData } from "~/types";

const user: UserData = {
  name: "Whyte-Duke",
  avatar: "img/ui/whyte-avatar-min.png",
  password: import.meta.env.VITE_USER_PASSWORD || "" 
};
console.log(import.meta.env.VITE_USER_PASSWORD);
export default user;
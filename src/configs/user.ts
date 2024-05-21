import type { UserData } from "~/types";

const user: UserData = {
  name: "Whyte-Duke",
  avatar: "img/ui/avatar.jpg",
  password: import.meta.env.VITE_USER_PASSWORD || "" // Utilisation de la variable d'environnement
};
console.log(import.meta.env.VITE_USER_PASSWORD);
export default user;
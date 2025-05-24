import users from "@/data/users.json";
import { User } from "@/models/User";

export const getAllUsers = () => users as User[];

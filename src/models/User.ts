import { USER_TYPE } from "@/enums";

export interface User {
  id: string;
  username: string;
  full_name: string;
  user_type: USER_TYPE;
}

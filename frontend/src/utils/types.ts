export interface UserInfo {
  id: number;
  first_name:  string;
  last_name:  string;
  midle_name: string | null;
  email:  string;
  phone_number:  string;
  role:  string;
  addres:  string;
  status:  boolean;
}

export interface UserUpdate {
  first_name:  string;
  last_name:  string;
  midle_name: string | null;
  email:  string;
  phone_number:  string;
  role:  string;
  addres:  string;
  status:  boolean;
}
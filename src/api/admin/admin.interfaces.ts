export interface Admin {
  id: number;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  isSuper?: boolean;
}

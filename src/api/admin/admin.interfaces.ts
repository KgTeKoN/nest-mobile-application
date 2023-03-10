import { Admin } from '@prisma/client';

export interface IAdmin
  extends Pick<Admin, 'id' | 'email' | 'firstName' | 'lastName' | 'isSuper'> {
  password?: string;
}

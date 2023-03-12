export class getAllAdminDto {
  id: number;
  email: string;
  firstName: string;
  lastName?: string;
  isSuper?: boolean;
  isDeleted?: boolean;

  constructor(model) {
    this.id = model.id;
    this.email = model.email;
    this.firstName = model.firstName;
    this.lastName = model?.lastName ?? undefined;
    this.isSuper = model?.isSuper ?? undefined;
    this.isDeleted = model?.isDeleted ?? undefined;
  }
}

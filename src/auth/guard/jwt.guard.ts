import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class SuperAdminGuard extends AuthGuard('superAdmin') {
  constructor() {
    super();
  }
}

@Injectable()
export class AdminGuard extends AuthGuard('admin') {
  constructor() {
    super();
  }
}

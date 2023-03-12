import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import crypto from 'crypto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CryptoService {
  constructor(private configService: ConfigService) {}
  async createHash(data) {
    return argon.hash(data);
  }

  async compareHash(hash, data) {
    return argon.verify(hash, data);
  }

  async encryptData(data) {
    const iv = crypto.randomBytes(16).toString('hex').slice(0, 16);
    const cipher = crypto.createCipheriv(
      'aes-256-cbc',
      this.configService.get<string>('SECRET_KEY'),
      iv,
    );

    let encrypted = cipher.update(String(data), 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return `${encrypted}:${iv}`;
  }

  async deCrypto(encryptedData) {
    const [encryptedString, iv] = encryptedData.split(':');
    const decipher = crypto.createDecipheriv(
      'aes-256-cbc',
      this.configService.get<string>('SECRET_KEY'),
      iv,
    );

    let decrypted = decipher.update(encryptedString, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }
}

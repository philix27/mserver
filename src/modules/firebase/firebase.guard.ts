import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { FirebaseAuthService } from './fbAuth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private service: FirebaseAuthService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid Authorization header');
    }

    const token = authHeader.split('Bearer ')[1];

    const decoded = await this.service.verifyIdToken(token);
    request['user'] = decoded; // Attach user info to request

    return true;
  }
}

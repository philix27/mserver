import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { FirebaseAdminService } from './fbAdmin.service';

@Injectable()
export class FirebaseAuthService {
  constructor(private readonly admin: FirebaseAdminService) { }

  async verifyIdToken(idToken: string): Promise<IFirebaseAuthPayload> {
    try {
      const decodedToken = await this.admin.getAuth().verifyIdToken(idToken) as IFirebaseAuthPayload;
      return decodedToken;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token ' + error.message);

    }
  }

  async createUser(email: string, password: string): Promise<any> {
    try {
      const userRecord = await this.admin.getAuth().createUser({
        email,
        password,
      });

      // Optionally send verification email from frontend
      return userRecord;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updatePassword(i: { uid: string; displayName?: string; email?: string; password: string }): Promise<any> {
    const auth = this.admin.getAuth();
    try {
      const userRecord = await auth.updateUser(i.uid, { "password": i.password, "email": i.email, "displayName": i.displayName });
      return userRecord;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getUserByEmail(email: string): Promise<any> {
    try {
      const userRecord = await this.admin.getAuth().getUserByEmail(email);
      return userRecord;
    } catch (error) {
      throw new BadRequestException('User not found');
    }
  }
}


export interface IFirebaseAuthPayload {
  name: string
  picture: string
  iss: string
  aud: string
  auth_time: number
  user_id: string
  sub: string
  iat: number
  exp: number
  email: string
  email_verified: boolean
  firebase: Firebase
  uid: string
}

export interface Firebase {
  identities: Identities
  sign_in_provider: string
}

export interface Identities {
  "google.com": any[]
  email: any[]
}

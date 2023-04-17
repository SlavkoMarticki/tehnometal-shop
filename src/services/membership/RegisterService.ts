import { createUserWithEmailAndPassword } from 'firebase/auth';
import { push, ref } from 'firebase/database';
import { auth, db } from '../../common';
import { ISignUpRequestData } from '../../types';
import { ApiResponse, ErrorResponse } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
class RegisterService {
  async registerUser(data: ISignUpRequestData): Promise<any> {
    try {
      const { username, password, email, dateOfBirth, timeStamp } = data;
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const reference = ref(db, 'users/');

      const dbData = {
        dateOfBirth,
        email,
        username,
        id: uuidv4()
      };

      push(reference, {
        ...dbData
      });

      localStorage.setItem('loginUser', JSON.stringify(res.user));
      return new ApiResponse(res.user);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-exists':
          throw new ErrorResponse({
            message:
              'The provided email is already in use by an existing user. Each user must have a unique email.'
          });
        case 'auth/invalid-email':
          throw new ErrorResponse({
            message:
              'The provided value for the email user property is invalid. It must be a string email address.'
          });
        case 'auth/phone-number-already-exists':
          throw new ErrorResponse({
            message:
              'The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.'
          });
        case 'auth/account-exists-with-different-credential':
          throw new ErrorResponse({
            message:
              'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.'
          });
        case 'auth/user-not-found':
          throw new ErrorResponse({
            message:
              'There is no user record corresponding to this identifier. The user may have been deleted.'
          });
        case 'auth/weak-password':
          throw new ErrorResponse({
            message: 'The password must be 6 characters long or more.'
          });
        default:
          throw new ErrorResponse({ message: 'An error has occurred.' });
      }
    }
  }
}
const registerServiceInstance = new RegisterService();
export { registerServiceInstance };

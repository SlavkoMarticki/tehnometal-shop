import { signOut, signInWithEmailAndPassword } from '@firebase/auth';
import { auth, GoogleAuthProvider, signInWithPopup } from '../../common';
import { ISignInFormData } from '../../types';
import { ApiResponse, ErrorResponse } from '../../utils';

class SignInService {
  googleProvider;

  constructor() {
    this.googleProvider = new GoogleAuthProvider().setCustomParameters({
      prompt: 'select_account'
    });
  }

  // Promise<UserCredential>

  login = async (data: ISignInFormData): Promise<any> => {
    const { email, password } = data;
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      return data;
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          throw new ErrorResponse({ message: 'Invalid email address.' });
        case 'auth/wrong-password':
          throw new ErrorResponse({ message: 'Wrong password.' });
        case 'auth/user-not-found':
          throw new ErrorResponse({ message: 'User not found.' });
        default:
          throw new ErrorResponse({ message: 'An error occurred.' });
      }
    }
  };

  async signOut(): Promise<void> {
    try {
      await signOut(auth);
      localStorage.removeItem('loginUser');
    } catch (error) {
      console.error(error);
    }
  }

  // TODO: see return object and make same method for user sign in to save user in db
  doSignInWithGoogle = (): void => {
    signInWithPopup(auth, this.googleProvider);
  };
}

const signInServiceInstance = new SignInService();
export { signInServiceInstance };

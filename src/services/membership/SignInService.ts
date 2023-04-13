import { signOut, signInWithEmailAndPassword } from '@firebase/auth';
import { auth, GoogleAuthProvider, signInWithPopup } from '../../common';
import { ISignInFormData } from '../../types';
import { UserCredential } from 'firebase/auth';

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
      localStorage.setItem('loginUser', JSON.stringify(data.user));
      return data.user;
    } catch (error) {
      console.error(error);
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

  doSignInWithGoogle = (): void => {
    signInWithPopup(auth, this.googleProvider);
  };
}

const signInServiceInstance = new SignInService();
export { signInServiceInstance };

import { signOut, signInWithEmailAndPassword } from '@firebase/auth';
import { auth, GoogleAuthProvider, signInWithPopup } from '../../common';
import { ISignInFormData } from '../../types';

class SignInService {
  googleProvider;
  constructor() {
    this.googleProvider = new GoogleAuthProvider().setCustomParameters({
      prompt: 'select_account'
    });
  }

  async login(data: ISignInFormData): Promise<void> {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('loginUser', email);
    } catch (error) {
      console.error(error);
    }
  }

  async signOut(): Promise<void> {
    try {
      await signOut(auth);
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

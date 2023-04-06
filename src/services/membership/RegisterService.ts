import { createUserWithEmailAndPassword } from 'firebase/auth';
import { push, ref } from 'firebase/database';
import { auth, db } from '../../common';
import { ISignUpRequestData } from '../../types';

class RegisterService {
  async registerUser(data: ISignUpRequestData): Promise<void> {
    try {
      const { email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password);
      const reference = ref(db, 'users/');

      push(reference, {
        ...data
      });
    } catch (error) {
      // TODO: add error handling after toaster implementation
      console.error(error);
    }
  }
}
const registerServiceInstance = new RegisterService();
export { registerServiceInstance };

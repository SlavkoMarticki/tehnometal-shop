import { createUserWithEmailAndPassword } from 'firebase/auth';
import { push, ref } from 'firebase/database';
import { auth, db } from '../../common';
import { ISignUpRequestData } from '../../types';

class RegisterService {
  async registerUser(data: ISignUpRequestData): Promise<any> {
    try {
      const { email, password } = data;
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const reference = ref(db, 'users/');

      push(reference, {
        ...data
      });
      localStorage.setItem('loginUser', JSON.stringify(res.user));
      return res.user;
    } catch (error) {
      // TODO: add error handling after toaster implementation
      console.error(error);
    }
  }
}
const registerServiceInstance = new RegisterService();
export { registerServiceInstance };

export function isNullOrWhitespace(value: string | null | undefined): boolean {
  return value === null || value === undefined || value.trim().length === 0;
}

export const validatePassword = (value: any): any => {
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumbers = /\d/.test(value);
  const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

  if (!value) {
    return 'Password is required';
  } else if (value.length < 8) {
    return 'Password must be at least 8 characters long';
  } else if (!hasUpperCase) {
    return 'Password must contain at least one uppercase letter';
  } else if (!hasLowerCase) {
    return 'Password must contain at least one lowercase letter';
  } else if (!hasNumbers) {
    return 'Password must contain at least one number';
  } else if (!hasSpecialChars) {
    return 'Password must contain at least one special character';
  }

  return true;
};

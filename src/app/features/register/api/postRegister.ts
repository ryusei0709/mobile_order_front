import { RegisterFormData } from '@/app/features/register/RegisterForm';

export const postRegister = async (data: RegisterFormData): Promise<any> => {
  const res = await fetch('/api/postRegister', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

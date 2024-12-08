import { RegisterFormData } from "@/app/features/register/RegisterForm";

export const postRegister = async (data: RegisterFormData): Promise<any> => {
    const formData = new FormData();


    console.log('fire')

    //   const res = await fetch(
    //     `http://registre`,
    //     {
    //       method: 'POST',
    //       body: formData,
    //     },
    //   );


    //   return res.ok;
}

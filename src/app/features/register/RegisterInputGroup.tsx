'use client'
import React, { memo } from 'react';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { type Path, type FieldValues, useFormContext , RegisterOptions} from "react-hook-form";
import { Typography } from '@mui/material';

type RegisterInputGroupProps<T extends FieldValues> = {
  name: Path<T>;
  validationRules: RegisterOptions<T>;
  type?: string
  placeholder?: string;
  children?: React.ReactNode;
};

const RegisterInputGroup = React.memo<RegisterInputGroupProps<FieldValues>>(({
  name,
  validationRules,
  type,
  placeholder,
  children,
}) => {
  const { register, formState: { errors } } = useFormContext<FieldValues>();

  return (
    <FormControl fullWidth>
      {children}
      <TextField
        {...register(name, validationRules)}
        type={type}
        placeholder={placeholder}
        error={!!errors[name]}
        helperText={errors[name]?.message as string}
        fullWidth
      />
    </FormControl>
  );
});

// export default RegisterInputGroup;

// const RegisterInputGroup: React.FC<RegisterInputGroupProps<FieldValues>> = ({
//   name,
//   validationRules,
//   type,
//   placeholder,
//   children,
// }) => {
//   const { register } = useFormContext<FieldValues>();
//   return (
//     <FormControl>
//       {children}
//       <TextField
//         {...register(name,validationRules)}
//         type={type}
//         placeholder={placeholder}
//         id={name}
//         fullWidth
//       />
//       {/* {errors[name] && (
//         <Typography>{errors[name]?.message as string}</Typography>
//       )} */}
//     </FormControl>
//   );
// };


export default RegisterInputGroup;

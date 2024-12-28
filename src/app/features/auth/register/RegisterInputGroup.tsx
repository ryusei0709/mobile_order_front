'use client';
import { Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import React from 'react';
import {
  type Path,
  type FieldValues,
  useFormContext,
  RegisterOptions,
} from 'react-hook-form';

type RegisterInputGroupProps<T extends FieldValues> = {
  name: Path<T>;
  validationRules: RegisterOptions<T>;
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
};

const RegisterInputGroup: React.FC<RegisterInputGroupProps<FieldValues>> = ({
  name,
  validationRules,
  type,
  placeholder,
  children,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();
  return (
    <FormControl>
      {children}
      <TextField
        {...register(name, validationRules)}
        type={type}
        placeholder={placeholder}
        id={name}
        fullWidth
      />
      {errors[name] && (
        <Typography>{errors[name]?.message as string}</Typography>
      )}
    </FormControl>
  );
};

export default RegisterInputGroup;

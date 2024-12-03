import React, { memo } from 'react';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { type Path, type FieldValues, useFormContext } from "react-hook-form";

// ジェネリクスを利用してフォーム全体の型を指定
type RegisterInputGroupProps<T extends FieldValues> = {
  name: Path<T>; // Path型で型安全に
  placeholder?: string;
  children?: React.ReactNode;
};

const RegisterInputGroup: React.FC<RegisterInputGroupProps<FieldValues>> = ({
  name,
  placeholder,
  children,
}) => {

  const { register, formState: { errors } } = useFormContext<FieldValues>();
  return (
    <FormControl>
      {children}
      <TextField
        {...register(name)}
        fullWidth
        placeholder={placeholder}
        // error={!!errors[name]} // エラー状態を反映
        // helperText={errors[name]?.message as string} // エラーメッセージを表示
      />
    </FormControl>
  );
};


export default memo(RegisterInputGroup);

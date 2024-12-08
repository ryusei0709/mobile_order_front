'use client'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { postRegister } from '@/app/features/register/api/postRegister';

import RegisterInputGroup from './RegisterInputGroup';

const StyledCard = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: '40px auto 0 auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const methods = useForm<RegisterFormData>();

  const submitHandler = methods.handleSubmit((data, e) => {
    e?.preventDefault();

    postRegister(data);
  });

  return (
    <React.Fragment>
      <StyledCard>
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          アカウント登録
        </Typography>
        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={submitHandler}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <RegisterInputGroup
              name='name'
              validationRules={{
                required: 'この項目は必須です。'
              }}
            >
              <FormLabel htmlFor="name">お名前</FormLabel>
            </RegisterInputGroup>
            <RegisterInputGroup name='email'
              validationRules={{
                required: 'この項目は必須です。'
              }}
            >
              <FormLabel htmlFor="email">メールアドレス</FormLabel>
            </RegisterInputGroup>
            <RegisterInputGroup
              name='password'
              type='password'
              validationRules={{
                required: 'この項目は必須です。'
              }}
            >
              <FormLabel htmlFor="password">パスワード</FormLabel>
            </RegisterInputGroup>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onSubmit={undefined}
            >
              アカウント登録
            </Button>
          </Box>
        </FormProvider>
        <Divider>
          <Typography sx={{ color: 'text.secondary' }}>or</Typography>
        </Divider>
      </StyledCard>
    </React.Fragment>
  );
}

export default RegisterForm

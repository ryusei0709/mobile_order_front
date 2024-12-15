'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';

import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import RegisterInputGroup from '../register/RegisterInputGroup';
import { StyledCard } from '../common/styles';
import { siginIn } from './api/siginIn';

export type SiginInFormData = {
  email: string;
  password: string;
};

const SiginInForm: React.FC = () => {
  const methods = useForm<SiginInFormData>();

  const submitHandler = methods.handleSubmit(async (data, e) => {
    e?.preventDefault();
    const response  = await siginIn(data);
    console.log('sigin_in_response::', response);
  });

  return (
    <React.Fragment>
      <StyledCard>
        <Typography
          component='h1'
          variant='h4'
          sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          ログイン
        </Typography>
        <FormProvider {...methods}>
          <Box
            component='form'
            onSubmit={submitHandler}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <RegisterInputGroup
              name='email'
              placeholder='メールアドレス'
              validationRules={{
                required: 'この項目は必須です。',
              }}
            >
              <FormLabel htmlFor='email'>メールアドレス</FormLabel>
            </RegisterInputGroup>
            <RegisterInputGroup
              name='password'
              type='password'
              placeholder='パスワード'
              validationRules={{
                required: 'この項目は必須です。',
              }}
            >
              <FormLabel htmlFor='password'>パスワード</FormLabel>
            </RegisterInputGroup>
            <Button
              type='submit'
              fullWidth
              variant='contained'
            >
              ログイン
            </Button>
          </Box>
        </FormProvider>
        <Divider>
          <Typography sx={{ color: 'text.secondary' }}>or</Typography>
        </Divider>
      </StyledCard>
    </React.Fragment>
  );
};

export default SiginInForm;

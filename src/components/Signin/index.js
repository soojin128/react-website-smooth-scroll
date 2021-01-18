import React from 'react';
import { 
  Container, 
  FormWrap, 
  Form,
  FormH1, 
  FormButton, 
  FormContent, 
  FormInput, 
  FormLabel, 
  Icon, 
  Text } from './SigninElements';

const Signin = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to='/'>dolla</Icon>
        <FormContent>
          <Form action='#'>
            <FormH1>Sign in</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required/>
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type='password' required/>
            <FormButton type='submit'>Sign in</FormButton>
            <Text>비밀번호 찾기</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default Signin;

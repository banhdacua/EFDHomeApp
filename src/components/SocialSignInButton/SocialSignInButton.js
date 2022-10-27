import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const onSignInFacebook = () => {};
const onSignInGoogle = () => {};
const onSignInApple = () => {};

const SocialSignInButton = () => {
  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        txtColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        txtColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        txtColor="#363636"
      />
    </>
  );
};

export default SocialSignInButton;

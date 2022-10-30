import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSignInPressed = () => {
    navigation.navigate('Home');
  };
  const onForgotPasswordPressed = data => {
    console.log(data);
    navigation.navigate('ForgotPassword');
  };
  const onCreateAccountPressed = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={(styles.logo, {height: height * 0.3})}
          resizeMode="contain"
        />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />
        <CustomInput
          placeholder="Password"
          name="password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password have to be minimum 3 characters long',
            },
          }}
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButton />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onCreateAccountPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 100,
    alignContent: 'center',
  },
});
export default SignInScreen;

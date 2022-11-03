import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import * as Constants from '../../constants';

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {},
    watch,
  } = useForm();
  const password = watch('password');
  const navigation = useNavigation();
  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onTermOfUsePressed = () => {};
  const onPrivacyPolicyPressed = () => {};
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />
        <CustomInput
          name="email"
          placeholder="example.123@email.com"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: Constants.EMAIL_REGEX,
              message: 'Email is invalid',
            },
          }}
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
            pattern: {
              value: Constants.PASSWORD_REGEX,
              message:
                'Password should contain at least 1 alphabet and 1 numeric value',
            },
          }}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          name="repeatPassword"
          control={control}
          rules={{
            required: 'Password is required',
            validate: value => value === password || 'Password do not match',
          }}
          secureTextEntry={true}
        />
        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />
        <Text style={styles.text}>
          By registering, you confirm that you except our
          <Text style={styles.link} onPress={onTermOfUsePressed}>
            {' '}
            Term of Use
          </Text>{' '}
          and
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            {' '}
            Privacy Policy
          </Text>
        </Text>
        <CustomButton
          text="Already have an account? Sign In"
          onPress={onSignInPressed}
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
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: 'orange',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C6D',
    margin: 10,
  },
});
export default SignUpScreen;

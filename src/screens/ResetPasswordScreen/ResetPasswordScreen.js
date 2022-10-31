import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import * as Constants from '../../constants';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
const ResetPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const navigation = useNavigation();
  const onSubmitPressed = () => {
    navigation.navigate('Home');
  };
  const onBackToSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          name="code"
          control={control}
          rules={{
            require: 'Check your email for confirmation code',
            minLength: {
              value: 6,
              message: '',
            },
            maxLength: {
              value: 6,
              message: '',
            },
          }}
        />
        <CustomInput
          placeholder="Enter your new Password"
          name="newPassword"
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
        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
        <CustomButton
          text="Back to Sign In"
          onPress={onBackToSignInPressed}
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
export default ResetPasswordScreen;

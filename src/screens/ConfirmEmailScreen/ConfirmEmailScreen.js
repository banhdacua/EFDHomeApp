import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
const ForgotPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();
  const navigation = useNavigation();
  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };
  const onReSendCodePressed = () => {};
  const onBackToSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
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
        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
        <CustomButton
          text="Resend Code"
          onPress={onReSendCodePressed}
          type="SECONDARY"
        />
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
export default ForgotPasswordScreen;

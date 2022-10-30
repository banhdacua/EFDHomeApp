import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const {code, setCode} = useState('');
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
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />
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

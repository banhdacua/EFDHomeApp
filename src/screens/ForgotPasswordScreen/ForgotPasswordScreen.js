import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const onConfirmPressed = () => {
  console.warn('Confirm has been pressed');
};
const onReSendCodePressed = () => {};
const onBackToSignInPressed = () => {};
const onSendPressed = () => {};

const ConfirmEmailScreen = () => {
  const {username, setUsername} = useState('');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomButton text="Send" onPress={onSendPressed} />
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
export default ConfirmEmailScreen;

import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');
  const {email, setEmail} = useState('');
  const {passwordRepeat, setPasswordRepeat} = useState('');
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
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat your Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />
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
        <SocialSignInButton />
        <CustomButton
          text="Have an account? Sign In"
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

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Keyboard,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { InputGroup, PrimaryButton, SecondaryButton } from '../../components/componentsIndex';
import labels from '../../utils/labels';
import theme from '../../utils/theme';

const { height } = Dimensions.get('window');

const LoginScreen = () => {
  const labelsTemplate = labels.LOGIN;

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.white} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => console.log('Problema para entrar?')}
        >
          <Text style={styles.forgotPasswordText}>{labelsTemplate.PROBLEM_LOGIN}</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{labelsTemplate.LOGIN}</Text>

      </ScrollView>

      <View style={styles.buttonsContainer}>
        <PrimaryButton
          title={labelsTemplate.LOGIN}
          onPress={() => console.log('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: theme.white,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: height * 0.05,
  },
  title: {
    fontSize: 28,
    color: theme.textPrimary,
    fontFamily: theme.fontSemiBold,
    marginBottom: 28,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 12,
  },
  forgotPasswordText: {
    fontSize: 12,
    color: theme.primary,
    fontFamily: theme.fontSemiBold,
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    paddingBottom: height * 0.05,
  },
});

export default LoginScreen;
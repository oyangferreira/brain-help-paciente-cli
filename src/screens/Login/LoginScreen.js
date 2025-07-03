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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const show = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        const hide = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
        return () => {
            show.remove();
            hide.remove();
        };
    }, []);

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

                <InputGroup
                    label={labelsTemplate.EMAIL}
                    placeholder={labelsTemplate.PLACEHOLDER_EMAIL}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <InputGroup
                    label={labelsTemplate.PASSWORD}
                    placeholder={labelsTemplate.PLACEHOLDER_PASSWORD}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity
                    style={styles.forgotPasswordButton}
                    onPress={() => console.log('Esqueci minha senha')}
                >
                    <Text style={styles.forgotPasswordText}>{labelsTemplate.FORGOT_PASSWORD}</Text>
                </TouchableOpacity>
            </ScrollView>

            {!keyboardVisible && (
                <View style={styles.buttonsContainer}>
                    <PrimaryButton
                        title={labelsTemplate.LOGIN}
                        onPress={() => console.log('Login')}
                    />
                    <SecondaryButton
                        title={labelsTemplate.CREATE_ACCOUNT}
                        onPress={() => console.log('Criar conta')}
                    />
                </View>
            )}
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
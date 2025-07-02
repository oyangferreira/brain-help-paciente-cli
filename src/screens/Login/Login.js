import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Keyboard,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { InputGroup } from '../../components/componentsIndex';

const { height } = Dimensions.get('window');

const Login = () => {
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
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
            >
                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Problemas para entrar?</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Entrar</Text>

                <InputGroup
                    label="Email"
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <InputGroup
                    label="Senha"
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </ScrollView>

            {!keyboardVisible && (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupButton}>
                        <Text style={styles.signupButtonText}>Criar conta</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 32,
        paddingTop: height * 0.05,
        paddingBottom: 32,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: '#1D1E1D',
        fontFamily: 'Poppins_600SemiBold',
        marginBottom: 40,
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginBottom: 8,
    },
    forgotPasswordText: {
        fontSize: 12,
        color: '#2196F3',
        fontFamily: 'Poppins_600SemiBold',
    },
    buttonsContainer: {
        paddingHorizontal: 32,
        paddingBottom: height * 0.05,
    },
    loginButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 14,
        borderRadius: 25,
        marginBottom: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
    },
    signupButton: {
        borderWidth: 1,
        borderColor: '#2196F3',
        backgroundColor: '#FFF',
        paddingVertical: 14,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupButtonText: {
        color: '#2196F3',
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
    },
});

export default Login;
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputGroup = ({ label, ...props }) => (
    <View style={styles.inputGroup}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            placeholderTextColor="#BEBEBE"
            {...props}
        />
    </View>
);

const styles = StyleSheet.create({
    inputGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#6E6E6E',
        fontFamily: 'Poppins_500Medium',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E5E7E7',
        borderRadius: 18,
        paddingVertical: 14,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#333',
        fontFamily: 'Poppins_400Regular',
    },
});

export default InputGroup;
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import theme from '../../utils/theme';

const InputGroup = ({ label, ...props }) => (
    <View style={styles.inputGroup}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            placeholderTextColor={theme.textDisabled}
            {...props}
        />
    </View>
);

const styles = StyleSheet.create({
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        color: theme.textSecondary,
        fontFamily: theme.fontMedium,
        marginBottom: 8,
    },
    input: {
        backgroundColor: theme.white,
        borderWidth: 1,
        borderColor: theme.border,
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 20,
        fontSize: 14,
        color: theme.textDisabled,
        fontFamily: theme.fontRegular,
    },
});

export default InputGroup;
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View, StyleSheet, Dimensions } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { AuthProvider } from './context/AuthContext';
import AppNavigator from './navigation/AppNavigator';

// Custom theme for react-native-paper
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4CAF50',
        accent: '#2196F3',
        background: '#fff',
        surface: '#fff',
        text: '#333333',
        error: '#B00020',
        disabled: '#9E9E9E',
        placeholder: '#9E9E9E',
        backdrop: 'rgba(0, 0, 0, 0.5)',
    },
    roundness: 8,
    animation: {
        scale: 1.0,
    },
};

const App = () => {
    return (
        <View style={styles.container}>
            <AuthProvider>
                <PaperProvider theme={theme}>
                    <StatusBar 
                        barStyle="light-content" 
                        backgroundColor={theme.colors.primary}
                    />
                    <AppNavigator />
                </PaperProvider>
            </AuthProvider>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});

export default App;

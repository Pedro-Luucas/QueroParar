import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { Link } from 'expo-router';
import { globalStyles } from '@/styles';

export default function WelcomeScreen() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('@/assets/images/splash-icon.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        
        <Text variant="headlineMedium" style={styles.title}>
          Welcome to QueroParar
        </Text>
        
        <Text variant="bodyLarge" style={styles.subtitle}>
          Your journey to a smoke-free life starts here
        </Text>
        
        <View style={styles.features}>
          <Text variant="bodyMedium" style={styles.featureText}>• Track your progress</Text>
          <Text variant="bodyMedium" style={styles.featureText}>• Calculate money saved</Text>
          <Text variant="bodyMedium" style={styles.featureText}>• Improve your health</Text>
          <Text variant="bodyMedium" style={styles.featureText}>• Join a supportive community</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Button 
          mode="contained" 
          style={styles.button}
          contentStyle={styles.buttonContent}
          onPress={() => {}}
        >
          <Link href="/onboarding/habits" style={{ color: '#fff' }}>
            Get Started
          </Link>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.onboardingContainer,
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
    opacity: 0.7,
  },
  features: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  featureText: {
    fontSize: 16,
    marginBottom: 12,
  },
  footer: {
    paddingBottom: 40,
    width: '100%',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 6,
  },
  buttonContent: {
    height: 48,
  },
});
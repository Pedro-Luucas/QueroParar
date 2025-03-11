import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text, TextInput, RadioButton, useTheme } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import { globalStyles } from '@/styles';

export default function HabitsScreen() {
  const theme = useTheme();
  const router = useRouter();
  
  const [cigarettesPerDay, setCigarettesPerDay] = useState('');
  const [yearsSmoked, setYearsSmoked] = useState('');
  const [packPrice, setPackPrice] = useState('');
  const [cigarettesPerPack, setCigarettesPerPack] = useState('20');
  const [mainReason, setMainReason] = useState('health');

  const handleContinue = () => {
    // In a real app, we would save this data to state management or storage
    router.push('/onboarding/goals');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Your Smoking Habits
        </Text>
        
        <Text variant="bodyLarge" style={styles.subtitle}>
          Let's understand your current habits to personalize your journey
        </Text>
        
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text variant="bodyMedium" style={styles.label}>How many cigarettes do you smoke per day?</Text>
            <TextInput
              mode="outlined"
              keyboardType="numeric"
              value={cigarettesPerDay}
              onChangeText={setCigarettesPerDay}
              style={styles.input}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text variant="bodyMedium" style={styles.label}>For how many years have you been smoking?</Text>
            <TextInput
              mode="outlined"
              keyboardType="numeric"
              value={yearsSmoked}
              onChangeText={setYearsSmoked}
              style={styles.input}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text variant="bodyMedium" style={styles.label}>How much does a pack of cigarettes cost?</Text>
            <TextInput
              mode="outlined"
              keyboardType="numeric"
              value={packPrice}
              onChangeText={setPackPrice}
              style={styles.input}
              placeholder="Price in your local currency"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text variant="bodyMedium" style={styles.label}>How many cigarettes in a pack?</Text>
            <TextInput
              mode="outlined"
              keyboardType="numeric"
              value={cigarettesPerPack}
              onChangeText={setCigarettesPerPack}
              style={styles.input}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text variant="bodyMedium" style={styles.label}>What's your main reason to quit?</Text>
            <RadioButton.Group onValueChange={value => setMainReason(value)} value={mainReason}>
              <View style={styles.radioOption}>
                <RadioButton value="health" />
                <Text>Health improvement</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton value="money" />
                <Text>Save money</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton value="family" />
                <Text>Family/relationships</Text>
              </View>
              <View style={styles.radioOption}>
                <RadioButton value="other" />
                <Text>Other reasons</Text>
              </View>
            </RadioButton.Group>
          </View>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Button 
          mode="outlined" 
          style={styles.backButton}
          contentStyle={styles.buttonContent}
        >
          <Link href="/onboarding/goals" style={{ color: theme.colors.primary }}>
            Back
          </Link>
        </Button>
        
        <Button 
          mode="contained" 
          style={styles.nextButton}
          contentStyle={styles.buttonContent}
          onPress={handleContinue}
        >
          Continue
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.onboardingContainer,
  content: {
    padding: 24,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 32,
    opacity: 0.7,
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    paddingBottom: 40,
  },
  backButton: {
    flex: 1,
    marginRight: 8,
    borderRadius: 8,
  },
  nextButton: {
    flex: 1,
    marginLeft: 8,
    borderRadius: 8,
  },
  buttonContent: {
    height: 48,
  },
});
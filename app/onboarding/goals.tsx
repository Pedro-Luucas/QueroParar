import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text, TextInput, Checkbox, useTheme, Card } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { globalStyles } from '@/styles';

export default function GoalsScreen() {
  const theme = useTheme();
  const router = useRouter();
  
  const [quitDate, setQuitDate] = useState<Date | undefined>(undefined);
  const [dailyGoal, setDailyGoal] = useState('');
  const [selectedGoals, setSelectedGoals] = useState({
    health: true,
    money: true,
    social: false,
    family: false,
    confidence: false,
  });

  const toggleGoal = (goal: keyof typeof selectedGoals) => {
    setSelectedGoals({
      ...selectedGoals,
      [goal]: !selectedGoals[goal],
    });
  };

  const handleFinish = () => {
    // In a real app, we would save this data to state management or storage
    router.push('/(tabs)');
  };

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text variant="headlineMedium" style={styles.title}>
            Set Your Goals
          </Text>
          
          <Text variant="bodyLarge" style={styles.subtitle}>
            Let's set some goals to help you on your journey to quit smoking
          </Text>
          
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text variant="bodyMedium" style={styles.label}>When do you want to quit?</Text>
              <DatePickerInput
                locale="en"
                label="Quit Date"
                value={quitDate}
                onChange={(d) => setQuitDate(d)}
                inputMode="start"
                mode="outlined"
                style={styles.dateInput}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text variant="bodyMedium" style={styles.label}>Set a daily goal (cigarettes per day)</Text>
              <TextInput
                mode="outlined"
                keyboardType="numeric"
                value={dailyGoal}
                onChangeText={setDailyGoal}
                style={styles.input}
                placeholder="e.g., reduce by 2 cigarettes per day"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text variant="bodyMedium" style={styles.label}>Select your personal goals:</Text>
              
              <Card style={styles.goalsCard}>
                <Card.Content style={styles.goalsContent}>
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      status={selectedGoals.health ? 'checked' : 'unchecked'}
                      onPress={() => toggleGoal('health')}
                    />
                    <Text>Improve my health</Text>
                  </View>
                  
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      status={selectedGoals.money ? 'checked' : 'unchecked'}
                      onPress={() => toggleGoal('money')}
                    />
                    <Text>Save money</Text>
                  </View>
                  
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      status={selectedGoals.social ? 'checked' : 'unchecked'}
                      onPress={() => toggleGoal('social')}
                    />
                    <Text>Improve social relationships</Text>
                  </View>
                  
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      status={selectedGoals.family ? 'checked' : 'unchecked'}
                      onPress={() => toggleGoal('family')}
                    />
                    <Text>Be healthier for my family</Text>
                  </View>
                  
                  <View style={styles.checkboxRow}>
                    <Checkbox
                      status={selectedGoals.confidence ? 'checked' : 'unchecked'}
                      onPress={() => toggleGoal('confidence')}
                    />
                    <Text>Boost my self-confidence</Text>
                  </View>
                </Card.Content>
              </Card>
            </View>
          </View>
        </View>
        
        <View style={styles.footer}>
          <Button 
            mode="outlined" 
            style={styles.backButton}
            contentStyle={styles.buttonContent}
          >
            <Link href="/onboarding/habits" style={{ color: theme.colors.primary }}>
              Back
            </Link>
          </Button>
          
          <Button 
            mode="contained" 
            style={styles.finishButton}
            contentStyle={styles.buttonContent}
            onPress={handleFinish}
          >
            Finish
          </Button>
        </View>
      </ScrollView>
    </SafeAreaProvider>
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
  dateInput: {
    backgroundColor: '#fff',
  },
  goalsCard: {
    marginTop: 8,
  },
  goalsContent: {
    paddingVertical: 8,
  },
  checkboxRow: {
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
  finishButton: {
    flex: 1,
    marginLeft: 8,
    borderRadius: 8,
  },
  buttonContent: {
    height: 48,
  },
});
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card, Button, useTheme } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function DashboardScreen() {
  const theme = useTheme();
  
  // Mock data - in a real app this would come from state/storage
  const smokeFreeData = {
    days: 7,
    cigarettesAvoided: 70,
    moneySaved: 35.00,
    healthImprovement: 'Blood pressure normalizing'
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={styles.title}>Your Progress</Text>
      </View>
      
      <Card style={styles.statsCard}>
        <Card.Content>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text variant="headlineLarge" style={styles.statValue}>{smokeFreeData.days}</Text>
              <Text variant="bodyMedium">Days Smoke-Free</Text>
            </View>
            
            <View style={styles.statItem}>
              <Text variant="headlineLarge" style={styles.statValue}>{smokeFreeData.cigarettesAvoided}</Text>
              <Text variant="bodyMedium">Cigarettes Avoided</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <FontAwesome name="money" size={24} color={theme.colors.primary} />
            <Text variant="titleLarge" style={styles.cardTitle}>Money Saved</Text>
          </View>
          <Text variant="displaySmall" style={styles.savingsValue}>${smokeFreeData.moneySaved.toFixed(2)}</Text>
          <Text variant="bodyMedium">Keep it up! You're saving money every day.</Text>
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <FontAwesome name="heartbeat" size={24} color={theme.colors.primary} />
            <Text variant="titleLarge" style={styles.cardTitle}>Health Improvement</Text>
          </View>
          <Text variant="bodyLarge" style={styles.healthText}>{smokeFreeData.healthImprovement}</Text>
          <Text variant="bodyMedium">Your body is healing! Each day smoke-free improves your health.</Text>
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <FontAwesome name="trophy" size={24} color={theme.colors.primary} />
            <Text variant="titleLarge" style={styles.cardTitle}>Next Milestone</Text>
          </View>
          <Text variant="bodyLarge" style={styles.milestoneText}>10 Days Smoke-Free</Text>
          <Text variant="bodyMedium">Just 3 more days to reach your next milestone!</Text>
          <Button mode="contained" style={styles.button} onPress={() => {}}>
            View All Milestones
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    paddingTop: 24,
  },
  title: {
    fontWeight: 'bold',
  },
  statsCard: {
    margin: 16,
    marginTop: 8,
    borderRadius: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  statItem: {
    alignItems: 'center',
    padding: 8,
  },
  statValue: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  card: {
    margin: 16,
    marginTop: 0,
    borderRadius: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    marginLeft: 8,
    fontWeight: 'bold',
  },
  savingsValue: {
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#2e7d32',
  },
  healthText: {
    marginVertical: 8,
  },
  milestoneText: {
    marginVertical: 8,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 16,
    borderRadius: 8,
  },
});
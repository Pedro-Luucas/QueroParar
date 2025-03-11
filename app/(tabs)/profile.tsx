import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Card, Avatar, List, Button, useTheme } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { globalStyles } from '@/styles';

export default function ProfileScreen() {
  const theme = useTheme();
  
  // Mock user data - in a real app this would come from state/storage
  const userData = {
    name: 'John Doe',
    quitDate: '2023-06-15',
    dailyGoal: '0 cigarettes',
    cigarettesPerDay: 20,
    yearsSmoked: 5,
    packPrice: 8.50,
    cigarettesPerPack: 20
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Icon size={80} icon="account" style={styles.avatar} />
        <Text variant="headlineSmall" style={styles.userName}>{userData.name}</Text>
        <Text variant="bodyMedium">Quitting since: {userData.quitDate}</Text>
      </View>
      
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <FontAwesome name="bullseye" size={24} color={theme.colors.primary} />
            <Text variant="titleLarge" style={styles.cardTitle}>Your Goals</Text>
          </View>
          
          <List.Item
            title="Daily Goal"
            description={userData.dailyGoal}
            left={props => <List.Icon {...props} icon="target" />}
          />
          <List.Item
            title="Quit Date"
            description={userData.quitDate}
            left={props => <List.Icon {...props} icon="calendar" />}
          />
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <FontAwesome name="info-circle" size={24} color={theme.colors.primary} />
            <Text variant="titleLarge" style={styles.cardTitle}>Smoking History</Text>
          </View>
          
          <List.Item
            title="Cigarettes per day"
            description={userData.cigarettesPerDay.toString()}
            left={props => <List.Icon {...props} icon="smoking" />}
          />
          <List.Item
            title="Years smoked"
            description={userData.yearsSmoked.toString()}
            left={props => <List.Icon {...props} icon="clock-outline" />}
          />
          <List.Item
            title="Pack price"
            description={`$${userData.packPrice.toFixed(2)}`}
            left={props => <List.Icon {...props} icon="cash" />}
          />
          <List.Item
            title="Cigarettes per pack"
            description={userData.cigarettesPerPack.toString()}
            left={props => <List.Icon {...props} icon="package" />}
          />
        </Card.Content>
      </Card>
      
      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          icon="pencil" 
          style={styles.button}
          onPress={() => {}}
        >
          Edit Profile
        </Button>
        
        <Button 
          mode="outlined" 
          icon="cog" 
          style={[styles.button, styles.settingsButton]}
          onPress={() => {}}
        >
          Settings
        </Button>
      </View>
    </ScrollView>
  );
}

// Use global styles instead of local StyleSheet
const styles = {
  container: globalStyles.container,
  header: globalStyles.header,
  avatar: globalStyles.avatar,
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 4,
    textAlign: 'center',
  },
  card: globalStyles.card,
  cardHeader: globalStyles.cardHeader,
  cardTitle: globalStyles.cardTitle,
  buttonContainer: globalStyles.buttonContainer,
  button: globalStyles.button,
  settingsButton: { borderColor: '#757575' },
};

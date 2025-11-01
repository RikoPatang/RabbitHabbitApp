import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

/**
 * HomeScreen Component
 * 
 * Main screen for the RabbitHabbit app featuring:
 * - Habit loop tracking
 * - Streak counter
 * - Motivational UI elements
 */
const HomeScreen = () => {
  const [streak, setStreak] = useState(0);
  const [habits, setHabits] = useState([
    { id: 1, name: 'Morning Exercise', completed: false },
    { id: 2, name: 'Read 30 Minutes', completed: false },
    { id: 3, name: 'Meditation', completed: false },
  ]);

  const handleHabitToggle = (habitId) => {
    setHabits(habits.map(habit => 
      habit.id === habitId ? { ...habit, completed: !habit.completed } : habit
    ));
    
    // Update streak when habit is completed
    const allCompleted = habits.every(h => h.id === habitId ? true : h.completed);
    if (allCompleted) {
      setStreak(streak + 1);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>🐰 RabbitHabbit</Text>
        <Text style={styles.subtitle}>Build habits, one hop at a time!</Text>
      </View>

      {/* Streak Counter */}
      <View style={styles.streakContainer}>
        <Text style={styles.streakIcon}>🔥</Text>
        <Text style={styles.streakNumber}>{streak}</Text>
        <Text style={styles.streakLabel}>Day Streak</Text>
      </View>

      {/* Motivational Message */}
      <View style={styles.motivationBox}>
        <Text style={styles.motivationText}>
          {streak === 0 ? "Start your journey today!" : 
           streak < 7 ? "Great start! Keep going!" :
           streak < 30 ? "You're on fire! 🌟" :
           "Unstoppable! 💪"}
        </Text>
      </View>

      {/* Habit List */}
      <View style={styles.habitsSection}>
        <Text style={styles.sectionTitle}>Today's Habits</Text>
        {habits.map(habit => (
          <TouchableOpacity
            key={habit.id}
            style={[
              styles.habitItem,
              habit.completed && styles.habitItemCompleted
            ]}
            onPress={() => handleHabitToggle(habit.id)}
          >
            <View style={styles.habitCheckbox}>
              {habit.completed && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={[
              styles.habitName,
              habit.completed && styles.habitNameCompleted
            ]}>
              {habit.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Progress Summary */}
      <View style={styles.progressSection}>
        <Text style={styles.progressText}>
          {habits.filter(h => h.completed).length} of {habits.length} completed
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    backgroundColor: '#6C5CE7',
    padding: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#DFE6E9',
  },
  streakContainer: {
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  streakIcon: {
    fontSize: 48,
  },
  streakNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#6C5CE7',
    marginVertical: 8,
  },
  streakLabel: {
    fontSize: 16,
    color: '#636E72',
  },
  motivationBox: {
    backgroundColor: '#FEF5E7',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#F39C12',
    marginBottom: 25,
  },
  motivationText: {
    fontSize: 18,
    color: '#E67E22',
    fontWeight: '600',
    textAlign: 'center',
  },
  habitsSection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 15,
  },
  habitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  habitItemCompleted: {
    backgroundColor: '#E8F5E9',
  },
  habitCheckbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#6C5CE7',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 18,
    color: '#6C5CE7',
    fontWeight: 'bold',
  },
  habitName: {
    fontSize: 16,
    color: '#2D3436',
    flex: 1,
  },
  habitNameCompleted: {
    textDecorationLine: 'line-through',
    color: '#95A5A6',
  },
  progressSection: {
    alignItems: 'center',
    marginVertical: 20,
    paddingBottom: 30,
  },
  progressText: {
    fontSize: 16,
    color: '#636E72',
    fontWeight: '600',
  },
});

export default HomeScreen;

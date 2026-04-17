import * as Haptics from 'expo-haptics';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HapticButton } from '../components/HapticButton';

export default function App() {
  const triggerImpact = (style: Haptics.ImpactFeedbackStyle) => {
    Haptics.impactAsync(style);
  };

  const triggerNotification = (type: Haptics.NotificationFeedbackType) => {
    Haptics.notificationAsync(type);
  };

  const triggerRepeatedImpact = () => {
    let count = 0;
    const interval = setInterval(() => {
      triggerImpact(Haptics.ImpactFeedbackStyle.Heavy);
      count++;
      if (count >= 10) {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Uso de Haptics </Text>
          <Text style={styles.subtitle}>Ejemplo de uso de vibraciones con Slot</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Intensidades</Text>
          <HapticButton
            text="Intensidad Ligera"
            icon="flash-outline"
            buttonColor="#E3F2FD"
            textColor="#1976D2"
            onPress={() => triggerImpact(Haptics.ImpactFeedbackStyle.Light)}
          />
          <HapticButton
            text="Intensidad Media"
            icon="flash"
            buttonColor="#BBDEFB"
            textColor="#1565C0"
            onPress={() => triggerImpact(Haptics.ImpactFeedbackStyle.Medium)}
          />
          <HapticButton
            text="Intensidad Fuerte"
            icon="flash-sharp"
            buttonColor="#90CAF9"
            textColor="#0D47A1"
            onPress={() => triggerImpact(Haptics.ImpactFeedbackStyle.Heavy)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Patrones</Text>
          <HapticButton
            text="1 Vibración (Impacto)"
            icon="radio-button-on"
            buttonColor="#F1F8E9"
            textColor="#388E3C"
            onPress={() => triggerImpact(Haptics.ImpactFeedbackStyle.Medium)}
          />
          <HapticButton
            text="2 Vibraciones (Éxito)"
            icon="checkmark-done-circle"
            buttonColor="#E8F5E9"
            textColor="#2E7D32"
            onPress={() => triggerNotification(Haptics.NotificationFeedbackType.Success)}
          />
          <HapticButton
            text="10 Vibraciones (setInterval)"
            icon="repeat"
            buttonColor="#FFF3E0"
            textColor="#E65100"
            onPress={triggerRepeatedImpact}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    padding: 24,
    paddingTop: 40,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#212121',
  },
  subtitle: {
    fontSize: 16,
    color: '#757575',
    marginTop: 4,
  },
  section: {
    marginBottom: 30,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9E9E9E',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
    marginLeft: 4,
  },
});

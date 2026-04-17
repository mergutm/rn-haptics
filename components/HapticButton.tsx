import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HapticButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  buttonColor: string;
  textColor: string;
  text: string;
  onPress: () => void;
}

export const HapticButton: React.FC<HapticButtonProps> = ({ 
  icon, 
  buttonColor, 
  textColor, 
  text, 
  onPress 
}) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: buttonColor }]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name={icon} size={24} color={textColor} style={styles.icon} />
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

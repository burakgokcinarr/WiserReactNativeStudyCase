import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/navigation/Router';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export default function App() {
  return (
    <ActionSheetProvider>
      <Router/>
    </ActionSheetProvider>
  );
}
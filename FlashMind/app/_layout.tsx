// _layout.tsx

import { Slot } from 'expo-router';
import { Amplify } from 'aws-amplify';
import awsconfig from '../src/amplifyconfiguration.json';
Amplify.configure(awsconfig);

export default function Layout() {
  return (
      <Slot />
  );
}

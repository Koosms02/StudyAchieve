import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './Hooks/useAuth';
import StackNavigation from './route/StackNavigation';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigation/>
      </AuthProvider>
    </NavigationContainer>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './route/StackNavigation';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}

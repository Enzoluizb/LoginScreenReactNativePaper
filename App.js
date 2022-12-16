import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { DefaultTheme, Provider } from "react-native-paper";
import { RootNavigation } from "./src/navigation";
const darkColors = {
  primary: "rgb(87, 214, 246)",
  onPrimary: "rgb(0, 54, 65)",
  primaryContainer: "rgb(0, 78, 93)",
  onPrimaryContainer: "rgb(175, 236, 255)",
  secondary: "rgb(178, 203, 211)",
  onSecondary: "rgb(29, 52, 58)",
  secondaryContainer: "rgb(52, 74, 81)",
  onSecondaryContainer: "rgb(206, 231, 239)",
  tertiary: "rgb(192, 196, 235)",
  onTertiary: "rgb(41, 46, 77)",
  tertiaryContainer: "rgb(64, 69, 101)",
  onTertiaryContainer: "rgb(222, 224, 255)",
  error: "rgb(255, 180, 171)",
  onError: "rgb(105, 0, 5)",
  errorContainer: "rgb(147, 0, 10)",
  onErrorContainer: "rgb(255, 180, 171)",
  background: "rgb(25, 28, 29)",
  onBackground: "rgb(225, 227, 228)",
  surface: "rgb(25, 28, 29)",
  onSurface: "rgb(225, 227, 228)",
  surfaceVariant: "rgb(64, 72, 75)",
  onSurfaceVariant: "rgb(191, 200, 203)",
  outline: "rgb(137, 146, 149)",
  outlineVariant: "rgb(64, 72, 75)",
  shadow: "rgb(0, 0, 0)",
  scrim: "rgb(0, 0, 0)",
  inverseSurface: "rgb(225, 227, 228)",
  inverseOnSurface: "rgb(46, 49, 50)",
  inversePrimary: "rgb(0, 104, 123)",
  elevation: {
    level0: "transparent",
    level1: "rgb(28, 37, 40)",
    level2: "rgb(30, 43, 46)",
    level3: "rgb(32, 49, 53)",
    level4: "rgb(32, 50, 55)",
    level5: "rgb(34, 54, 59)",
  },
  surfaceDisabled: "rgba(225, 227, 228, 0.12)",
  onSurfaceDisabled: "rgba(225, 227, 228, 0.38)",
  backdrop: "rgba(41, 50, 53, 0.4)",
};

const lightColors = {
  primary: "rgb(0, 104, 123)",
  onPrimary: "rgb(255, 255, 255)",
  primaryContainer: "rgb(175, 236, 255)",
  onPrimaryContainer: "rgb(0, 31, 39)",
  secondary: "rgb(75, 98, 105)",
  onSecondary: "rgb(255, 255, 255)",
  secondaryContainer: "rgb(206, 231, 239)",
  onSecondaryContainer: "rgb(6, 31, 37)",
  tertiary: "rgb(87, 92, 126)",
  onTertiary: "rgb(255, 255, 255)",
  tertiaryContainer: "rgb(222, 224, 255)",
  onTertiaryContainer: "rgb(20, 25, 55)",
  error: "rgb(186, 26, 26)",
  onError: "rgb(255, 255, 255)",
  errorContainer: "rgb(255, 218, 214)",
  onErrorContainer: "rgb(65, 0, 2)",
  background: "rgb(251, 252, 254)",
  onBackground: "rgb(25, 28, 29)",
  surface: "rgb(251, 252, 254)",
  onSurface: "rgb(25, 28, 29)",
  surfaceVariant: "rgb(219, 228, 231)",
  onSurfaceVariant: "rgb(64, 72, 75)",
  outline: "rgb(112, 120, 124)",
  outlineVariant: "rgb(191, 200, 203)",
  shadow: "rgb(0, 0, 0)",
  scrim: "rgb(0, 0, 0)",
  inverseSurface: "rgb(46, 49, 50)",
  inverseOnSurface: "rgb(239, 241, 242)",
  inversePrimary: "rgb(87, 214, 246)",
  elevation: {
    level0: "transparent",
    level1: "rgb(238, 245, 247)",
    level2: "rgb(231, 240, 244)",
    level3: "rgb(223, 236, 240)",
    level4: "rgb(221, 234, 238)",
    level5: "rgb(216, 231, 236)",
  },
  surfaceDisabled: "rgba(25, 28, 29, 0.12)",
  onSurfaceDisabled: "rgba(25, 28, 29, 0.38)",
  backdrop: "rgba(41, 50, 53, 0.4)",
};

export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  const theme = {
    ...DefaultTheme,
    colors: isDarkMode ? darkColors : lightColors,
  };

  return (
    <Provider theme={theme}>
      <NavigationContainer theme={theme}>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
import * as React from "react";
import { View } from "react-native";
import { TalkyLogo } from "./TalkyLogo";

export const SplashScreen: React.FC = () => {
  return (
    <View>
      <TalkyLogo title="Talky." />
    </View>
  );
};
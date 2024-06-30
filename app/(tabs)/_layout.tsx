import { Tabs } from "expo-router";
import React, { useState } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, LightTheme, GlassTheme } from "../../themes";
import { ThemeProvider } from "@react-navigation/native";

export default function TabLayout() {
  const [theme, setTheme] = useState(DarkTheme);

  return (
    <ThemeProvider value={theme}>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",
            }}  
        />

        <Tabs.Screen
          name="mycourse"
          options={{
            headerShown: false,
            title: "My Courses",
          }}
        />

        <Tabs.Screen
          name="explore"
          options={{
            headerShown: false,
            title: "Explore",
          }}
        />

        <Tabs.Screen
          name="me"
          options={{
            headerShown: false,
            title: "Me",
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}

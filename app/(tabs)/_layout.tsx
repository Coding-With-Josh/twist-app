import { Tabs } from "expo-router";
import React, { useState } from "react";
import { DarkTheme, LightTheme, GlassTheme } from "@/themes";
import { ThemeProvider } from "@react-navigation/native";
import TabBar from "@/components/TabBar";

export default function TabLayout() {
  const [theme, setTheme] = useState(DarkTheme);

  return (
    <ThemeProvider value={theme}>
      <Tabs 
        screenOptions={{
          tabBarStyle: {display: "none"},
        }}
        tabBar={props=> <TabBar {...props} />}
        >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",

             display: "none", 
            
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

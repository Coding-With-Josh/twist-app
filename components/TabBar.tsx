import { DarkTheme } from "@/themes";
import { View, Text, TouchableOpacity } from "react-native";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between",
        bottom: 25,
        width: 300,
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: "center",
        backgroundColor: DarkTheme.colors.card,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text
              style={{
                color: isFocused
                  ? DarkTheme.colors.primary
                  : DarkTheme.colors.text,
                fontWeight: isFocused ? "bold" : "normal",
                fontSize: isFocused ? 15 : 13,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

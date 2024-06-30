import { DarkTheme } from "@/themes";
import { View, Text } from "react-native";

const MyCourses = () => {
  return (
    <View>
      <Text style={{color: DarkTheme.colors.text}}>My Courses</Text>
    </View>
  );
};

export default MyCourses;
import { useState } from "react";
import { Appearance, useColorScheme } from "react-native";

const ThemeFunctionality = () => {
    const [theme, setTheme] = useState(Appearance.getColorScheme())
    Appearance.addChangeListener((scheme)=>{
        console.log(scheme)
    })
}
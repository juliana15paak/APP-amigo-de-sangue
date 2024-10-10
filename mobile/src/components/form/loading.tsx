import { ActivityIndicator } from "react-native";

export function Loading(){
    return <ActivityIndicator className="flex-1 bg-white items-center justify-center text-blueTheme-600" size={30}/>
}
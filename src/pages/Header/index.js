import { Image, View } from "react-native";
import styles from "./style";


export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />

      <Image source={require("../../../assets/menu.png")} style={styles.menu} />
    </View>
  );
}

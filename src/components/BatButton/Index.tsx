import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./Styles";
import { BatTextInput } from "../BatTextInput/Index";
import generatePass from "../../services/passwordService";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    setPass(generatePass());
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <BatTextInput pass={pass} />

      <Pressable onPress={handleGenerateButton} style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
      <Pressable onPress={handleCopyButton} style={styles.button}>
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}

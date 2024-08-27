import React from "react";
import { TextInput } from "react-native";

import { styles } from "./Styles";

interface BatTextInputProps {
  pass: string;
}

export function BatTextInput({ pass }: BatTextInputProps) {
  return <TextInput placeholder="pass" style={styles.inputer} value={pass} />;
}

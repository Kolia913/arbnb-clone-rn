import { TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface CloseButtonProps {
  onPress: VoidFunction;
}

const CloseButton = ({ onPress }: CloseButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="close-outline" size={28} />
    </TouchableOpacity>
  );
};

export default CloseButton;

import {
  Icon,
  Text,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
} from "native-base";
import React from "react";
import { FontStyle } from "../../utils/FontStyle";

const MyToast = ({ color, icon, message, id }) => {
  return (
    <Toast bg={color} nativeID={id} action="attention" variant="solid">
      <Icon as={icon} color="$white" mt="$1" mr="$3" />
      <VStack space="xs">
        <Text style={FontStyle.NormalR} color="white">
          Error
        </Text>
        <Text style={FontStyle.NormalR} color="white">
          {message}
        </Text>
      </VStack>
    </Toast>
  );
};

export default MyToast;

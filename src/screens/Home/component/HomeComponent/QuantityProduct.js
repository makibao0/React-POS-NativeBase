import { Box, Text } from "native-base";
import React from "react";

import { useSelector } from "react-redux";
import { BASE } from "../../../../utils/Color";
import { FontStyle } from "../../../../utils/FontStyle";
const QuantityProduct = (item) => {
  const cart = useSelector((state) => state.cart.cart);
  const cartItem = cart.find((cartItem) => cartItem.id === item.item.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  return (
    <>
      {quantity > 0 && (
        <Box
          position="absolute"
          bg={BASE.Primary}
          borderTopLeftRadius={"xl"}
          p={"2"}
          borderBottomRightRadius={"xl"}
        >
          <Text color={"white"} fontStyle={FontStyle.NormalR}>
            {quantity}
          </Text>
        </Box>
      )}
    </>
  );
};

export default QuantityProduct;

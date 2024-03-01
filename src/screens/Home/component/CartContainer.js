import {
  Box,
  Button,
  FlatList,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectCartTotal,
} from "../../../utils/redux/CartReducer";
import { Accent, BASE, Typho } from "../../../utils/Color";
import { FONTS } from "../../../utils/Fonts";
import { ICAdd, ICMin, ICTrash } from "../../../assets/icons/Index";
import { FontStyle } from "../../../utils/FontStyle";

const CartContainer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector(selectCartTotal);
  const deleteItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const addQty = (item) => {
    dispatch(incrementQuantity(item));
  };
  const minQty = (item) => {
    dispatch(decrementQuantity(item));
  };
  const removeAllCart = () => {
    dispatch(clearCart());
  };
  return (
    <Box p="4" flex={0.5} bg={BASE.DarkBG2} borderTopLeftRadius={"2xl"}>
      <Text style={FontStyle.H1} color="white">
        Orders #34212
      </Text>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        py="4"
        borderBottomWidth={1}
        borderBlockColor={BASE.DarkLine}
      >
        <Box flex={0.5}>
          <Text style={FontStyle.H2} color={"white"}>
            Item
          </Text>
        </Box>
        <Pressable
          onPress={() => removeAllCart()}
          justifyContent="center"
          alignItems="center"
          p="1"
          borderWidth={1}
          borderColor={Accent.Red}
          rounded={"full"}
        >
          <ICTrash size="24" color={Accent.Red} />
        </Pressable>
      </HStack>
      <FlatList
        data={cart}
        renderItem={({ item }) => {
          return (
            <HStack justifyContent="space-between" py="4">
              <Box flex={0.45}>
                <HStack space="md" alignItems="center">
                  <Image
                    rounded="sm"
                    source={{
                      uri: item.images[0],
                    }}
                    alt="Alternate Text"
                    size="xs"
                  />
                  <VStack flex={1}>
                    <Text
                      numberOfLines={1}
                      style={FontStyle.NormalM}
                      color={"white"}
                    >
                      {item.title}
                    </Text>
                    <Text style={FontStyle.SmallR} color={Typho.Light}>
                      Rp. {item.price}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
              <HStack
                justifyContent="space-between"
                flex={0.35}
                alignItems="center"
              >
                <Pressable
                  onPress={() => minQty(item)}
                  justifyContent="center"
                  alignItems="center"
                  p="1"
                  borderWidth={1}
                  borderColor={BASE.Primary}
                  rounded={"full"}
                >
                  <ICMin size="24" color={BASE.Primary} />
                </Pressable>
                <Text style={FontStyle.NormalM} color={"white"}>
                  {item.quantity}
                </Text>
                <Pressable
                  onPress={() => addQty(item)}
                  justifyContent="center"
                  alignItems="center"
                  p="1"
                  borderWidth={1}
                  borderColor={BASE.Primary}
                  rounded={"full"}
                >
                  <ICAdd size="24" color={BASE.Primary} />
                </Pressable>
              </HStack>
            </HStack>
          );
        }}
      />
      <VStack space="xl" pt={"4"}>
        <HStack justifyContent="space-between">
          <Text color={Typho.Light} style={FontStyle.NormalR}>
            Total :{" "}
          </Text>
          <Text color={"white"} style={FontStyle.H2}>
            Rp. {total}
          </Text>
        </HStack>
        <Button
          bg={BASE.Primary}
          $active={{
            opacity: 0.5,
          }}
          variant={"solid"}
          size={"lg"}
          isDisabled={false}
        >
          <Text color={"white"} style={FontStyle.NormalSB}>
            Bayar
          </Text>
        </Button>
      </VStack>
    </Box>
  );
};
export default CartContainer;

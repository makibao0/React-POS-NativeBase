import axios from "axios";
import {
  Box,
  FlatList,
  Image,
  InfoIcon,
  Pressable,
  Text,
  VStack,
  useToast,
} from "native-base";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import QuantityProduct from "./HomeComponent/QuantityProduct";
import { addToCart } from "../../../utils/redux/CartReducer";
import { BASE, Typho } from "../../../utils/Color";
import { FONTS } from "../../../utils/Fonts";
import { FontStyle } from "../../../utils/FontStyle";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductContainer = (data) => {
  const product = useSelector((state) => state.product.product);
  const [Data, setData] = useState([]);
  const dispatch = useDispatch();
  const toast = useToast();
  const activeCategory = useSelector(
    (state) => state.activeCategory.activeCategory
  );
  const addItemToCart = (props) => {
    dispatch(addToCart(props));
  };
  const fetchData = async () => {
    let url = "";
    if (activeCategory == "Semua") {
      url = `https://dummyjson.com/products?limit=100 `;
    } else {
      url = `https://dummyjson.com/products/category/${activeCategory}`;
    }

    axios
      .get(url)
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, [activeCategory]);
  return (
    <>
      <FlatList
        numColumns={4}
        data={Data.length > 0 ? Data : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        renderItem={({ item }) => {
          return Data.length > 0 ? (
            <Pressable
              m="2"
              $active={{
                opacity: 0.3,
              }}
              flex={1}
              bg={BASE.DarkBG2}
              h="auto"
              rounded={"xl"}
              onPress={() => addItemToCart(item)}
            >
              <Box>
                <Image
                  alignSelf="center"
                  source={{
                    uri: item.images[0],
                  }}
                  alt="Alternate Text"
                  h={"40"}
                  borderTopRightRadius={"xl"}
                  borderTopLeftRadius={"xl"}
                  w={"full"}
                  resizeMode="cover"
                />
                <QuantityProduct item={item} />
              </Box>

              <Box alignItems="center" py="2">
                <Text
                  textAlign="center"
                  color="white"
                  style={FontStyle.NormalM}
                >
                  {item.title}
                </Text>

                <Text color={Typho.Light} style={FontStyle.NormalM}>
                  Rp. {item.price}
                </Text>
              </Box>
            </Pressable>
          ) : (
            <Box
              m="2"
              $active={{
                opacity: 0.3,
              }}
              flex={1}
              rounded={"xl"}
              bg={BASE.DarkBG2}
            >
              <Skeleton height={150} borderRadius={10} />
              <VStack m="2" space={2}>
                <Skeleton />
                <Skeleton />
              </VStack>
            </Box>
          );
        }}
      />
    </>
  );
};

export default ProductContainer;

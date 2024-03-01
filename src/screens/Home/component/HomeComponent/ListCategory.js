import {
  Box,
  FlatList,
  InfoIcon,
  Pressable,
  useToast,
  Text,
} from "native-base";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Accent, BASE } from "../../../../utils/Color";
import { FONTS } from "../../../../utils/Fonts";

import axios from "axios";
import MyToast from "../../../../component/MyToast";
import {
  changeCategory,
  clearCategory,
} from "../../../../utils/redux/ActiveCategoryReducer";
import { clearProduct } from "../../../../utils/redux/ProductReducer";
import { FontStyle } from "../../../../utils/FontStyle";

const ListCategory = () => {
  const [Data, setData] = useState(["Semua"]);
  const activeCategory = useSelector(
    (state) => state.activeCategory.activeCategory
  );
  const dispatch = useDispatch();
  const changeCategorys = (item) => {
    dispatch(clearCategory());
    dispatch(clearProduct());
    dispatch(changeCategory(item));
  };
  const toast = useToast();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/categories`)
      .then((res) => {
        setData(Data.concat(res.data));
      })
      .catch((err) => {
        toast.show({
          duration: 2000,
          placement: "top",
          render: ({ id }) => {
            const toastId = "toast-" + id;
            return (
              <MyToast
                id={toastId}
                icon={InfoIcon}
                color={Accent.Red}
                message={err.message}
              />
            );
          },
        });
      });
  }, []);
  const CustomScrollbar = ({ children }) => {
    return (
      <Box
        style={{
          overflowX: "scroll",
          scrollbarWidth: "thin", // for Firefox
          scrollbarColor: `${Accent.Blue} ${Accent.Transparent}`, // for Firefox
          WebkitOverflowScrolling: "touch", // for smooth scrolling on iOS
        }}
      >
        {children}
      </Box>
    );
  };
  return (
    <Box py="4">
      <FlatList
        indicatorStyle="black"
        horizontal
        contentContainerStyle={{
          justifyContent: "space-between",
        }}
        data={Data}
        renderItem={({ item }) => {
          return (
            <Pressable
              $active={{
                opacity: 0.56,
              }}
              mr="4"
              onPress={() => changeCategorys(item)}
            >
              <Text
                style={FontStyle.NormalSB}
                color={activeCategory == item ? BASE.Primary : "white"}
              >
                {item.toUpperCase()}
              </Text>
              {activeCategory === item && (
                <Box bg={BASE.Primary} h={"$1"} rounded={"$sm"} w={"auto"} />
              )}
            </Pressable>
          );
        }}
      />
    </Box>
  );
};

export default ListCategory;

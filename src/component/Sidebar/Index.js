import React from "react";
import {
  ICBell,
  ICChart,
  ICDiscount,
  ICHome,
  ICLogo,
  ICLogout,
  ICMessage,
  ICSetting,
} from "../../assets/icons/Index";
import { Box, Image, Pressable, VStack } from "native-base";
import { BASE } from "../../utils/Color";
import { WH } from "../../utils/Size";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { changeMenu } from "../../utils/redux/ActiveMenuReducer";

const menuItems = [
  { title: "Home", icon: ICHome, size: 24, color: BASE.Primary },
  { title: "Discout", icon: ICDiscount, size: 24, color: BASE.Primary },
  { title: "Report", icon: ICChart, size: 24, color: BASE.Primary },
  { title: "Message", icon: ICMessage, size: 24, color: BASE.Primary },
  { title: "Bell", icon: ICBell, size: 24, color: BASE.Primary },
  { title: "Setting", icon: ICSetting, size: 24, color: BASE.Primary },
  { title: "LogOut", icon: ICLogout, size: 24, color: BASE.Primary },
];

const SideBar = () => {
  const activeMenu = useSelector((state) => state.activeMenu.activeMenu);
  const dispatch = useDispatch();
  return (
    <VStack
      rounded={"2xl"}
      py="7"
      h={"100%"}
      justifyContent="space-between"
      bg={BASE.DarkBG2}
    >
      <Box mx="5">
        <Image
          rounded={"full"}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt="Alternate Text"
          size="xs"
        />
      </Box>
      {menuItems.map((item, index) => {
        return (
          <Pressable
            $active={{
              opacity: 0.5,
            }}
            onPress={() => dispatch(changeMenu(item.title))}
            key={index}
            alignSelf="flex-end"
            bg={activeMenu == item.title ? BASE.DarkBG1 : BASE.DarkBG2}
            w={activeMenu == item.title ? "70%" : "100%"}
            py="3"
            alignItems="center"
            borderTopLeftRadius={"xl"}
            borderBottomLeftRadius={"xl"}
          >
            <Box
              rounded={"xl"}
              p={activeMenu == item.title ? "2" : "0"}
              bg={activeMenu == item.title ? BASE.Primary : BASE.DarkBG2}
            >
              <item.icon
                size={item.size}
                color={activeMenu == item.title ? "white" : item.color}
              />
            </Box>
          </Pressable>
        );
      })}
    </VStack>
  );
};

export default SideBar;

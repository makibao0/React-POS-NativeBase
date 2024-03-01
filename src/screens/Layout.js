import React, { useEffect } from "react";
import { Box, HStack, Text } from "native-base";
import SideBar from "../component/Sidebar/Index";
import Home from "./Home/Index";
import { BASE } from "../utils/Color";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/id";
import { changeRealTime } from "../utils/redux/UpdateTimeReducer";
import Report from "./Report";
export const Layout = () => {
  const activeMenu = useSelector((state) => state.activeMenu.activeMenu);
  const now = new Date();

  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatedDate = moment(now).format("dddd, D MMM YYYY HH:mm:ss");
      dispatch(changeRealTime(formatedDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <HStack p="2" h={"100vh"} bg={BASE.DarkBG1}>
      <SideBar />
      {activeMenu == "Home" ? (
        <Home />
      ) : activeMenu == "Report" ? (
        <Report />
      ) : (
        <></>
      )}
    </HStack>
  );
};

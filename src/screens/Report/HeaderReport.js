import { HStack, Text, VStack } from "native-base";
import "moment/locale/id";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE, Typho } from "../../utils/Color";
import { FONTS } from "../../utils/Fonts";
import { changeCategory } from "../../utils/redux/ActiveCategoryReducer";
import { FontStyle } from "../../utils/FontStyle";
const HeaderReport = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const realTime = useSelector((state) => state.realTime.realTime);
  const handleSubmit = () => {
    console.log(value);
    dispatch(changeCategory("Semua"));
  };

  return (
    <HStack
      pb="2"
      justifyContent="space-between"
      alignItems="center"
      borderBottomWidth={1}
      borderColor={BASE.DarkLine}
    >
      <VStack>
        <Text color="white" style={FontStyle.H1}>
          Dashboard
        </Text>
        <Text style={FontStyle.SmallR} color={Typho.Lighter}>
          {realTime}
        </Text>
      </VStack>
    </HStack>
  );
};
export default HeaderReport;

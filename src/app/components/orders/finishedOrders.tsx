import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";

const finishedOrders = [
  [1, 2, 3],
  [1, 2, 3],
];

export default function FinishedOrders(props: any) {
  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = "/others/steak.jpeg";
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} alt="dish"/>
                      <p className={"titleDish"}>Steak</p>
                      <Box className={"priceBox"}>
                        <p>$12</p>
                        <img src={"/icons/Close.svg"} alt="multiply"/>
                        <p>2</p>
                        <img src={"/icons/Pause.svg"} alt="equals" />
                        <p style={{ marginLeft: "15px" }}>$24</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box red_solid"}>
                <Box className={"boxTotal"}>
                  <p>Price</p>
                  <p>$22</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} alt="plus"/>
                  <p>Delivery fee</p>
                  <p>$5</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                    alt="multiply"
                  />
                  <p>Total price</p>
                  <p>$27</p>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}

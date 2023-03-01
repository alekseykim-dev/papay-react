import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";

const pausedOrders = [
  [1, 2],
  [1, 2, 3, 4],
  [1, 2, 3],
];

export default function PausedOrders(props: any) {
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/others/salmon.png`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img
                        src={image_path}
                        className={"orderDishImg"}
                        alt="dish"
                      />
                      <p className={"titleDish"}>Grilled Salmon</p>
                      <Box className={"priceBox"}>
                        <p>$10</p>
                        <img src={"/icons/Close.svg"} alt="multiply" />
                        <p>3</p>
                        <img src={"/icons/Pause.svg"} alt="equals" />
                        <p style={{ marginLeft: "15px" }}>$30</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box black_solid"}>
                <Box className={"boxTotal"}>
                  <p>Price</p>
                  <p>$30</p>
                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                    alt="plus"
                  />
                  <p>Delivery fee</p>
                  <p>$3</p>
                  <img
                    src={"/icons/Pause.svg"}
                    style={{ marginLeft: "20px" }}
                    alt="equals"
                  />
                  <p>Total</p>
                  <p>$33</p>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    borderRadius: "10px",
                    marginLeft: "200px",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "10px",
                    marginRight: "20px",
                  }}
                >
                  Pay
                </Button>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}

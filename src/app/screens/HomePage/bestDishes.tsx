
import { Box, Container, Stack } from "@mui/material";
import React from "react";

export function BestDishes() {
  return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Recommended Dishes</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            
            <Box className="dish_box">
              <Stack className="dish_img">
                <div className="dish_sale">normal size</div>
                <div className="view_btn">
                  See more
                  <img
                    src="/icons/arrow.svg"
                    alt="arrow"
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className="dish_desc">
                <span className="dish_title_text">Ramen</span>
                <span className="dish_desc_text">
                  <span className="price"> $11 </span>
                </span>
              </Stack>
            </Box>

            <Box className="dish_box">
              <Stack className="dish_img">
                <div className="dish_sale">normal size</div>
                <div className="view_btn">
                  See more
                  <img
                    src="/icons/arrow.svg"
                    alt="arrow"
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className="dish_desc">
                <span className="dish_title_text">Ramen</span>
                <span className="dish_desc_text">
                  <span className="price"> $11 </span>
                </span>
              </Stack>
            </Box>

            <Box className="dish_box">
              <Stack className="dish_img">
                <div className="dish_sale">normal size</div>
                <div className="view_btn">
                  See more
                  <img
                    src="/icons/arrow.svg"
                    alt="arrow"
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className="dish_desc">
                <span className="dish_title_text">Ramen</span>
                <span className="dish_desc_text">
                  <span className="price"> $11 </span>
                </span>
              </Stack>
            </Box>
            
            <Box className="dish_box">
              <Stack className="dish_img">
                <div className="dish_sale">normal size</div>
                <div className="view_btn">
                  See more
                  <img
                    src="/icons/arrow.svg"
                    alt="arrow"
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className="dish_desc">
                <span className="dish_title_text">Ramen</span>
                <span className="dish_desc_text">
                  <span className="price"> $11 </span>
                </span>
              </Stack>
            </Box>

          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

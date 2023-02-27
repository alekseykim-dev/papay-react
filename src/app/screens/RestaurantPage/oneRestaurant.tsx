import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";

const restaurant_list = Array.from(Array(10).keys());
const product_list = Array.from(Array(8).keys());

export function OneRestaurant() {
  return (
    <div className="single_restaurant">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar_big_box">
            <Box className="top_text">
              <p>Texas De Brazil Restaurant</p>
              <Box className="Single_search_big_box">
                <form className="Single_search_form" action="" method="">
                  <input
                    type="search"
                    className="Single_searchInput"
                    name="Single_reSearch"
                    placeholder="Search"
                  />
                  <Button
                    className="Single_button_search"
                    variant="contained"
                    endIcon={<SearchIcon />}
                  >
                    Search
                  </Button>
                </form>
              </Box>
            </Box>
          </Stack>

          <Stack
            style={{ width: "100%", display: "flex" }}
            flexDirection={"row"}
            sx={{ mt: "35px" }}
          >
            <Box className="prev_btn restaurant-prev">
              <ArrowBackIosNewIcon sx={{ fontSize: 40, color: "white" }} />
            </Box>
            <Swiper
              className="restaurant_avatars_wrapper"
              slidesPerView={7}
              centeredSlides={false}
              spaceBetween={30}
              navigation={{
                nextEl: ".restaurant-next",
                prevEl: ".restaurant-prev",
              }}
            >
              {restaurant_list.map((ele, index) => {
                return (
                  <SwiperSlide
                    style={{ cursor: "pointer" }}
                    key={index}
                    className="restaurant_avatars"
                  >
                    <img src="/restaurant/best.jpeg" alt="avatar" />
                    <span>Best Restaurant</span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Box
              className="next_btn restaurant-next"
              style={{ color: "white" }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
            </Box>
          </Stack>

          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            width={"90%"}
            sx={{ mt: "65px" }}
          >
            <Box className="dishes_filter_box">
              <Button variant="contained" color="secondary">
                Newly Added
              </Button>
              <Button variant="contained" color="secondary">
                Price
              </Button>
              <Button variant="contained" color="secondary">
                Likes
              </Button>
              <Button variant="contained" color="secondary">
                Views
              </Button>
            </Box>
          </Stack>

          <Stack
            style={{ width: "100%", display: "flex", minHeight: "600px" }}
            flexDirection={"row"}
          >
            <Stack className="dish_category_box">
              <div className="dish_category_main">
                <Button variant="contained" color="secondary">
                  Other
                </Button>
                <Button variant="contained" color="secondary">
                  Desert
                </Button>
                <Button variant="contained" color="secondary">
                  Ichimlik
                </Button>
                <Button variant="contained" color="secondary">
                  Salad
                </Button>
                <Button variant="contained" color="secondary">
                  Dishes
                </Button>
              </div>
            </Stack>

            <Stack className="dish_wrapper">
              {product_list.map((ele, index) => {
                const size_volume = "normal size";

                return (
                  <Box className="dish_box" key={`${index}`}>
                    <Box
                      className="dish_img"
                      sx={{
                        backgroundImage: `url("/restaurant/dish.png")`,
                      }}
                    >
                      <div className="dish_sale">{size_volume}</div>
                      <Button
                        className="like_view_btn"
                        style={{ left: "36px" }}
                      >
                        <Badge badgeContent={100} color="primary">
                          <Checkbox
                            icon={<FavoriteBorder style={{ color: "white" }} />}
                            id={`${index}`}
                            checkedIcon={
                              <FavoriteIcon style={{ color: "red" }} />
                            }
                            /** @ts-ignore */
                            checked={true}
                          />
                        </Badge>
                      </Button>
                      <Button className="view_btn">
                        <img
                          src="/icons/shopping_cart.svg"
                          alt="shopping cart"
                          style={{ display: "flex" }}
                        />
                      </Button>
                      <Button
                        className="like_view_btn"
                        style={{ right: "36px" }}
                      >
                        <Badge badgeContent={1000} color="primary">
                          <Checkbox
                            icon={
                              <RemoveRedEyeIcon style={{ color: "white" }} />
                            }
                          />
                        </Badge>
                      </Button>
                    </Box>
                    <Box className="dish_desc">
                      <span className="dish_title_text">Delicious meal</span>
                      <div className="dish_desc_text">
                        <MonetizationOnIcon />7
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <div className="review_for_restaurant">
        <Container
          sx={{ mt: "100px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className="category_title"> Reviews</Box>
          <Stack
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            {Array.from(Array(4).keys()).map((ele, index) => {
              return (
                <Box className="review_box" key={index}>
                  <Box display={"flex"} justifyContent={"center"}>
                    <img
                      src="/community/cute_girl.jpg"
                      alt="customer review"
                      className="review_img"
                    />
                  </Box>
                  <span className="review_name">Dakota</span>
                  <span className="review_prof">Customer</span>
                  <p className="review_desc">
                    I highly recommend this restaurant! The food is amazing and
                    the staff is professional!
                  </p>
                  <div className="review_stars">
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "whitesmoke" }} />
                  </div>
                </Box>
              );
            })}
          </Stack>
        </Container>
      </div>

      <Container className="member_reviews">
        <Box className="category_title">About This Restaurant</Box>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          width={"90%"}
          sx={{ mt: "70px" }}
        >
          <Box
            className="about_left"
            sx={{
              backgroundImage: `url('/restaurant/steak.jpg')`,
            }}
          >
            <div className="about_left_desc">
              <span>La Parrilla De Hector</span>
              <p>Most scrumptious steak house</p>
            </div>
          </Box>
          <Box className="about_right">
            {Array.from(Array(3).keys()).map((ele, index) => {
              return (
                <Box display={"flex"} flexDirection={"row"} key={index}>
                  <div className="about_right_img"></div>
                  <div className="about_right_desc">
                    <span>Our Chefs</span>
                    <p>We invite the best chefs to cook for our customers!</p>
                  </div>
                </Box>
              );
            })}
          </Box>
        </Stack>

        <Stack
          sx={{ mt: "60px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className="category_title">Our Address</Box>
          <iframe
            title="address"
            style={{ marginTop: "60px" }}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20%20Busan%20Citizens%20Park+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width={"1320"}
            height={"500"}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Stack>
      </Container>
    </div>
  );
}

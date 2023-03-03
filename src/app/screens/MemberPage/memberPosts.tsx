import { Box, Stack } from "@mui/material";
import moment from "moment";
import CheckBox from "@mui/material/Checkbox";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export function MemberPosts() {
  return (
    <Box className="post_content">
      {["1", "2", "3"].map((article) => {
        return (
          <Stack className="all_article_box" sx={{ cursor: "pointer" }}>
            <Box
              className="all_article_img"
              sx={{ backgroundImage: `url("/auth/default_user.jpeg")` }}
            ></Box>
            <Box className="all_article_container">
              <Box style={{ width: "50%" }}>
                <Box alignItems={"center"} display="flex">
                  <img
                    src="/auth/default_user.jpeg"
                    width={"35px"}
                    style={{ borderRadius: "50%", backgroundSize: "cover" }}
                  />
                  <span className="all_article_author_user">Yoel Romero</span>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  sx={{ mt: "10px" }}
                >
                  <span className="all_article_title">Restaurant rating</span>
                  <p className="all_article_desc">Simply the best!</p>
                </Box>
              </Box>

              <Box
                sx={{ display: "flex" }}
                flexDirection={"column"}
                justifyContent={"flex-end"}
              >
                <Box
                  sx={{ display: "flex" }}
                  flexDirection={"row"}
                  alignItems={"center"}
                >
                  <p className="article_time_desc">
                    {moment().format("YY-MM-DD hh:mm")}
                  </p>

                  <div style={{ display: "flex", marginLeft: "42px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "20px",
                      }}
                    >
                      <CheckBox
                        icon={<FavoriteBorder style={{ color: "white" }} />}
                        checkedIcon={<Favorite style={{ color: "red" }} />}
                        // checked={false}
                      />

                      <span className="article_time_desc">1 </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <RemoveRedEyeIcon
                        style={{ color: "white" }}
                        sx={{ mr: "10px" }}
                      />
                      <span className="article_time_desc">3</span>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </Stack>
        );
      })}
    </Box>
  );
}

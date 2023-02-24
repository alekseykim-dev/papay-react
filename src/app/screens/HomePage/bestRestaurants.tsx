import React from "react";
import { Favorite, Visibility } from "@mui/icons-material";
import { AspectRatio, CardOverflow, CssVarsProvider, IconButton, Link } from "@mui/joy";
import { Box, Card, Container, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";



export function BestRestaurants() {
  return (
    <div className="best_restaurant_frame">
      <img
        src={"/icons/line.svg"}
        alt="line"
        style={{ position: "absolute", left: "6%", transform: " rotate(90%)" }}
      />
      <Container sx={{ mt: "153px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Best Restaurants</Box>
          <Stack flexDirection={"row"} sx={{ mt: "43px" }}>
            <CssVarsProvider>
              <Card
                variant="outlined"
                sx={{
                  minHeight: 483,
                  minWidth: 320,
                  mr: "15px",
                  ml: "15px",
                  background: "white",
                  borderRadius: "10px",
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src="/restaurant/best.jpeg" alt="best" />
                  </AspectRatio>
                  <IconButton
                    aria-label="like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2, ml: 2 }}>
                  Somewhere peaceful
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2, ml: 2 }}>
                  <Link
                    href="#"
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2, ml: 2 }}>
                  <Link
                    href="#"
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +82 10 5851 5310
                  </Link>
                </Typography>

                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                      marginLeft: "10px",
                    }}
                  >
                    100
                    <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  minHeight: 483,
                  minWidth: 320,
                  mr: "15px",
                  ml: "15px",
                  background: "white",
                  borderRadius: "10px",
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src="/restaurant/best.jpeg" alt="best" />
                  </AspectRatio>
                  <IconButton
                    aria-label="like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2, ml: 2 }}>
                  Somewhere peaceful
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2, ml: 2 }}>
                  <Link
                    href="#"
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2, ml: 2 }}>
                  <Link
                    href="#"
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +82 10 5851 5310
                  </Link>
                </Typography>

                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                      marginLeft: "10px",
                    }}
                  >
                    100
                    <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  minHeight: 483,
                  minWidth: 320,
                  mr: "15px",
                  ml: "15px",
                  background: "white",
                  borderRadius: "10px",
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src="/restaurant/best.jpeg" alt="best" />
                  </AspectRatio>
                  <IconButton
                    aria-label="like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2, ml: 2 }}>
                  Somewhere peaceful
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2, ml: 2 }}>
                  <Link
                    href="#"
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2, ml: 2 }}>
                  <Link
                    href="#"
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +82 10 5851 5310
                  </Link>
                </Typography>

                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                      marginLeft: "10px",
                    }}
                  >
                    100
                    <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  minHeight: 483,
                  minWidth: 320,
                  mr: "15px",
                  ml: "15px",
                  background: "white",
                  borderRadius: "10px",
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src="/restaurant/best.jpeg" alt="best" />
                  </AspectRatio>
                  <IconButton
                    aria-label="like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ color: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2, ml: 2 }}>
                  Somewhere peaceful
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2, ml: 2 }}>
                  <Link
                    href="#"
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Tashkent, Yunus Abad 4-1
                  </Link>
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2, ml: 2 }}>
                  <Link
                    href="#"
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +82 10 5851 5310
                  </Link>
                </Typography>

                <CardOverflow
                  variant="soft"
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                    borderColor: "neutral.outlinedBorder",
                    bgcolor: "background.level1",
                  }}
                >
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                      marginLeft: "10px",
                    }}
                  >
                    100
                    <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>500</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

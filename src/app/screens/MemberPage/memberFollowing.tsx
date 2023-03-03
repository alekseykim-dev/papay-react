import React from "react";
import { Avatar, Box, Button, Stack } from "@mui/material";

const followings = [
  { mb_nick: "Hans Zimmer" },
  { mb_nick: "Elon Musk" },
  { mb_nick: "Christopher Nolan" },
  { mb_nick: "Leonardo Di Caprio" },
];
export function MemberFollowing(props: any) {
  return (
    <Stack>
      {followings.map((following) => {
        const image_url = "/auth/user.svg";
        return (
          <Box className="follow_box">
            <Avatar alt={""} src={image_url} sx={{ width: 89, height: 89 }} />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
              }}
            >
              <span className="username_text">USER</span>
              <span className="name_text">{following.mb_nick}</span>
            </div>

            {props.actions_enabled && (
              <Button
                variant="contained"
                startIcon={
                  <img
                    src="/icons/follow_icon.svg"
                    style={{ width: "30px", marginLeft: "16px" }}
                  />
                }
                className="follow_cancel_btn"
              >
                Unfollow
              </Button>
            )}
          </Box>
        );
      })}
    </Stack>
  );
}

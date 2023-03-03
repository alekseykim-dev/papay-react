import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Box, Button, Stack } from "@mui/material";

export function MySettings(props: any) {
  return (
    <Stack className="my_settings_page">
      <Box className="member_media_frame">
        <img
          src="/auth/cat.png"
          className="mb_image"
          style={{ borderRadius: "50%" }}
          width={"100px"}
          height={"100px"}
        />
        <div className="media_change_box">
          <span>Upload Image</span>
          <p>Please, choose among JPG, JPEG, PNG formats!</p>
          <div className="up_del_box">
            <Button component="label" style={{ minWidth: "0" }}>
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>

      <Box className="input_frame">
        <div className="long_input">
          <label className="spec_label">Name</label>
          <input
            className="spec_input mb_nick"
            type="text"
            placeholder="User Name"
            name="mb_nick"
          />
        </div>
      </Box>

      <Box className="input_frame">
        <div className="short_input">
          <label className="spec_label">Phone number</label>
          <input
            className="spec_input mb_phone"
            type="text"
            placeholder="Write your phone number"
            name="mb_phone"
          />
        </div>
        <div className="short_input">
          <label className="spec_label">Address</label>
          <input
            className="spec_input mb_address"
            type="text"
            placeholder="Write your address"
            name="mb_address"
          />
        </div>
      </Box>

      <Box className="input_frame">
        <div className="long_input">
          <label className="spec_label">Details</label>
          <textarea
            className="spec_textarea mb_description"
            placeholder="Not available"
            name="mb_description"
          />
        </div>
      </Box>

      <Box display={"flex"} justifyContent={"flex-end"} sx={{ mt: "25px" }}>
        <Button variant="contained">Save</Button>
      </Box>
    </Stack>
  );
}

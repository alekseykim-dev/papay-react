import { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import {
  Stack,
  Box,
  Button,
  FormControl,
  MenuItem,
  Typography,
  Select,
  TextField,
} from "@mui/material";

export const TuiEditor = (props: any) => {
  const editorRef = useRef(null);

  return (
    <Stack>
      <Stack
        direction={"row"}
        style={{ margin: "40px" }}
        justifyContent="space-evenly"
      >
        <Box className="form_row" style={{ width: "300px" }}>
          <Typography
            style={{ color: "rgb(225 225 233)", margin: "10px" }}
            variant="h3"
          >
            Categories
          </Typography>
          <FormControl sx={{ width: "100%", background: "white" }}>
            <Select
              value={"celebrity"}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <span>Choose category</span>
              </MenuItem>
              <MenuItem value={"celebrity"}>Popular</MenuItem>
              <MenuItem value={"evaluation"}>Restaurant Review</MenuItem>
              <MenuItem value={"story"}>My story</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="form_row" style={{ width: "300px" }}>
          <Typography
            style={{ color: "rgb(225 225 233)", margin: "10px" }}
            variant="h3"
          >
            Topic
          </Typography>
          <TextField
            id="filled-basic"
            label="Topic"
            variant="filled"
            style={{ width: "300px", background: "white" }}
          />
        </Box>
      </Stack>

      <Editor
      // @ts-ignore
        ref={editorRef}
        placeholder="Type here"
        previewStyle="vertical"
        height="640px"
        initialEditType="wysiwyg"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["image", "table", "link"],
          ["ul", "ol", "task"],
        ]}
        hooks={{
          addImageBlobHook: async (image: any, callback: any) => {
            return false;
          },
        }}
        events={{
          load: function (param: any) {},
        }}
      />
      <Stack direction={"row"} justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "30px", width: "250px", height: "45px" }}
        >
          Post
        </Button>
      </Stack>
    </Stack>
  );
};

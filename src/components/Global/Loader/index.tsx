import { Box, CircularProgress, Fade, Modal, Typography } from "@mui/material"

export const Loader = ({loading}: {loading: boolean}) => {
    return (
        <Modal
        open={loading}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={loading}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <CircularProgress
              sx={{
                color: "white",
              }}
            />
            <Typography
              sx={{
                color: "white",
              }}
            >
              Hang on...just a sec
            </Typography>
          </Box>
        </Fade>
      </Modal>
    )
}
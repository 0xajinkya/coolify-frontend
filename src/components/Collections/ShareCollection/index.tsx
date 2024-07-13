import { MainButton, MainInput } from "@/components/Global";
import { IShareCollection } from "@/context";
import { Close, CopyAll, SwapCalls } from "@mui/icons-material";
import {
  Box,
  Fade,
  IconButton,
  InputBase,
  Modal,
  Typography,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";

export const ShareCollectionModal = ({
  shareData,
  toggleModal,
}: {
  shareData: IShareCollection | null;
  toggleModal: () => void;
}) => {
  return (
    <Modal
      open={Boolean(shareData)}
      onClose={toggleModal}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fade in={Boolean(shareData)}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            width: ["85vw", "30vw"],
            // height: "40vh",
          }}
        >
          <Box
            sx={{
              p: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              gap: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Playwrite NZ",
                  fontSize: ["20px", "25px"],
                  fontWeight: 700,
                  flex: 1,
                }}
              >
                Share{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(180,93,238,1) 0%, rgba(253,29,29,1) 45%, rgba(252,176,69,1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {shareData!.name}
                </span>{" "}
                Collection
              </Typography>
              <IconButton onClick={toggleModal}>
                <Close />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "100%",
                  background:
                    "linear-gradient(90deg, rgba(180,93,238,1) 0%, rgba(253,29,29,1) 45%, rgba(252,176,69,1) 100%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SwapCalls
                  sx={{
                    width: "40px",
                    height: "40px",
                    color: "white",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "12px",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  {shareData!.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "grey",
                    width: "80%",
                    overflow: "hidden",
                    textWrap: "nowrap",
                    display: "-webkit-box",
                    WebkitLineClamp: 2 /* Number of lines to show */,
                    WebkitBoxOrient: "vertical",
                    // overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "normal",
                    textAlign: "center",
                  }}
                >
                  {shareData!.description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "stretch",
                width: ["90%", "80%"],
                mx: "auto",
              }}
            >
              <InputBase
                sx={{
                  border: "1px solid #D9D9D9",
                  width: "100%",
                  px: "10px",
                  borderStartStartRadius: "10px",
                  borderEndStartRadius: "10px",
                }}
                value={`https://coolify.top/app/share/${shareData!.id}`}
                disabled
              />
              <IconButton
                sx={{
                  background:
                    "linear-gradient(90deg, rgba(180,93,238,1) 0%, rgba(253,29,29,1) 45%, rgba(252,176,69,1) 100%)",
                  borderRadius: 0,
                  borderStartEndRadius: "10px",
                  borderEndEndRadius: "10px",
                }}
                onClick={() => {
                  navigator.clipboard
                    .writeText(`https://coolify.top/app/share/${shareData!.id}`)
                    .then(() => {
                      enqueueSnackbar({
                        message: "Link copied to clipboard!",
                        variant: "success",
                      });
                    });
                }}
              >
                <CopyAll
                  sx={{
                    width: "25px",
                    height: "25px",
                    color: "white",
                  }}
                />
              </IconButton>
            </Box>
            {/* <Box>
              <MainButton
                text="Share on social"
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: shareData?.name,
                        text: shareData?.description,
                        url: `https://coolify.top/app/share/${shareData?.id}`,
                      })
                      .then(() => {
                        console.log("Content shared successfully");
                      });
                  }
                }}
              />
            </Box> */}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

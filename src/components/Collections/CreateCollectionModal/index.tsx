import { MainButton, MainInput } from "@/components/Global";
import { Close } from "@mui/icons-material";
import { Box, Fade, IconButton, Modal, Typography } from "@mui/material";

export const CreateCollectionModal = ({
  open,
  toggleModal,
  handleCollectionForm,
  createCollection
}: {
  open: boolean;
  toggleModal: () => void;
  handleCollectionForm: (key: "name" | "description", val: string) => void,
  createCollection: () => Promise<void>
}) => {
  return (
    <Modal
      open={open}
      onClose={toggleModal}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            width: "40vw",
            // height: "40vh",
          }}
        >
          <Box
            sx={{
              p: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Playwrite NZ",
                  fontSize: "25px",
                  fontWeight: 700,
                  background:
                    "linear-gradient(90deg, rgba(180,93,238,1) 0%, rgba(253,29,29,1) 45%, rgba(252,176,69,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Create Collection
              </Typography>
              <IconButton onClick={toggleModal}>
                <Close
                  sx={{
                    width: "18px",
                    height: "18px",
                  }}
                />
              </IconButton>
            </Box>
            <form
                method="POST"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    marginTop: "18px"
                }}
                onSubmit={(e) => {
                    e.preventDefault();
                    createCollection();
                }}
            >
                <MainInput 
                    placeholder="Name of the collection"
                    fieldName="name"
                    handleChange={handleCollectionForm}
                />
                <MainInput 
                    placeholder="Description of the collection"
                    fieldName="description"
                    handleChange={handleCollectionForm}
                />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}
                >
                <MainButton 
                    text="Create"
                    type="submit"
                    style={{
                        backgroundColor: "rgba(180,93,238,1)",
                        color: "white",
                        ":hover": {
                        backgroundColor: "rgba(180,93,238,1)",
                        }
                    }}
                />
                </Box>
            </form>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

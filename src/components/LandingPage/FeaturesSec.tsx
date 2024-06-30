import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Item = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "24px",
      }}
    >
      <Image src={icon} alt={title} width={50} height={50} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#d2d2d2",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export const FeaturesSec = () => {
  return (
    <Box
      sx={{
        px: ["20px", "100px"],
        py: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "column", "row"],
          backgroundColor: "#1c1d22",
          gap: "54px",
          px: "30px",
          py: "30px",
          borderRadius: "12px",
        }}
      >
        <Item
          icon="/images/home/diamond.webp"
          title="Effortless Organization of Content"
          description="Our extension allows users to effortlessly save LinkedIn posts directly into personalized collections. This feature streamlines the process of organizing valuable content, ensuring that important posts, articles, and updates are never lost in the feed. Users can create and manage multiple collections tailored to their interests or professional needs, making information retrieval quick and convenient."
        />
        <Item
          icon="/images/home/eth.webp"
          title="Enhanced Productivity"
          description="With our extension, users can maximize their productivity by keeping their LinkedIn feed clutter-free. By saving posts to specific collections, users can focus on current tasks without the distraction of trying to remember where they saw valuable content. This organized approach enables users to revisit saved posts at their convenience, allowing for better time management and efficient workflow."
        />
        <Item
          icon="/images/home/en.webp"
          title="Simplified Content Curation and Sharing"
          description="Sharing feature coming soon. Curating content for personal growth or sharing with peers has never been easier. Our extension simplifies the process of gathering insightful posts into well-organized collections that can be easily accessed and shared with others. Whether for team collaborations, networking, or personal development, this feature ensures that users have a wealth of resources at their fingertips, ready to be shared and discussed."
        />
      </Box>
    </Box>
  );
};

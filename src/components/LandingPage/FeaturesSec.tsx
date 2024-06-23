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
          title="Create infinite collections"
          description="Experience the ultimate efficiency in tracking daily progress and generating monthly performance reports with our cutting-edge micro-SaaS solution. Say goodbye to tedious data entry and hello to streamlined success. Our platform empowers you to effortlessly manage your projects, monitor progress, and create insightful performance reports in a snap. With intuitive features and customizable templates, you can focus on what matters most—achieving your goals. Elevate your productivity, enhance decision-making, and reach new heights with our daily progress report management and performance report generation system"
        />
        <Item
          icon="/images/home/eth.webp"
          title="Save posts directly from LinkedIn"
          description="Unlock the potential of data-driven decision-making with our micro-SaaS for daily progress reports and monthly performance reports. Our state-of-the-art platform empowers you to harness the power of data, turning it into actionable insights. Whether you're a project manager, team lead, or business owner, our solution offers the tools you need to track daily progress and generate comprehensive performance reports with ease. Say goodbye to manual data crunching and hello to excellence. Elevate your projects, optimize your operations, and make data work for you"
        />
        <Item
          icon="/images/home/en.webp"
          title="Progress Simplified, Results Amplified"
          description="Experience the transformational impact of simplified progress tracking and amplified results with our micro-SaaS solution. We've designed a user-friendly platform that puts you in control of your daily progress and monthly performance. Effortlessly monitor your projects, set milestones, and generate comprehensive reports to achieve your goals faster. Our intuitive tools and templates save you time and stress. Whether you're an entrepreneur, manager, or professional, our system ensures your progress is simplified and your results are amplified. Embrace a new era of productivity and success with our daily progress and performance report management solution"
        />
      </Box>
    </Box>
  );
};

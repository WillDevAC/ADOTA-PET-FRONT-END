import { styled } from "../../../theme/theme";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { violet, blackA } from "@radix-ui/colors";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  cursor: "pointer",

  "@media screen and (max-width: 889px) ": {
    display: "none",
  },
});

export const Details = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",

  span: {
    color: "gray",
    fontSize: "0.7rem",
  },

  h3: {
    fontSize: "1.1rem",
    color: "$brand",
  },
});

export const Photo = styled("div", {
  display: "flex",
  height: "3.1rem",

  img: {
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "50%",
  },
});

export const Action = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 45,
  height: 45,
  borderRadius: "100%",
  backgroundColor: blackA.blackA3,
});

export const AvatarImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F4f4f4",
  textTransform: "uppercase",
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

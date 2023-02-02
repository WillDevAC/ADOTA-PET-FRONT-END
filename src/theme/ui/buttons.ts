import { styled } from "../theme";

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  padding: "0.3rem",
  fontWeight: "bold",
  border: "none",
  fontSize: "0.95rem",
  borderRadius: "4px",

  variants: {
    type: {
      default: {
        backgroundColor: "$brand",
        color: "$white",
      },
      outline: {
        backgroundColor: "transparent",
        color: "$brand",
      },
      facebook: {
        gap: "0.5rem",
        backgroundColor: "#3a5998",
        color: "$white",
        fontSize: "0.9rem",
      },
      google: {
        gap: "0.5rem",
        backgroundColor: "#4285f4",
        color: "$white",
        fontSize: "0.9rem",
      },
      disabled: {
        backgroundColor: "#e7e8e9",
        cursor: "not-allowed"
      }
    },
    size: {
      small: {
        height: "2.2rem",
        width: "8rem",
      },
      medium: {
        height: "2.2rem",
        width: "10rem",
      },
      full: {
        width: "100%",
        height: "3rem",
      },
      card: {
        width: '85%',
        height: "2.2rem",
      }
    },
  },
  defaultVariants: {
    size: "medium",
    type: "default",
  },
});

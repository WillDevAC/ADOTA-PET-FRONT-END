import { styled } from "../../../theme/theme";

export const Grid = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    alignItems: "stretch",
    alignContent: 'space-between',
    gap: '1rem',
    width: '100%',
});

export const CardStyles = styled("div", {
    backgroundColor: 'white',
    width: '100%',
});
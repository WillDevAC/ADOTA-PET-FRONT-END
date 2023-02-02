import { styled } from "../../../theme/theme";

export const Grid = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(245px, 1fr))",
    alignItems: "stretch",
    alignContent: 'space-between',
    gap: '1.5rem',
    width: '100%',
});



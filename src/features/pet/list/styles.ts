import { styled } from "../../../theme/theme";

export const Grid = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(245px, 1fr))",
    alignItems: "stretch",
    alignContent: 'space-between',
    gap: '1.5rem',
    width: '100%',
});

export const CardStyles = styled("div", {
    backgroundColor: 'white',
    height: '17rem',
    width: '100%',
    borderRadius: '0.4rem',
    padding: '0.5rem',
});

export const CardImage = styled("div", {
    display: 'flex',
    minHeight: '7rem',
    alignItems: 'center',
    justifyContent: 'center',

    'img': {
        maxWidth:'100%',
        height: 'auto',
        objectFit: 'cover',
        overflow: 'hidden',
    }
});
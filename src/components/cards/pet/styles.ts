import { styled } from "../../../theme/theme";

export const Card = styled("div", {
    width: '255px',
    height: '370px',
    backgroundColor: '#FFF',
    overflow: 'hidden',
    padding: '9px',
    borderRadius: '0.2rem'
});

export const Header = styled("div", {
    position: 'relative',
    width: '100%',
    height: '200px',
    overflow: 'hidden',

    'img': {
        minWidth: '100%',
        width: 'auto',
        height: '100%',
        borderRadius: '0.2rem'
    }
});

export const Body = styled("div", {
    display: 'flex',
    height: '170px',
    flexDirection: 'column',
    paddingTop: '1.2rem',
    gap: '0.1rem',
});

export const PetOng = styled("span", {
    color: 'gray',
    fontSize: '0.75rem',
});

export const PetName = styled("h2", {
    fontSize: '1.6rem',
    paddingTop: '0.3rem',
    color: '$brand',
});

export const PetMoreDetails = styled("span", {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const Address = styled("span", {
    color: 'gray',
    fontSize: '0.75rem',
    paddingTop: '0.6rem',
    fontWeight: '100'
});

export const Sex = styled("span", {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const PetAdoption = styled("div", {
    display: 'flex',
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1rem',
    gap: '0.5rem',
});

export const AddFavorite = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: '100%',
    backgroundColor: '#F4F4F4',
    color: 'gray',
    padding: '0.4rem',
    borderRadius: '0.3rem',
    gap: '0.3rem',
    cursor: 'pointer',

    '&:hover': {
        color: '$brand',
    }
});
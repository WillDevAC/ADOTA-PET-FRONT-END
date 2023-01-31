import { styled } from "../../../theme/theme";

export const FooterContainer = styled('footer', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    backgroundColor: '#FFF',
    paddingLeft: '0%',
    paddingRight: '0%',
    paddingTop: '2%',
    paddingBottom: '3%',
    minHeight: '15rem',
});

export const FooterLogo = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '2rem',
    margin: 'auto',

    'img': {
        width: '90%',
    },
    'span': {
        color: '#777781',
        cursor: 'pointer',
        fontSize: '1rem',
    }
});

export const FooterGroup = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 'auto',
    gap: '1rem',
});

export const FooterItem = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#777781',
});
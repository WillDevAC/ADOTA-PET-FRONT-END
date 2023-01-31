import { styled } from "../../../theme/theme";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '18rem',
    gap: '1rem',
    position: 'fixed',
});

export const CardFilter = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'white',
    paddingBottom: '1.2rem',
});

export const CardFilterHeader = styled('div', {
    display: 'flex',
    backgroundColor: '$brand',
    height: '2.8rem',
    alignItems: 'center',
    color: 'white',
    paddingLeft: '1rem',
    fontSize: '1rem',
    borderTopLeftRadius: '0.2rem',
    borderTopRightRadius: '0.2rem',
    marginBottom: '0.5rem',
});

export const CardFilterBody = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1rem',
    paddingTop: '1rem',
    gap: '1.5rem',
});

export const GroupInput = styled('div', {
    display: 'flex',
    gap: '0.3rem',
})
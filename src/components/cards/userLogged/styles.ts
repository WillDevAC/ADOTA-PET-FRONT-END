import { styled } from '../../../theme/theme'

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    cursor: 'pointer',

    "@media screen and (max-width: 889px) ": {
      display: 'none',
    },
});

export const Details = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',

    'span': {
        color: 'gray',
        fontSize: '0.7rem'
    },

    'h3': {
        fontSize: '1.1rem',
        color: '$brand'
    }
})

export const Photo = styled('div', {
    display: 'flex',
    height: '3.1rem',

    'img': {
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '50%'
    }
})

export const Action = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})
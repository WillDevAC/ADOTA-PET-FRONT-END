import { styled } from '../../theme/theme'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    backgroundColor: '$white',
});

export const Box = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    background: '$white',
    width: '29rem',
    padding: '1.5rem',

    "@media screen and (max-width: 889px) ": {
        width: '100%',
    },
});

export const Form = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
});

export const Network = styled('div', {
    display: 'flex',
    alignContent: 'center',
    gap: '1rem',
    width: '100%',
    marginBottom: '2rem',
});

export const Describe = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '0.2rem',
    fontSize: '0.9rem',
    color: 'gray',

    'a': {
        color: '$brand'
    }
})

export const ErrorForm = styled('div', {
    fontSize: '0.9rem',
    color: '$brand'
});

export const Info = styled('h1', {
    display: 'flex',
    paddingBottom: '0.5rem',
    gap: '0.3rem',

    'b': {
        color: '$brand'
    }
})

export const Span = styled('span', {
    display: 'flex',
    color: 'gray',
    marginBottom: '3rem',
    fontSize: '1rem'
})
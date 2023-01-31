import { styled } from "../../../theme/theme";

export const Breadcrumb = styled('div', {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    color: 'gray',

    'a': {
        paddingRight: '0.5rem',
        color: '$brand',
    }
});

export const Grid = styled('section', {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridGap: '1.5rem',
    marginTop: '2rem',
    height: '30rem',
});

export const Slider = styled('div', {
    display: 'flex',
    width: '55rem',
    height: '28rem',
    gap: '1rem',
});

export const InfoPET = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    'span': {
        fontSize: '1rem',
        color: 'gray',
        paddingTop: '0.5rem',
    }
});

export const SliderPhoto = styled('div', {
    display: 'flex',
    width: '100%',
    height: '100%',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',

    'img': {
        width: '100%',
        backgroundSize: 'contain',
        borderRadius: '0.2rem',
    }
});

export const SliderVariants = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    gridGap: '1rem',
    width: '13%',
});

export const Variant = styled('div', {
    display: 'flex',

    'img': {
        width: '100%',
        backgroundSize: 'contain',
        borderRadius: '0.2rem',
    }
})
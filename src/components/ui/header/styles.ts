import { styled } from "../../../theme/theme";

export const Container = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$white',
  paddingLeft: '5rem',
  paddingRight: '5rem',
  height: '4.5rem',
  position: 'sticky',
  top: 0,
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',

  "@media screen and (max-width: 889px) ": {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
});

export const Links = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',

  'img': {
    width: 'auto',
    maxWidth: '11rem',
  },

  "@media screen and (max-width: 889px) ": {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export const Options = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',

  "@media screen and (max-width: 889px) ": {
    display: 'none',
  },
});

export const Hamburguer = styled('div', {
  display: 'none',

  "@media screen and (max-width: 889px) ": {
    display: 'flex',
  },
});


export const Notifications = styled('div', {
  display: 'none',

  "@media screen and (max-width: 889px) ": {
    display: 'flex',
  },
});
import { styled } from "../../../theme/theme"

export const Card = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '0.8em',
    borderRadius: '0.3em',
})

export const CardImage = styled("div", {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'red',
    Height: '12em',

    'img': {
        width: '100%',
        backgroundSize: 'contain'
    }
})

export const CardDetails = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    paddingBottom: '1.5em',
    paddingTop: '1.5em',
    gap: '0.8em'
})

export const Ong = styled("span", {
    display: 'flex',
    color: 'gray',
    fontSize: '0.8em'
})

export const NamePet = styled("h1", {
    display: 'flex',
    fontWeight: '700',
    fontSize: '1.45em'
})

export const Location = styled("span", {
    color: 'gray',
    fontSize: '0.8em'
})

export const CardAction = styled("div", {
    display: 'flex',
})
import { styled } from "../theme";

export const Input = styled("input", {
    display: 'flex',

    variants: {
        variant: {
            default: {
                paddingLeft: '0.5rem',
                border: '1px solid #c2c8d0',
                outline: 'none',
                color: 'gray',
                borderRadius: '0.2rem',
            }
        },
        size: {
            full: {
                width: '100%',
                height: '3rem',
            }
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'full',
    }
})
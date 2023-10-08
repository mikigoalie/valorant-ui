import { Button } from '@mantine/core';
import classes from './ValorantButton.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    title?: string;
    variant?: "outline" | "filled" | "light"
    color?: string
}

export default function ValorantModal({ children, variant, color, ...props }: Props) {
    return <Button classNames={{
        root: classes.root,
    }} color={color} variant={variant} {...props}>{children}</Button>;
}
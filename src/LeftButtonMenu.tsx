import classes from './LeftButtonMenu.module.css';
import { UnstyledButton } from '@mantine/core';

export default function LeftButtonMenu() {
    return (
        <div className={classes.lmButtonsContainer}>
            <UnstyledButton className={classes.buttonText}>Play</UnstyledButton>
            <UnstyledButton className={classes.buttonText}>battlepass</UnstyledButton>
            <UnstyledButton className={classes.buttonText}>collection</UnstyledButton>
            <UnstyledButton className={classes.buttonText}>premier</UnstyledButton>
            <UnstyledButton className={classes.buttonText}>agents</UnstyledButton>
            <UnstyledButton className={classes.buttonText}>career</UnstyledButton>
            <UnstyledButton className={classes.buttonText}>store</UnstyledButton>
        </div>
    )
}

import classes from './LeftButtonMenu.module.css';
import { UnstyledButton } from '@mantine/core';
import { NRYNotification } from './Comps/Notifs';


export default function LeftButtonMenu() {
    return (
        <div className={classes.lmButtonsContainer}>
            <UnstyledButton onClick={NRYNotification} className={classes.buttonText}>Play</UnstyledButton>
            <UnstyledButton onClick={NRYNotification} className={classes.buttonText}>battlepass</UnstyledButton>
            <UnstyledButton onClick={NRYNotification} className={classes.buttonText}>collection</UnstyledButton>
            <UnstyledButton onClick={NRYNotification} className={classes.buttonText}>premier</UnstyledButton>
            <UnstyledButton onClick={NRYNotification} className={classes.buttonText}>agents</UnstyledButton>
            <UnstyledButton onClick={NRYNotification} className={classes.buttonText}>career</UnstyledButton>
            <UnstyledButton onClick={NRYNotification} className={classes.buttonText}>store</UnstyledButton>
        </div>
    )
}

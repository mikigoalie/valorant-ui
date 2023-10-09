import { useClickOutside } from '@mantine/hooks';
import { useState } from 'react';
import classes from './FriendList.module.css'
import FriendlistProfile from './FriendlistProfile';
export default function FriendList() {
    const [playerCardHovered, setPlayerCardHovered] = useState(false);
    const ref = useClickOutside(() => setPlayerCardHovered(false));

    return (
        <>
            <div ref={ref} onContextMenu={(e) => { e.preventDefault(); console.log(e) }} onClick={() => {
                if(playerCardHovered) return;
                setPlayerCardHovered(!playerCardHovered)
            }} className={`${classes.friendlistdiv} ${playerCardHovered ? classes.hovered : ''}`}
            >
                <FriendlistProfile hovered={playerCardHovered} />

                <div className={classes.blur} style={{
                    position: "fixed", bottom: 0, width: "100%", height: "5rem", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "5rem"
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "white" }} height="1.5em" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "white" }} height="1.5em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                </div>
            </div>
        </>
    )
}

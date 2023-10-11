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
                if (playerCardHovered) return;
                setPlayerCardHovered(!playerCardHovered)
            }} className={`${classes.friendlistdiv} ${playerCardHovered ? classes.hovered : ''}`}
            >
                <FriendlistProfile hovered={playerCardHovered} />
            </div>
        </>
    )
}

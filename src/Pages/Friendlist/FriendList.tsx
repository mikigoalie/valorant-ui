import { useState } from 'react';
import classes from './FriendList.module.css'
import FriendlistProfile from './FriendlistProfile';
export default function FriendList() {
    const [hovered, setHovered] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const handleMenuActiveChange = (isActive: boolean) => {
        setMenuActive(isActive);
      };

    return (
        <div className={`${classes.friendlistdiv} ${hovered || menuActive ? classes.hovered : ''}`}>
            <FriendlistProfile setMenuActive={handleMenuActiveChange} setHovered={setHovered} hovered={hovered} />
        </div>
    )
}

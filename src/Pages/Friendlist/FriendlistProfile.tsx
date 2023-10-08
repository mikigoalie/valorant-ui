import { Avatar, Tooltip, Badge, Indicator, Menu, Button } from '@mantine/core';
import classes from './FriendList.module.css';
import Config from '../../config';
import { RANKS } from '../../Comps/Ranks';
import { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';

export default function FriendlistProfile({ setHovered, hovered, setMenuActive }: { setHovered: (hovered: boolean) => void, hovered: boolean, setMenuActive: any }) {
  const friends = Config.ACCOUNTS.OTHER;
  const [_, setMenuActiveLocal] = useState(false);
  const ref = useClickOutside(() => setHovered(false));

  const handleMenuActiveChange = (isActive: boolean) => {
    setMenuActiveLocal(isActive);
    setMenuActive(isActive); // Invoke the callback function in the parent component
  };

  const mouseClick = (e: any) => {
    e.preventDefault();
    console.log(e.key);
  };

  return (
    <div
      ref={ref}
      onClick={() => setHovered(true)}
      onMouseDown={mouseClick}
    >
      {friends.map((friend, index) => (
        <Menu
          onClose={() => handleMenuActiveChange(false)}
          offset={4}
          withArrow
          position="left-start"
          onOpen={() => {
            if (!hovered) return;
            handleMenuActiveChange(true)
          }

          } onPositionChange={() => console.log('POS CHANGEDS')} key={index}>
          <Menu.Target>
            <div
              className={`${classes.friendListProfile}`}
            >
              <span
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                }}
              >
                <Indicator position="bottom-end" color={friend.state === 'Online' ? 'green' : 'orange'}>
                  <Avatar size="lg" radius="sm" src={friend.image} />
                </Indicator>
                <div
                  style={{
                    marginLeft: '1em',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}
                >
                  <Tooltip label={`${friend.name}#${friend.tag}`}>
                    <span className={classes.playerName}>{friend.name}</span>
                  </Tooltip>
                  <div>
                    <Badge size="xs" radius="sm" color={friend.state === 'Online' ? 'green' : 'orange'}>
                      {friend.state}
                    </Badge>
                  </div>
                </div>
              </span>

              <div>
                <img style={{ height: '2em' }} src={RANKS[friend.rank || 'unranked']} alt="Radiant Rank" />
              </div>
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>
              <Button variant="filled">Button</Button>
            </Menu.Item>

            {/* Other items ... */}
          </Menu.Dropdown>
        </Menu>
      ))}
    </div>
  );
}
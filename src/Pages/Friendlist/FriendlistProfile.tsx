import { Avatar, Tooltip, Badge, Indicator, Menu, Button, Divider } from '@mantine/core';
import classes from './FriendList.module.css';
import Config from '../../config';
import { RANKS } from '../../Comps/Ranks';
import { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';

export default function FriendlistProfile({ setHovered, hovered, setMenuActive }: { setHovered: (hovered: boolean) => void, hovered: boolean, setMenuActive: any }) {
  const users = Config.ACCOUNTS.OTHER;
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

  const renderFriendList = (user: any, isSelf: boolean) => {
    return (
      <Menu
        onClose={() => handleMenuActiveChange(false)}
        offset={4}
        withArrow
        position="left-start"
        onOpen={() => {
          if (!hovered) return;
          handleMenuActiveChange(true)
        }}
        onPositionChange={() => console.log('POS CHANGEDS')}
        key={user.id}
      >
        <Menu.Target>
          <div className={`${classes.friendListProfile}`}>
            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                textAlign: 'left',
              }}
            >
              <Indicator position="bottom-end" color={
                user.state === 'Online'
                  ? 'green'
                  : user.state === 'Offline'
                    ? 'dark.2'
                    : 'orange'
              }>
                <Avatar size="lg" radius="sm" src={user.image} />
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
                <Tooltip label={`${user.name}#${user.tag}`}>
                <span className={`${classes.playerName} ${isSelf ? classes.selfPlayer : ''}`}>{user.name}</span>
                </Tooltip>
                <div>
                  <Badge size="xs" radius="sm" color={
                    user.state === 'Online'
                      ? 'green.9'
                      : user.state === 'Offline'
                        ? 'dark.9'
                        : 'orange.9'
                  }>
                    {user.state}
                  </Badge>
                </div>
              </div>
            </span>

            <div>
              <img style={{ height: '2em' }} src={RANKS[user.rank || 'unranked']} alt="Radiant Rank" />
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
    );
  };

  return (
    <>
      <div ref={ref} onClick={() => setHovered(true)} onMouseDown={mouseClick}>
        {renderFriendList(Config.ACCOUNTS.SELF, true)}
      </div>

      <Divider my="xs" style={{ paddingLeft: "1em", paddingRight: "1em" }} label={`Online ${users.length}`} labelPosition="left" />
      <div ref={ref} onClick={() => setHovered(true)} onMouseDown={mouseClick}>
        {users.map((user) => renderFriendList(user, false))}
      </div>


      <Divider my="xs" style={{ paddingLeft: "1em", paddingRight: "1em" }} label={`Offline ${users.length}`} labelPosition="left" />
      <div ref={ref} onClick={() => setHovered(true)} onMouseDown={mouseClick}>
        {users.map((user) => renderFriendList(user, false))}
      </div>
    </>
  );
}
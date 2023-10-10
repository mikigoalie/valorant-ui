import { Avatar, Badge, HoverCard } from '@mantine/core';
import classes from './FriendList.module.css';
import Config from '../../config';
import { RANKS } from '../../Comps/Ranks';
import { useState } from 'react';

export default function FriendlistProfile({ hovered }: { hovered: boolean }) {
  const users = Config.ACCOUNTS.OTHER;
  const [FLDownOnline, setFLDownOnline] = useState(true);
  const [FLDownOffline, setFLDownOffline] = useState(true);

  const mouseClick = (e: any) => {
    e.preventDefault();
    console.log(e.key);
  };



  const renderFriendList = (user: any, isSelf: boolean) => {
    const color = user.state === 'Online' ? 'green'
      : user.state === 'Offline'
        ? 'dark'
        : 'orange'

    return (
      <HoverCard
        keepMounted={true}
        disabled={!hovered}
        offset={4}
        withArrow
        position="left-start"
        onPositionChange={() => console.log('POS CHANGEDS')}
        key={user.id}
        transitionProps={{ exitDuration: 300, duration: 500, transition: 'slide-right', timingFunction: "ease" }}
        shadow="md"
      >
        <HoverCard.Target>
          <div
            className={`${classes.friendListProfile}`}
            style={{
              borderLeft: `.25rem solid 
              ${user.state === 'Online'
                  ? 'green'
                  : user.state === 'Offline'
                    ? 'gray'
                    : 'orange'
                }`,
            }}
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
              <Avatar size="lg" radius="sm" src={user.image} />
              <div
                style={{
                  marginLeft: '1em',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  rowGap: "none",
                }}
              >
                <span className={`${classes.playerName} ${isSelf ? classes.selfPlayer : ''}`}>{user.name}</span>
                <div>
                  <Badge size="xs" radius="sm" color={color}>
                    {user.state}
                  </Badge>
                </div>
              </div>
            </span>
            {user?.party > 0 && (
              <div style={{ width: "auto" }}>
                <svg style={{ fill: color }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                <span style={{ color: color, margin: '.5rem', fontWeight: "700" }}>5</span>
              </div>
            )}

          </div>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <div style={{
            width: "18rem",
            height: "9rem",
            margin: ".5em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div style={{ width: "auto" }}>
              <div>
                <span>{user.name}</span>
                <span>{`#${user.tag}`}</span>

              </div>

              <span style={{ fontSize: ".8rem" }}>{isSelf ? 'VCT Masters Madrid Winner' : user.title}</span>

            </div>
            <div style={{ width: "auto" }}>

              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <img style={{ height: '3em' }} src={RANKS[user.rank || 'unranked']} alt="Radiant Rank" />
                <div style={{ marginLeft: '0.5em' }}>
                  <span style={{ display: 'block' }}>RANK</span>
                  <span style={{ display: 'block' }}>{user.rank}</span>
                </div>
              </div>
            </div>

            <div style={{ width: "auto" }}>
              XDDD
            </div>

          </div>
        </HoverCard.Dropdown>
      </HoverCard>
    );
  };


  const offlineFirends = users.filter(user => user.state === 'Offline').map((user) => renderFriendList(user, false))
  const onlineFriends = users.filter(user => user.state !== 'Offline').map((user) => renderFriendList(user, false))
  return (
    <>
      <div onMouseDown={mouseClick}>
        {renderFriendList(Config.ACCOUNTS.SELF, true)}
      </div>


      <div style={{ fontWeight: "700", marginBottom: '.5rem', marginTop: '.5rem', fontSize: ".8rem", width: "100%", paddingLeft: "1rem", paddingRight: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
        <span>{`Friends online ${onlineFriends.length}`}</span>
        <svg
          onClick={() => setFLDownOnline(!FLDownOnline)}
          style={{
            cursor: "pointer",
            fill: "white",
            transform: `${FLDownOnline ? 'rotate(180deg)' : 'rotate(0)'}`,
            transition: "all 500ms"
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
      </div>

      <div style={{ height: `${FLDownOnline ? 'auto' : '0'}`, display: `${FLDownOnline ? 'block' : 'none'}` }} onMouseDown={mouseClick}>
        {onlineFriends}
      </div>


      <div style={{ fontWeight: "700", marginBottom: '.5rem', marginTop: '.5rem', fontSize: ".8rem", width: "100%", paddingLeft: "1rem", paddingRight: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
        <span>{`Friends offline ${offlineFirends.length}`}</span>
        <svg
          onClick={() => setFLDownOffline(!FLDownOffline)}
          style={{
            cursor: "pointer",
            fill: "white",
            transform: `${FLDownOffline ? 'rotate(180deg)' : 'rotate(0)'}`,
            transition: "all 500ms"
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
      </div>
      <div style={{ display: `${FLDownOffline ? 'block' : 'none'}` }} onMouseDown={mouseClick}>
        {offlineFirends}
      </div>
    </>
  );
}
import { Avatar, Badge, HoverCard, Menu, Button, Text, Divider } from '@mantine/core';
import classes from './FriendList.module.css';
import Config from '../../config';
import { RANKS, COLOR } from '../../Comps/Ranks';
import { useState } from 'react';
import { NRYNotification } from '../../Comps/Notifs';

export default function FriendlistProfile({ hovered }: { hovered: boolean }) {
  const users = Config.ACCOUNTS.OTHER;
  const [FLDownOnline, setFLDownOnline] = useState(true);
  const [FLDownOffline, setFLDownOffline] = useState(false);
  const [contextOpened, setContextOpened] = useState<number>(-1);

  const mouseClick = (e: any) => {
    e.preventDefault();
    console.log(e.key);
  };



  const renderFriendList = (user: any, isSelf: boolean, id: number) => {
    const badgeState = user.state && (user.party > 0 ? `In Party (${user.party})` : (user.state === 'Busy' ? 'Busy' : 'Online')) || 'Offline';

    const color = badgeState === 'Online' ? 'green' :
      badgeState === 'Busy' ? 'purple' :
        badgeState.includes('In Party') ? 'orange' :
          badgeState === 'In Game' ? 'orange' : 'gray'

    return (
      <>

        <Menu disabled keepMounted={false} opened={contextOpened === id} withArrow>
          <div>
            <Menu.Target>
              <div >
                <HoverCard
                  keepMounted={false}
                  disabled={!hovered || badgeState === 'Offline'}
                  offset={4}
                  closeDelay={100}
                  withArrow
                  position="left-start"
                  onPositionChange={() => console.log('POS CHANGEDS')}
                  key={user.id}
                  transitionProps={{ exitDuration: 300, duration: 500, transition: 'slide-right', timingFunction: "ease" }}
                  shadow="md"

                >
                  <HoverCard.Target>
                    <div onContextMenu={() => setContextOpened(id)}
                      className={`${classes.friendListProfile}`}
                      style={{
                        borderLeft: badgeState === 'Offline' ? '' : `.25rem solid var(--mantine-color-${color}-filled-hover)`,
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
                            <Badge size="xs" radius="sm" color={`var(--mantine-color-${color}-9`}
                            leftSection={
                              user?.party > 0 && (
                                <svg fill='white' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                              )
                            }
                            >
                              {badgeState}
                            </Badge>
                          </div>
                        </div>
                      </span>

                          {user.state && (
                      <div>
                      <img style={{ height: '2em' }} src={RANKS[user.rank || 'unranked']} alt="Radiant Rank" />
                    </div>
                          )}

                    </div>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <div style={{
                      width: "14rem",
                      height: "7rem",
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
                        <div style={{ position: 'fixed', right: 0, top: -50, textAlign: "center" }}>
                          <Avatar
                            style={{
                              position: 'absolute',
                              padding: "0.5rem",
                              left: 0,
                              top: 0,
                              width: '100%',
                              height: '100%',
                            }}
                            size="lg"
                            radius="sm"
                            src={user.image}
                          />
                          <img style={{ position: 'relative', top: 0, left: 0 }} src='./LevelBorders/BorderPlayercard01Tier05.png' alt='Border'></img>
                          <div style={{ position: 'relative' }}>
                            <img style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 0 }} height={"30em"} src='./LevelBorders/BorderLevel01Tier01.png' alt='Level Border'></img>
                            <span style={{
                              fontSize: ".8em",
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -130%)',
                            }}>{user.level}</span>
                          </div>
                        </div>


                      </div>
                      <div style={{ width: "auto" }}>

                      <Divider style={{
                        margin: '.6rem'
                      }} size="xs" />

                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                          <img style={{ height: '3em' }} src={RANKS[user.rank || 'unranked']} alt="Radiant Rank" />
                          <div style={{ marginLeft: '0.5em' }}>
                            <Text style={{ display: 'block' }} c="dimmed">RANK</Text>
                            <span className={classes.rankDisplayLabel} style={{ color: `${COLOR[user.rank]}`, display: 'block' }}>{user.rank}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </HoverCard.Dropdown>
                </HoverCard>
              </div>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>
                <Button onClick={() => { setContextOpened(-1); NRYNotification(); }} leftSection={
                  <svg fill={'white'} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z" /></svg>
                }
                  variant="light">Send message</Button>
              </Menu.Item>
              <Menu.Item>
                <Button
                  leftSection={
                    <svg fill={'white'} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z" /></svg>
                  }

                  onClick={() => { setContextOpened(-1); NRYNotification(); }} variant="light">View profile</Button>
              </Menu.Item>

              <Menu.Divider />

              <Menu.Item>
                <Button
                  leftSection={
                    <svg fill={'white'} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM123.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L281 232.7l-15.3-36.8C248.5 154.8 208.3 128 163.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1L68.7 398 9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L116.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM550.6 153.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L530.7 224H384c-17.7 0-32 14.3-32 32s14.3 32 32 32H530.7l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3l-80-80z" /></svg>
                  }
                  onClick={() => { setContextOpened(-1); NRYNotification(); }} variant="light">Invite</Button>
              </Menu.Item>

              <Menu.Item>
                <Button
                  leftSection={
                    <svg fill={'white'} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM123.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L281 232.7l-15.3-36.8C248.5 154.8 208.3 128 163.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1L68.7 398 9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L116.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM550.6 153.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L530.7 224H384c-17.7 0-32 14.3-32 32s14.3 32 32 32H530.7l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3l-80-80zM392 0c-13.3 0-24 10.7-24 24V72c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24zm24 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v16c0 13.3 10.7 24 24 24s24-10.7 24-24V152zM392 320c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24s24-10.7 24-24V344c0-13.3-10.7-24-24-24zm24 120c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24V440z" /></svg>
                  }

                  onClick={() => { setContextOpened(-1); NRYNotification(); }} variant="light">Request to join</Button>
              </Menu.Item>
            </Menu.Dropdown>
          </div>
        </Menu>


      </>

    );
  };


  const offlineFirends = users.filter(user => !user.state).map((user, id) => renderFriendList(user, false, id))
  const onlineFriends = users.filter(user => user.state).map((user, id) => renderFriendList(user, false, id))
  return (
    <>
      <div onMouseDown={mouseClick}>
        {renderFriendList(Config.ACCOUNTS.SELF, true, -2)}
      </div>


      <div className={classes.blur} style={{
        opacity: hovered ? 100 : 0,
        visibility: hovered ? "visible" : "collapse",
        transition:"visibility 0.3s linear, opacity 0.1s linear, height 0.25s ease-in-out",
        width: "100%", height: hovered ? "4rem" : 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "5rem",
      }}>
        <span>Social</span>
        <div style={{ display: "flex", flexDirection: "row", columnGap: "1rem", justifyContent: "center" }}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "white" }} height="1em" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "white" }} height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
      
        </div>
      </div>

      <div style={{ fontWeight: "700", marginBottom: '.5rem', marginTop: '.5rem', fontSize: ".8rem", width: "100%", paddingLeft: "1rem", paddingRight: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
        <span >{`${hovered ? 'Friends online' : 'Online '} ${onlineFriends.length}`}</span>
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
        <span >{`${hovered ? 'Friends offline' : 'Offline '} ${offlineFirends.length}`}</span>
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
import { useState } from 'react';
import { Input, Badge } from '@mantine/core';
import classes from './Chat.module.css';

const validChatTypes = ['party', 'whisper'];

export default function Chat() {
  const [chatText, setChatText] = useState<string>('');
  const [chatType, setChatType] = useState('');

  const enterPressed = (e?: any) => {
    if (e?.key && e.key !== 'Enter' || !chatText) return;
    console.log(`Entered ${chatText}`);
    setChatText('');

    if (chatText[0] !== '/') {
      return;
    };

    const enteredCmd = chatText.slice(1).split(' ');

    if (validChatTypes.includes(enteredCmd[0])) {
      setChatType(enteredCmd[0])
    } else if (enteredCmd[0] === 'w' || 'whisper') {

      if (!!!enteredCmd[1]) {
        setChatType('')
      } else {
        setChatType(`DM to ${enteredCmd[1]}`)
      }

    } else {
      setChatType('')
    };
  }

  const padding = chatType.length * 10 + 30; // Adjust the multiplier as per your preference

  return (
    <div className={classes.chatDiv}>
      <Input
        placeholder="Enter a message"
        leftSection={
          chatType && (
            <Badge color="blue">
              {chatType}
            </Badge>
          )
        }
        value={chatText}
        onKeyDown={enterPressed}
        onChange={(event) => setChatText(event.currentTarget.value)}
        classNames={{
          section: classes.section,
          input: classes.input,
        }}
        styles={{
          input: { cursor: "default", paddingLeft: `${padding}px`},
        }}
        rightSectionPointerEvents="all"
        rightSection={
          <svg
            className={classes.chatSend}
            onClick={enterPressed}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
          </svg>
        }
      />
    </div>
  );
}
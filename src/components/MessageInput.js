import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { sendMessage, receiveMessage } from '../features/chat/chatSlice';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  // Handle sending of message
  const handleSend = () => {
    if (message.trim() === '') return; // Prevent sending empty messages

    const timestamp = Date.now();
    dispatch(sendMessage(message, timestamp)); // Dispatch sendMessage action

    setMessage(''); // Clear input field

    // Simulate receiving a reply after a delay
    setTimeout(() => {
      const mockReplies = [
        'Hello!',
        'How can I assist you today?',
        'That sounds great!',
        'Could you please elaborate?',
        'I am here to help.',
      ];
      const reply = mockReplies[Math.floor(Math.random() * mockReplies.length)];
      const replyTimestamp = Date.now();
      dispatch(receiveMessage(reply, replyTimestamp)); // Dispatch receiveMessage action
    }, 1000); // 1-second delay
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        padding: 2,
        borderTop: '1px solid #ccc',
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Type your message..."
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <IconButton
        color="primary"
        onClick={handleSend}
        disabled={message.trim() === ''}
        sx={{ marginLeft: 1 }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default MessageInput;

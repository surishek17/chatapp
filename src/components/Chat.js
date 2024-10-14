import React from 'react';
import { Box, Typography } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Chat = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: 4,
        border: '1px solid #ccc',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {/* Chat Header */}
      <Box sx={{ padding: 2, backgroundColor: '#1976d2', color: '#fff' }}>
        <Typography variant="h6">Chat Interface</Typography>
      </Box>

      {/* Message List */}
      <MessageList />

      {/* Message Input */}
      <MessageInput />
    </Box>
  );
};

export default Chat;

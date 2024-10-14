import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Paper } from '@mui/material';

const MessageList = () => {
  const messages = useSelector((state) => state.chat.messages);
  const currentUser = useSelector((state) => state.chat.currentUser);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: 'auto',
        padding: 2,
        backgroundColor: '#f5f5f5',
      }}
    >
      {messages.map((msg) => (
        <Box
          key={msg.id}
          sx={{
            display: 'flex',
            justifyContent: msg.sender === currentUser.id ? 'flex-end' : 'flex-start',
            mb: 1,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 1,
              maxWidth: '60%',
              backgroundColor: msg.sender === currentUser.id ? '#1976d2' : '#e0e0e0',
              color: msg.sender === currentUser.id ? '#fff' : '#000',
            }}
          >
            <Typography variant="body1">{msg.content}</Typography>
            <Typography variant="caption" align="right" display="block">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </Typography>
          </Paper>
        </Box>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default MessageList;

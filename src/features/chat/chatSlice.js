import { createSlice, nanoid } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  messages: [], // Array to hold chat messages
  currentUser: {
    id: 'user1',
    name: 'You',
  },
};

// Create chat slice
const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // Action to send a message
    sendMessage: {
      reducer(state, action) {
        state.messages.push(action.payload);
      },
      prepare(content, timestamp) {
        return {
          payload: {
            id: nanoid(),
            content,
            timestamp,
            sender: 'user1',
          },
        };
      },
    },
    // Action to receive a message
    receiveMessage: {
      reducer(state, action) {
        state.messages.push(action.payload);
      },
      prepare(content, timestamp) {
        return {
          payload: {
            id: nanoid(),
            content,
            timestamp,
            sender: 'bot', // Simulated sender
          },
        };
      },
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;

export default chatSlice.reducer;

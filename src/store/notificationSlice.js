import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Define the initial state using that type
const notificationSlice = createSlice({
    name: 'notification',
    initialState : {
        notifications : []
    },
    reducers: {
        add: (state, action) => {
            const newNotify = {
                id: nanoid(),
                type: action.payload.type,
                title: action.payload.title,
                message: action.payload.message,
            };
            return {notifications : [...state.notifications, newNotify]};
        },
        dismiss: (state, action) => {
            return {notifications : [...state.notifications.filter((notification) => {
                return notification.id !== action.payload})]};
        },
    },
});

export const { add, dismiss } = notificationSlice.actions;
export default notificationSlice.reducer;

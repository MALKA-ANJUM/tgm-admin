import React, { useState } from 'react'
import {
    Box,
    Badge,
    Tooltip,
    Popover,
    Typography,
    IconButton
  } from '@mui/material';
  import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
  import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';

  const NOTIFICATIONS = [
  {
    title: 'Your order is placed',
    description: 'waiting for shipping',
    type: 'order_placed',
    isUnRead: true,
  },
  {
    title: 'Your order is shipped',
    description: 'answered to your comment on the Minimal',
    type: 'friend_interactive',
    isUnRead: true,
  },
  {
    title: 'You have new message',
    description: '5 unread messages',
    type: 'chat_message',
    isUnRead: false,
  },
  {
    title: 'You have new mail',
    description: 'sent from Guido Padberg',
    type: 'mail',
    isUnRead: false,
  },
  {
    title: 'Delivery processing',
    description: 'Your order is being shipped',
    type: 'order_shipped',
    isUnRead: false,
  },
];
const Notification = () => {
    const [notifications, setNotifications] = useState(NOTIFICATIONS)
    const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;
    const [open, setOpen] = useState(null);
    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(null);
    };
    const handleMarkAllAsRead = () => {
        setNotifications(
        notifications.map((notification) => ({
            ...notification,
            isUnRead: false,
        }))
        );
    };
  return (
    <>
        <IconButton color={open ? 'red' : 'red'} onClick={handleOpen} sx={{ width: 40, height: 40 }}>
        <Badge badgeContent={totalUnRead} color="error">
            <NotificationsOutlinedIcon />
            </Badge>
        </IconButton>

        <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
            sx: {
                mt: 1.5,
                ml: 0.75,
                width: 360,
            },
            }}
        >
              <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              You have {totalUnRead} unread messages
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
              <DoneAllOutlinedIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
        </Popover>

      
    </>
  )
}

export default Notification

import React from 'react';
import styles from '../../assets/js/styles/components/notification/NotificationStyles';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import API from '../../api';
import { ListItem, ListItemAvatar, Avatar } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { dFormatter } from '../../assets/js/utils/scripts';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(styles);
const Notification = ({ notification }) => {
  const classes = useStyles();
  const token = useSelector(store => store.auth.token);
  const { t } = useTranslation();
  const st = dFormatter(JSON.parse('"' + notification.time + '"'));
  let message = '';
  if (notification.message.length < 50) {
    message += notification.message;
  } else {
    message += notification.message.slice(0, 50) + '...';
  }

  return (
    <>
      <ListItem
        alignItems="center"
        disableGutters
        button
        className={classes.notificationStyle}
        onClick={() => {
          if (!notification.viewed) {
            API.viewNotification({
              id: notification.id,
              token: token,
            });
          }
          window.location.href = notification.link;
        }}
      >
        <ListItemAvatar>
          <Avatar className={classes.image} src={notification.source.avatar} />
        </ListItemAvatar>
        <ListItemText
          className={classes.text}
          classes={{ primary: classes.message, secondary: classes.time }}
          primary={message}
          secondary={t(st.value + ' ' + st.key + ' ' + 'ago')}
        />
        {!notification.viewed && <div className={classes.viewDot}></div>}
        {notification.viewed && <div className={classes.unviewed}></div>}
      </ListItem>
    </>
  );
};

export default Notification;
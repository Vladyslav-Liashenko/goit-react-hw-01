import styles from'./FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.friend_list}>
        {friends.map(el => (
          <li key={el.id} className={styles.friend_list_li}>
            <FriendListItem
              isOnline={el.isOnline}
              avatar={el.avatar}
              name={el.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

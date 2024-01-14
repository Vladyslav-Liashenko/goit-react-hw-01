import './FriendList.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div className="container">
      <ul className="friend-list">
        {friends.map(el => (
          <li key={el.id} className="friend-list-li">
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

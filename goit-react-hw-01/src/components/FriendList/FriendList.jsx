import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friend-list">
        {friends.map(el => (
          <li key={el.id}>
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

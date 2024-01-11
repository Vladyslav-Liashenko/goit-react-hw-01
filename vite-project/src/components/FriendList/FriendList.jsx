import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <div>
      <ul className="friend-list">
        <li>
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
          <FriendListItem />
        </li>
      </ul>
    </div>
  );
};

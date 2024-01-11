import userData from './datа/userData.json';
import friends from './datа/friends.json';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';




function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  )
}

export default App

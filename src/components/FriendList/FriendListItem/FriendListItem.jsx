import '../FriendList.css'
export const FriendListItem = ({ isOnline, name, avatar }) => {

  const statusClasses = ['status'];
  if (isOnline) {
    statusClasses.push('is-active');
  }else {
    statusClasses.push('is-retired');
  }
  
  return (
    <div className="item">
      <img className="avatar" src={avatar} alt="Avatar" width="108" />
      <p className="name_friend">{name}</p>
      <p className={statusClasses.join(' ')}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

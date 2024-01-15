import styles from'../FriendList.module.css'
export const FriendListItem = ({ isOnline, name, avatar }) => {

  const statusClasses = [styles.status];
  if (isOnline) {
    statusClasses.push(styles.is_active);
  }else {
    statusClasses.push(styles.is_retired);
  }
  
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="108" />
      <p className={styles.name_friend}>{name}</p>
      <p className={statusClasses.join(' ')}>{isOnline ? styles.Online : styles.Offline}</p>
    </div>
  );
};

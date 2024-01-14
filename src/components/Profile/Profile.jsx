import './Profile.css'

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile container">
      <div className="description">
        <img src={image} alt="User avatar" className="avatar_profile" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className='stats_li'>
          <span className="label">Followers</span>
          <span className="value">{stats.followers}</span>
        </li>
        <li className='stats_li stats_li_2'>
          <span className="label">Views</span>
          <span className="value">{stats.views}</span>
        </li>
        <li className='stats_li'>
          <span className="label">Likes</span>
          <span className="value">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

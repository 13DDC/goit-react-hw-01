import s from "./Profile.module.css";
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => (
  <div className={s.place}>
    <div className={s.profile}>
      <img className={s.avatar} src={image} alt="User avatar" />
      <p className={s.title}>{name}</p>
      <p className={s.description}>{tag}</p>
      <p className={s.description}>{location}</p>
    </div>
    <ul className={s.stats}>
      <li className={s.statsItem}>
        <span className={s.statsItemTitle}>Followers</span>
        <span className={s.statsItemDescription}>{followers}</span>
      </li>
      <li className={s.statsItem}>
        <span className={s.statsItemTitle}>Views</span>
        <span className={s.statsItemDescription}>{views}</span>
      </li>
      <li className={s.statsItem}>
        <span className={s.statsItemTitle}>Likes</span>
        <span className={s.statsItemDescription}>{likes}</span>
      </li>
    </ul>
  </div>
);
export default Profile;

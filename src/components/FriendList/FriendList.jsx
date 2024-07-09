import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
const FriendList = ({ friends }) => {
  return (
    <ul className={s.friends}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const { data } = await axios.get('users?new=true', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWExOTExOGVkODk3ZTRmOTFmNDg3YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODYxOTg1MiwiZXhwIjoxNjM4NzA2MjUyfQ.C8kqs1N77S49fq-4EyzJ-kseAipFK324jqZS03cHRDs',
          },
        });
        setNewUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers?.users?.map((user) => {
          return (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  user.profilePic ||
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lI_0JJXTMfJEfLPT22tJtoGD-E3U9Xh6Mg&usqp=CAU'
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

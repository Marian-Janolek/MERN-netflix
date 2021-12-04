import List from '../../components/list/List';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const { data } = await axios.get(
          `lists${type ? '?type=' + type : ''}${
            genre ? '&genre=' + genre : ''
          }`,
          {
            headers: {
              token:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWExOTExOGVkODk3ZTRmOTFmNDg3YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODYxOTg1MiwiZXhwIjoxNjM4NzA2MjUyfQ.C8kqs1N77S49fq-4EyzJ-kseAipFK324jqZS03cHRDs',
            },
          }
        );
        setLists(data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, i) => {
        return <List list={list} key={i} />;
      })}
    </div>
  );
};

export default Home;

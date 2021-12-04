import './listItem.scss';
import {
  PlayArrow,
  Add,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data } = await axios.get('/movies/find/' + item, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWExOTExOGVkODk3ZTRmOTFmNDg3YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODYxOTg1MiwiZXhwIjoxNjM4NzA2MjUyfQ.C8kqs1N77S49fq-4EyzJ-kseAipFK324jqZS03cHRDs',
          },
        });
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: '/watch', movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.img} alt="" />
        {isHovered && (
          <>
            <video src={movie?.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie?.duration}</span>
                <span className="limit">{movie?.limit}</span>
                <span>{movie?.year}</span>
              </div>
              <div className="desc">{movie?.desc}</div>
              <div className="genre">{movie?.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;

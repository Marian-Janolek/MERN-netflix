import { ArrowBackOutlined } from '@material-ui/icons';
import { useLocation } from 'react-router';
import './watch.scss';
import { Link } from 'react-router-dom';

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src={movie?.video}
      />
    </div>
  );
};

export default Watch;

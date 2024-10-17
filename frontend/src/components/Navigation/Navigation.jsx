// frontend/src/components/Navigation/Navigation.jsx

import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { IconContext } from "react-icons";
import { GiBigWave } from "react-icons/gi";
import './Navigation.css';

function Navigation({ isLoaded }) {
  const navigate = useNavigate();
  const sessionUser = useSelector(state => state.session.user);

  const handleClick = () => {
    navigate('/spots/new')
  }

  return (
    <IconContext.Provider value={{ className: 'react-wave-icon' }}>
      < div className='navigation-div'>
        <ul className='navigation-ul'>
          <li className='nav-logo'>
            <NavLink
              to='/'
              className='navigation-logo'
            >
              <GiBigWave size='2cm' />
              DeepBlueBnB
            </NavLink>
          </li>
          <div className='nav-button-div'>
            {sessionUser ? (
              <button 
                onClick={handleClick}
                className='create-spot-button'
              >
                Create a New Spot
              </button>
            ) : (
              ''
            )}
            {isLoaded && (
              <li>
                <ProfileButton user={sessionUser} />
              </li>
            )}
          </div>
        </ul>
      </div>
    </IconContext.Provider>
  );
}

export default Navigation;



import React from 'react';
import { FaComment, FaHeart } from 'react-icons/fa';

const LikeSection = props => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  // Hubi in component-ga ka sareysa midaan ay props sax ah soo direyso.
  
  const { incrementLikes, numberOfLikes } = props;

  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
    
          {/* Add onClick function to <FontAwesomeIcon /> below and give it 'incrementLikes' function */}
          {/* Ku dar 'onClick' function <FontAwesomeIcon /> hoos ku qoran, kadibna sii 'incrementLikes'*/}

        <div className='like-section-wrapper'>
          <FaHeart   onClick={incrementLikes}/>
        </div>
        <div className='like-section-wrapper'>
        <FaComment />
        </div>
      </div>
    
          {/* Change this hard coded likes to like from props */}
          {/* Hoos waxaa ku qoran 100 likes oon la badali karin, waa inaa ka dhigtaa wax la badali karo adigoo istimaalaayo 'numberOfLikes' */}

      <p className='like-number'>{numberOfLikes} likes</p>
    </div>
  );
};

export default LikeSection;

// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
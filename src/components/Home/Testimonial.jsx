import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { user1, user2, user3} from '../../assets';
import { FeedbackProvider } from '../Utils';

const Testimonial = () => {
  return (
    <div className='w-full xl:w-[800px] h-[400px] mx-auto px-2'>
      <Carousel 
        infiniteLoop={true}
        showThumbs={false}
        className='w-full' >
          <FeedbackProvider 
            name="Queen Finom" 
            imageUrl={user1} 
            feedbackText="I wholeheartedly support this project and encourage others to join the green revolution. Together, we can make a significant difference for our planet." />
          <FeedbackProvider 
            name="Robin Zest" 
            imageUrl={user2} 
            feedbackText="I appreciate the transparency and updates provided by the team behind this project. It's refreshing to know exactly how my donations are being used." />
          <FeedbackProvider 
            name="Gineons Skoty" 
            imageUrl={user3} 
            feedbackText="This initiative is a win-win for everyone involved. I get to give meaningful gifts, and the planet benefits from more greenery. It doesn't get better than that!" />
      </Carousel>
    </div>
  )
}

export default Testimonial
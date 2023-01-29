import styled from 'styled-components';
import Slider from 'react-slick';
import Slide1 from '../../assets/images/slide1.png';
import Slide2 from '../../assets/images/slide2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <BannerContainer>
      <Slider {...settings}>
        <div>
          <h3>
            <img
              src={Slide1}
              alt="#!"
              style={{
                maxWidth: '100vw',
                height: 'auto',
                marginBottom: '15px',
              }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              src={Slide2}
              alt="#!"
              style={{
                maxWidth: '100vw',
                height: 'auto',
                marginBottom: '15px',
              }}
            />
          </h3>
        </div>
      </Slider>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div``;

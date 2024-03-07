import Slider from "react-slick";

const AlbumSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container"
    style={{ 
        width: 600
    }}>
      <Slider {...settings}>
          <div>
            <img
              src='https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsYnVtZXN8ZW58MHx8MHx8fDA%3D'
              className="w-full h-80"
              alt="..."
            />
          </div>
          <div >
            <img
              src='https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdlbmVyb3MlMjBtdXNpY2FsZXN8ZW58MHx8MHx8fDA%3D'
              className="w-full h-80"
              alt="..."
            />
          </div>
      </Slider>
    </div>
  );
};

export default AlbumSlider;

import React from "react";
import Slider from "react-slick";
import styles from "./VIdeoSlider.module.css";
import "../VideoSlider/slick.css";
import "../VideoSlider/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import VideoCard from "../VideoCard/VideoCard";

const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
  <span {...props}>{children}</span>
);

export default function VIdeoSlider({ videos, onChangeId, selectId }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: (
      <SlickButtonFix>
        <button className={styles.prevBtn}>
          <GrPrevious className={styles.btnIcon} />
        </button>
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <button className={styles.nextBtn}>
          <GrNext className={styles.btnIcon} />
        </button>
      </SlickButtonFix>
    ),
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>새로 올라온 콘텐츠</h2>
      <Slider {...settings}>
        {videos.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })}
      </Slider>
    </div>
  );
}

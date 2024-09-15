import Container from "@/components/sheard/Container/container";
import { images } from "@/lib";
import React from "react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";


const HeroSection: React.FC = () => {
  // Settings for the slider
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   fade: true,
  //   cssEase: "linear",
  // };

  return (
    <div
      className="relative w-full md:w-screen h-full md:h-[90vh] mx-auto bg-no-repeat"
      style={{ backgroundImage: `url(${images.hero.src})` }}
    >
      <Container>
        <div>
          <div className="flex flex-col gap-[1.5vw] animate-fadeIn">
            <div className="pt-60 space-y-3">
              <h2 className="font-bold text-white text-4xl md:text-7xl">
                Your Heading
              </h2>
              <p className="text-white text-sm md:text-base">
                Your paragraph content goes here.
              </p>
              <button className="rounded-full py-[1vw] px-[2.3vw] font-medium bg-gray-200 border-none">
                Shop Now
              </button>
            </div>
            <div>
              {/* Dynamic Carousel */}
              {/* <Slider {...settings}>
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[300px] md:h-[400px]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                ))}
              </Slider> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;

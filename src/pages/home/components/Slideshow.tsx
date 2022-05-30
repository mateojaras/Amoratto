import React, { useEffect, useRef, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import {
  Button,
  Controller,
  MainContainer,
  Slide,
  SliderShowContainer,
} from "../../../assets/styled-comp/Slider";
import ProductService from "../../../services/apialegra/ProductService";
import { CardSarahs } from "../../dashboard/components/cards/CardSarahs";
import { Product } from "../../dashboard/hooks/useDashboard";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

export const Slideshow = () => {
  const slideshow = useRef<any>(null);
  const intervalSlideShow = useRef<any>(null);
  const [listProducts, setListProducts] = useState<Array<Product>>();

  const {width } = useWindowDimensions();

  useEffect(() => {
    intervalSlideShow.current =setInterval(() => {
      next();
    }, 4000);

    // slideshow.current.addEventListener('mouseenter',()=>{
    //   clearInterval(intervalSlideShow.current);
    // })

    // slideshow.current.addEventListener('mouseleave',()=>{
    //   intervalSlideShow.current = setInterval(()=>{
    //     next()
    //   })
    // })

    ProductService.getListOfProducts(0, "", "").then((response) => {
      setListProducts(response?.data?.data);
    });
  }, []);

  const next = () => {
    if (slideshow?.current?.children.length > 0) {
      const firstElement = slideshow?.current?.children[0];
      slideshow.current.style.transition = `300ms ease-out all`;
      const sizeSlice = slideshow?.current?.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${sizeSlice}px)`;
      console.log(sizeSlice);

      const transition = () => {
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(firstElement);
      };

      slideshow.current.addEventListener("transitionend", transition);
    }
  };

  return (
    <MainContainer>
      <SliderShowContainer ref={slideshow}>
        {width < 900 ? (
          listProducts?.map((product, index) => (
            <Slide>
              <CardSarahs
                key={index}
                categories={product?.itemCategory?.name}
                name={product?.name}
                price={product?.price[0]?.price}
                image={product?.images ? product?.images[0]?.url : ""}
              />
            </Slide>
          ))
        ) : (
          <>
            <Slide>
              <div className="container-slider-grid">
                {listProducts?.map((product, index) => (
                  index < 4 && (
                    <CardSarahs
                      key={index}
                      categories={product?.itemCategory?.name}
                      name={product?.name}
                      price={product?.price[0]?.price}
                      image={product?.images ? product?.images[0]?.url : ""}
                    />
                  )
                ))}
              </div>
            </Slide>
            <Slide>
              <div className="container-slider-grid">
              {listProducts?.map((product, index) => (
                  index > 3 && index < 8 && (
                    <CardSarahs
                      key={index}
                      categories={product?.itemCategory?.name}
                      name={product?.name}
                      price={product?.price[0]?.price}
                      image={product?.images ? product?.images[0]?.url : ""}
                    />
                  )
                ))}
              </div>
            </Slide>
          </>
        )}
      </SliderShowContainer>
      <Controller>
        <Button onClick={next}>
          <AiOutlineRight />
        </Button>
      </Controller>
    </MainContainer>
  );
};

export default Slideshow;

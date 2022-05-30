import styled from "styled-components";


export const MainContainer = styled.div`
position:relative;

`;

export const SliderShowContainer = styled.div`
  display: flex;
`;

export const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 2;
  height: 360px;
  margin-bottom: 3rem;
  @media(max-width: 960px){
        width: 95%;
		height: 100%;
		img{
			object-fit: cover cover;
        width: auto !important;
        height: 30rem !important;
    }
    }
`;

export const Controller = styled.div`
	position: absolute;
	top: 0;
	z-index: 3;
	width: 100%;
	height: 100%;
	
`;

export const Button = styled.div`
pointer-events: all;
position: absolute;
transition: .3s ease all;
width: 5rem;
height: 100%;
right: 0;
display: flex;
flex-direction: column;
justify-content: center;
svg{
	height: 5rem;
	width: 5rem;
}
`;

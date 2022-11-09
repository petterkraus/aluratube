import BannerImg from '../assets/banner.png'

import styled from "styled-components";

const StyledBanner = styled.div`
  /* flex: 1; */
  width: 100%;
  /* overflow: hidden; */
  img {
    /* aspect-ratio: 16/9; */
    /* font-weight: 500; */
    /* object-fit: cover; */
    width: 100%;
    /* max-width: 210px; */
    /* height: auto; */
  }
`;

export default function Banner() {
    return (
        <StyledBanner>
            <img src={BannerImg} alt='banner' />
        </StyledBanner>
    )
}

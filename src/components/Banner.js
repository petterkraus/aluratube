import config from "../../config.json";

import styled from "styled-components";

const StyledBanner = styled.div`
 background-image: url(${({ bg }) => bg}});
 height: 230px;
 background-position: center;
 background-repeat: none;
 background-size: cover; 
  
`;

export default function Banner() {
    return (
        <StyledBanner bg={config.bg} />
    )
}

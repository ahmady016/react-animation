import posed from "react-pose";
import styled from "styled-components";

const box = posed.div( ({ config }) => config );

const Box = styled(box)`
  position: relative;
  ${ props => `
    width: ${props.size}px;
    height: ${props.size}px;
    top: ${props.top || 0 }px;
    left: ${props.offset ? `calc(${props.offset} - ${props.size / 2}px)` : '0'} ;
    background-color: ${props.backColor || 'none' };
  `}
`;

export default Box;
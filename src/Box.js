import posed from "react-pose";
import styled from "styled-components";

const box = posed.div( ({ config }) => config );

const Box = styled(box)`
  position: absolute;
  ${ props => `
    height: ${props.size}px;
    width: ${props.size}px;
    top: ${props.top || 0}px;
    left: calc(${props.offset} - ${props.size / 2}px);
  `}
`;

export default Box;
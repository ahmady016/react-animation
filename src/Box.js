import posed from "react-pose";
import styled from "styled-components";

const box = posed.div({
  top: {
    y: 20,
    scale: 1,
    background: "#428cb2"
  },
  bottom: {
    y: 360,
    scale: 2,
    background: "#396e94"
  }
});

const Box = styled(box)`
  position: absolute;
  ${props => `
    height: ${props.size}px;
    width: ${props.size}px;
    left: calc(50% - ${props.size / 2}px);
  `}
`;

export default Box;
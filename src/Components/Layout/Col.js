import styled from "styled-components";
import { baseWidth, numberType } from "../../constants/styles";

const Col = styled.div`
  -webkit-box-flex: 0;
  ${(props) => `ms-flex: 0 0 ${props.size * baseWidth}%`};
  ${(props) => `flex: 0 0 ${props.size * baseWidth}%`};
  max-width: ${(props) => props.size * baseWidth}%;
`;

Col.propTypes = {
  size: numberType,
};

export { Col };

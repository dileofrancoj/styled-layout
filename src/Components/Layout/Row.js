import styled from "styled-components";
import PropTypes from "prop-types";
import { atomicPX, numberType, justifyValues } from "../../constants/styles";

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  ${(props) => props.justify && `justify-content : ${props.justify}`};
  ${(props) => props.mt && `margin-top : ${atomicPX * props.mt}px`};
  ${(props) => props.mb && `margin-bottom : ${atomicPX * props.mb}px`};
  ${(props) => props.mr && `margin-right : ${atomicPX * props.mr}px`};
  ${(props) => props.ml && `margin-left : ${atomicPX * props.ml}px`};
  ${(props) => props.m && `margin : ${atomicPX * props.m}px`};
  }}
`;

Row.propTypes = {
  justify: PropTypes.oneOf(justifyValues),
  mt: numberType,
  mb: numberType,
  mr: numberType,
  ml: numberType,
  m: numberType,
};

export { Row };

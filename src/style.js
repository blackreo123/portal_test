import styled from "styled-components";
import { hexToCSSFilter } from "hex-to-css-filter";

const Button = styled.button`
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-block;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
  border-style: none;
  background-color: ${(props) => props.bgColor};

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-shadow: 0rem 0.2rem 0.1rem rgba(0, 0, 0, 0.35);
  &:hover {
    box-shadow: 0rem 0.2rem 0.1rem rgba(0, 0, 0, 0.35);
  }

  &:active {
    transform: ${(props) => (!props.disabled ? `translateY(0.05rem)` : ``)};
    box-shadow: ${(props) =>
      !props.disabled ? `0rem 0rem 0.4rem rgba(0, 0, 0, 0.2)` : ``};
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: white;
`;

const ButtonDisableBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: ${(props) => props.display};
  z-index: 2;
  border-radius: inherit;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Icon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
  background-color: ${hexToCSSFilter("#ffffff")};
`;

export { Button, ButtonContent, ButtonDisableBox, Icon };

"use client";
import styled from "styled-components";

type Props = {
  variant?: string;
};

export const ChannelTitle = styled.div<Props>`
  color: #fff;
  font-size: ${(props) =>
    props.variant === "font"
      ? "0.8rem"
      : props.variant === "time"
      ? "0.7rem"
      : "1rem"};
  margin-top: ${(props) =>
    props.variant === "font"
      ? "0.5rem"
      : props.variant === "time"
      ? "10px"
      : ""};
  text-align: ${(props) => (props.variant === "time" ? "center" : "")};
`;

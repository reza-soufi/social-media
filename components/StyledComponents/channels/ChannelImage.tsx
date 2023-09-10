"use client";
import styled from "styled-components";

type Props = {
  variant?: string;
};

export const ChannelImage = styled.div<Props>`
  position: relative;
  width: ${(props) => (props.variant === "header" ? "50px" : "60px")};
  min-width: ${(props) => (props.variant === "header" ? "50px" : "60px")};
  min-height: ${(props) => (props.variant === "header" ? "50px" : "60px")};
  height: ${(props) => (props.variant === "header" ? "50px" : "60px")};
  border-radius: 50%;
  object-fit: cover;
`;

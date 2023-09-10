"use client";
import styled from "styled-components";
import { EmptyStyles } from "./EmptyStyles";
import Image from "next/image";

const Div = styled.div`
  margin-top: 20px;
`;

const EmptyList = () => {
  return (
    <EmptyStyles>
      <Image src={"/images/empty.png"} width={128} height={95} alt={"empty"} />
      <Div> موردی پیدا نشد </Div>
    </EmptyStyles>
  );
};

export default EmptyList;

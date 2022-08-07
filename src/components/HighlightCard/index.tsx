import React from "react";
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

interface Props {
    title: string;
    amount: string;
    lastTransaction: string;
}

export function HighlightCard({...props}: Props) {
  return (
    <Container>
      <Header>
        <Title>{props.title}</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>{props.amount}</Amount>
        <LastTransaction>{props.lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}

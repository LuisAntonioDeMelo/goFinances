import React from "react";
import { HighlightCard } from "../../HighlightCard";


import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
       
        <UserInfo>
          <Photo source={{uri: 'https://avatars.githubusercontent.com/u/34778498?v=4'}} />
          <User>
            <UserGreeting>Olá</UserGreeting>
            <UserName>Luis</UserName>
          </User>
        </UserInfo>

        <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards >
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}

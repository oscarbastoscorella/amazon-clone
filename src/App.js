import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Header />
      <Navigation />
      <Main>
        <Hero>Amazon's layout clone</Hero>
        <HeroCardContainer>
          <Card order={1} />
          <Card order={2} />
          <Card order={3} />
          <Card order={4} />
          <BigCard order={6} />
          <Card order={7} />
          <Card order={8} />
        </HeroCardContainer>
        <CardContainer>
          <Stripe />
          <Stripe />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: visible;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  min-height: 60px;
  background: #131921;
`;

const Navigation = styled.nav`
  width: 100%;
  min-height: 40px;
  background: #232f3e;
`;

const Main = styled.main`
  height: 100%;
  max-width: 1500px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const Hero = styled.section`
  height: 600px;
  background: linear-gradient(to bottom, #291955, transparent 100%);
  display: flex;
  justify-content: center;
  color: white;
  box-sizing: border-box;
  padding: 85px 0;
  font-weight: 900;
  font-size: 2rem;
`;

const HeroCardContainer = styled.section`
  margin-top: -370px;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
`;

const Card = styled.div`
  flex: 1 0 290px;
  min-height: 420px;
  min-width: 290px;
  background: white;
  order: ${(props) => props.order};
  @media (max-width: 1276px) {
    order: ${(props) => props.order + 2};
  }
`;

const BigCard = styled.div`
  flex: 2 0 600px;
  min-height: 420px;
  background: black;
  order: ${(props) => props.order};
  @media (max-width: 1276px) {
    order: ${(props) => props.order - 1};
  }
`;

const CardContainer = styled.section`
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
`;

const Stripe = styled.div`
  background: white;
  min-height: 285px;
  flex: 1 0 100%;
`;

const Footer = styled.footer`
  margin-top: 35px;
  width: 100%;
  min-height: 200px;
  background: #131921;
`;

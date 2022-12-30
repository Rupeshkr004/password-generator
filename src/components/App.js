import Toast from './Toast';
import Button from './Button';
import CharacterLength from './CharacterLength';
import Character from './Characters';
import Header from './Header';
import Password from './Password';
import Slider from './Slider';
import Strength from './Strength';
import { BottomWrapper, Card, CardWrapper, Home, Wrapper } from './Wrappers';
import SocialLinks from './SocialLinks';

const App = () => {
  return (
    <Home>
      <Wrapper>
        <Card>
          <CardWrapper>
            <Header />
            <Password />
            <BottomWrapper>
              <CharacterLength />
              <Slider />
              <Character />
              <Strength />
              <Button />
            </BottomWrapper>
          <SocialLinks />
          </CardWrapper>
        </Card>
      </Wrapper>
      <Toast />
    </Home>
  );
}

export default App;

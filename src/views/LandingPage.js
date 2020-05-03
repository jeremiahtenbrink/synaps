import React, {useEffect} from 'react';
import styled from 'styled-components';
import {SynapsButton} from '../components';
import SvgSynapsLogoText from '../svgComponents/SvgSynapsLogoText.js';
import {SvgBrainPaths} from '../svgComponents';
import {MEDIA_QUERIES, THEME} from '../utilities/constants.js';

/**
 * Landing Page
 * @category Views
 * @component
 * @example return (<LandingPage />);
 */
export const LandingPage = ({getHooks}) => {
  const {changePath, theme} = getHooks();

  useEffect(() => {
    debugger;
  }, [changePath]);

  const handleClick = name => {
    if (name === 'SignIn') {
      changePath('/signIn');
    } else {
      changePath('/signup');
    }
  };

  return (
    <StyledLandingPage data-testid={'landing-page'}>
      <Mobile data-testid={'landing-page-mobile'}>
        <Header>
          <SvgBrainPaths
            svgFill={THEME.COLOR_WHITE}
            strokeWidth={'1'}
            stroke={THEME.COLOR_WHITE}
            svgWidth={'100%'}
            height={'100%'}
          />
          <SvgSynapsLogoText fill={theme.themeState.navBarLight} />
        </Header>
        <ButtonContainer>
          <SynapsButton
            text={'Login'}
            size={'large'}
            type={'primary'}
            onClick={() => handleClick('SignIn')}
            color={'#4CB69F'}
            background={'transparent'}
            border={'2px solid #4CB69F'}
            borderRadius={'15px'}
            fontWeight={'bold'}
            fontSize={'25px'}
            width={'204px'}
            height={'62px'}
          />
          <SynapsButton
            text={'Sign Up'}
            size={'large'}
            type={'darkgray'}
            onClick={() => handleClick('SignUp')}
            color={'#F6F5F3'}
            background={'#4CB69F'}
            border={'2px solid #4CB69F'}
            borderRadius={'15px'}
            fontWeight={'bold'}
            fontSize={'25px'}
            width={'204px'}
            height={'62px'}
          />
        </ButtonContainer>
      </Mobile>
      <Desktop>
        {/* {I still need to add in desktop view markup here} */}
      </Desktop>
    </StyledLandingPage>
  );
};

const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 75px auto 0 auto;
  @media ${MEDIA_QUERIES.tablet} {
    display: none;
  }
`;
const Desktop = styled.div`
  display: none;
  @media ${MEDIA_QUERIES.tablet} {
    display: block;
  }
`;

const Header = styled.div`
  margin: 0 auto;
`;

const StyledLandingPage = styled.div`
  margin: 75px auto 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  height: 159px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

import './css/homepage.css';
import React from 'react';
import image1 from '../images/carlogo.jpeg';
import image2 from '../images/carfix3.png';
import {
  Background3,
  HeaderText,
  HeaderText2,
  SlideControl,
  SlideControl2,
  HeaderTextContainer,
  Action1,
  Section,
  FlexItem1,
  FlexItem3,
  FlexItem2,
  Action2,
  Action3,
  Icon,
  Title,
  TextStyle,
  TextStyle2,
  BrandImage,
  DivCenter,
} from './styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faChevronRight,
  faChevronLeft,
  faCar,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Services from '../ServiceCard/servicesDisplay';
// import Cards from '../ServiceCard/Cards';


const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <SectionTitle text1="Why" text2="Choose Us" />
      <WhyChooseUs />
      <SectionTitle text1="How" text2="We Work" />
      <HowWeWork />
      <SectionTitle text1="Services" text2="We Provide" />
      {/* <Cards /> */}
      <Services />
      <SectionTitle text1="We Look " text2="After All Brands" />
      <Brands />
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <Background3>
        <HeaderTextContainer>
          <HeaderText>
            {' '}
            <h1>
              providing a professional <br /> &amp; reliable service
            </h1>
          </HeaderText>
          <HeaderText2>
            {' '}
            We'll take your car to the best independent garages, hand picked for
            you.{' '}
          </HeaderText2>
          <ActionButton />
        </HeaderTextContainer>
        <SlideControl>
          <FontAwesomeIcon icon={faChevronLeft} size="2x" color="blue" />
        </SlideControl>
        <SlideControl2>
          <FontAwesomeIcon icon={faChevronRight} size="2x" color="blue" />
        </SlideControl2>
        {/* <FontAwesomeIcon icon={faChevronCircleRight} size='3x' color='white'/> */}
      </Background3>
    </>
  );
};

const ActionButton = () => {
  return (
    <Action1>
      <Link to="/services">
        {' '}
        <h6>
          FIND OUT MORE{' '}
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </h6>{' '}
      </Link>
    </Action1>
  );
};

export const SectionTitle = ({ text1, text2 }) => {
  return (
    <Title>
      <h3>
        {' '}
        <TextStyle className="bold">{text1}</TextStyle>{' '}
        <TextStyle2> {text2} </TextStyle2>{' '}
      </h3>
    </Title>
  );
};

const WhyChooseUs = () => {
  return (
    <>
      <Section className="sectionpadding">
        <FlexItem1 className="flex1">
          <FontAwesomeIcon icon={faCar} size="4x" color="white" />
          <h4> Expert Mechanics </h4>
          <p className="textColor">
            Most of the vehicles get damaged just because of maintenance neglect
            you take.
          </p>
          <Action3>
            <Link to="/services">
              <h6>
                FIND OUT MORE
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </h6>
            </Link>
          </Action3>
        </FlexItem1>

        <FlexItem2 className="flex2">
          <Icon src={image2} alt="" />
          <h4> Reasonable price </h4>
          <p className="textColor">
            Receiving offers through Autobutler guarantees your certainty your
            car. fixed if the mechanic.
          </p>
          <Action2>
            <Link to="/pricing">
              <h6>
                FIND OUT MORE
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </h6>
            </Link>
          </Action2>
        </FlexItem2>

        <FlexItem1 className="flex1">
          <FontAwesomeIcon icon={faCar} size="4x" color="white" />
          <h4> Fast Feature Delivery </h4>
          <p className="textColor">
            If the mechanic discovers other issues with your car while it's in
            the garage he will call.
          </p>
          <Action3>
            <Link to="/services">
              <h6>
                FIND OUT MORE
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </h6>
            </Link>
          </Action3>
        </FlexItem1>
      </Section>
    </>
  );
};

const HowWeWork = () => {
  return (
    <Section>
      <FlexItem3>
        <FontAwesomeIcon icon={faCar} size="4x" color="#2798d3" />
        <h4 className="textStyle2"> Choose your Repairs </h4>
        <p className="textStyle">
          Annual servicing and is recommended everytime miles or every 12
          months.
        </p>
      </FlexItem3>

      <FlexItem3>
        <FontAwesomeIcon icon={faCar} size="4x" color="#2798d3" />
        <h4 className="textStyle2"> Pick a Date, Time &amp; Location </h4>
        <p className="textStyle">
          Our full service is what most people would think of as annual service
        </p>
      </FlexItem3>

      <FlexItem3>
        <FontAwesomeIcon icon={faCar} size="4x" color="#2798d3" />
        <h4 className="textStyle2"> Sit Back and Relax! </h4>
        <p className="textStyle">
          Everytime miles or every 12 months. It includes 67 individual checks
          on your car
        </p>
      </FlexItem3>
    </Section>
  );
};

const Brands = () => {
  return (
    <DivCenter>
      <BrandImage src={image1} alt="" />
    </DivCenter>
  );
};
export default Homepage;

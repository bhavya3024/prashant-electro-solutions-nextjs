import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "/pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "/pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "/pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "/pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "/pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "/pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "/pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "/pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "/pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "/pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "/pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "/pages-sections/Components-Sections/SectionDownload.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import exampleStyles from "/styles/jss/nextjs-material-kit/pages/componentsSections/exampleStyle.js";



const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(exampleStyles);

const REPAIR_ITEMS = [
  {
      name: 'Fridge',
      src: '/img/fridge.webp',
  },
  {
      name: 'Washing Machine',
      src: '/img/washing-machine.webp',
  },
  {
      name: 'Microwave',
      src: '/img/microwave.webp',
  },
  {
      name: 'Geyser',
      src: '/img/geyser.webp',
  },
  {
      name: 'RO',
      src: '/img/RO.webp',
  },
  {
      name: 'Mixi-Grinder',
      src: '/img/mixi-grinder.webp',
  },
  {
      name: 'Press',
      src: '/img/press.png',
  },
  {
      name: 'Pedestal Fan',
      src: '/img/pedestal-fan.webp',
  },
  {
      name: 'Cooler',
      src: '/img/cooler.webp',
  },
  {
      name: 'House Wiring',
      src: '/img/house-wiring.jpeg',
  },
  {
      name: 'Air Conditioner',
      src: '/img/ac.webp',
  },
  {
      name: 'Induction Cooker',
      src: '/img/ic.webp',
  },
  {
      name: 'Kettle',
      src: '/img/kettle.webp',
  },
  {
      name: 'Heater',
      src: '/img/heater.webp',
  },
  {
      name: 'LED TV',
      src: '/img/led-tv.png',
  },
  {
      name: 'Ceiling Fan',
      src: '/img/ceiling-fan.webp',
  },
  {
      name: 'Inverter',
      src: '/img/inverter.jpg'
  },
  {
      name: 'Home Theatre',
      src: '/img/home-theatre.webp'
  },
  {
      name: 'Concealed Lighting',
      src: '/img/lighting.jpeg'
  },
  {
      name: 'Chimney',
      src: '/img/chimney.webp'
  },
  {
      name: 'Toaster',
      src: '/img/toaster.jpg'
  }
];

export default function Components(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="PRASHANT ELECTRO SOLUTIONS"
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        className="header-title"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image="/img/prashant-electro-solutions.jpg">
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <h3 className="info">Established in 2015, Prashant Electro Solutions deals in electrical
          and electronics repair of following electrical appliances such as:</h3>
          <GridContainer>
            {REPAIR_ITEMS.map((item, index) =>
            <GridItem key={`${index}_item`} xs={12} sm={12} md={4}>
              <img className={`${classes2.imageRounded} item-image`} width={200} height={200} src={item.src} />
              <p className="item-name">{item.name}</p>
            </GridItem>
            )}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

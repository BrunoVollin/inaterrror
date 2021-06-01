import React, { useState, useEffect } from "react";
import calcLeds, { randomNumber, sleep } from "../../utils/leds";
import {
  Wrapper,
  LedGreen,
  LedYellow,
  LedSalmon,
  LedRed,
  LedGreenYelow,
  Button,
  Leds,
  DecorationRight,
  DecorationLeft,
  Alert
} from "./style";

export default function Emf() {
  const [leds, setLeds] = useState([false, false, false, false, false]);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (play) {
        setLeds(calcLeds);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [play]);

  const runEmf = () => {
    setLeds([false, false, false, false, false]);
    setPlay(!play);
  };

  return (
    <Wrapper>
      <Leds>
        <LedGreen className="led" ledOn={leds[0]} />
        <LedGreenYelow className="led" ledOn={leds[1]} />
        <LedYellow className="led" ledOn={leds[2]} />
        <LedSalmon className="led" ledOn={leds[3]} />
        <LedRed className="led" ledOn={leds[4]} />
      </Leds>
      <Alert fiveAlert={leds[4]}>RUN</Alert>

      <Button play={play} onClick={() => runEmf()}>
        PRESS
      </Button>

      <DecorationRight />
      <DecorationLeft />
    </Wrapper>
  );
}

import React, { Fragment } from "react";
import { animated, useSpring } from "react-spring";

export default function TheDice(props) {
  let { dice } = props;
  const [propsDice, set] = useSpring(() => ({
    xyz: [1080,1080,1080],
    from: {
      xyz: [0, 0, 0],
    },
    config: { duration: 1000 },
    reset: true,
  }));
  set({ xyz: [1080, 1080, 1080] });

  return (
    <Fragment>
      <div className="scene ml-4">
        <animated.div className="cube"
          style={{transform: propsDice.xyz.interpolate((x,y,z) => `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
          }}>
          <div className="cube__face front">
            <img src={dice.hinhAnh} style={{ width: "100%" }} alt=""/>
          </div>
          <div className="cube__face back">
            <img src="./images/ga.jpg" style={{ width: "100%" }} alt=""/>
          </div>
          <div className="cube__face right">
            <img src="./images/tom.jpg" style={{ width: "100%" }}alt="" />
          </div>
          <div className="cube__face left">
            <img src="./images/cua.jpg" style={{ width: "100%" }}alt="" />
          </div>
          <div className="cube__face top">
            <img src="./images/ca.jpg" style={{ width: "100%" }} alt=""/>
          </div>
          <div className="cube__face bottom">
            <img src="./images/nai.jpg" style={{ width: "100%" }}alt="" />
          </div>
        </animated.div>
      </div>
    </Fragment>
  );
}

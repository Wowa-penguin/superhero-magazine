import MotionCronical from "./MotionCronical";
import MotionUnbreakable from "./MotionUnbreakable";
import MotionSuper from "./MotionSuper";
import MotionWatchmen from "./MotionWatchmen";

const Start = ({ Chronicle, Unbreakable, Super, Watchmen }) => {
  if (
    Chronicle === true &&
    Unbreakable === false &&
    Super === false &&
    Watchmen === false
  ) {
    return (
      <>
        <MotionCronical Chronicle={Chronicle} />
      </>
    );
  } else if (
    Chronicle === false &&
    Unbreakable === true &&
    Super === false &&
    Watchmen === false
  ) {
    return (
      <>
        <MotionUnbreakable Unbreakable={Unbreakable} />
      </>
    );
  } else if (
    Chronicle === false &&
    Unbreakable === false &&
    Super === true &&
    Watchmen === false
  ) {
    return (
      <>
        <MotionSuper Super={Super} />
      </>
    );
  } else if (
    Chronicle === false &&
    Unbreakable === false &&
    Super === false &&
    Watchmen === true
  ) {
    return (
      <>
        <MotionWatchmen Watchmen={Watchmen} />
      </>
    );
  } else if (
    Chronicle === false &&
    Unbreakable === false &&
    Super === false &&
    Watchmen === false
  ) {
    return (
      <>
        <div className="h-[80%] w-full">
          <MotionCronical Chronicle={Chronicle} />
          <MotionUnbreakable Unbreakable={Unbreakable} />
          <MotionSuper Super={Super} />
          <MotionWatchmen Watchmen={Watchmen} />
        </div>
      </>
    );
  }
};

export default Start;

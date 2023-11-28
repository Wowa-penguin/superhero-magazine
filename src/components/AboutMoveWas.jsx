import { aboutMoveText } from "../constants/index";
import { WatchmenMynd } from "../assets/index.js";

const AboutMoveWas = () => {
  return (
    <div className="border-solid border-2 h-full rounded-lg p-2">
      <div className="flex justify-between">
        <div className="flex flex-row gap-4">
          <div className="w-[40%] h-full">
            <h2 className="text-[18px]">{aboutMoveText.wÖðruvísiTitil}</h2>
            <p className="text-[14px]">{aboutMoveText.wTexsti}</p>
          </div>

          <div className="w-[40%] h-full text-[14px]">
            <h2 className="text-[18px]">{aboutMoveText.wÖðruvísiTitil}</h2>
            <p className="text-[14px]">{aboutMoveText.wÖðruvísi}</p>
          </div>
          <div className="w-[20%] h-[100px]">
            <img src={WatchmenMynd} alt="error" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMoveWas;

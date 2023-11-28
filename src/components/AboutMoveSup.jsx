import { aboutMoveText } from "../constants/index";
import { SuperMynd } from "../assets/index.js";

const AboutMoveSup = () => {
  return (
    <div className="border-solid border-2 h-full rounded-lg p-2">
      <div className="flex justify-between">
        <div className="flex flex-row gap-4">
          <div className="w-[50%] h-full">
            <h2 className="text-[18px]">{aboutMoveText.sÖðruvísiTitil}</h2>
            <p className="text-[14px]">{aboutMoveText.sTexsti}</p>
          </div>

          <div className="w-[30%] h-full text-[14px]">
            <h2 className="text-[18px]">{aboutMoveText.sÖðruvísiTitil}</h2>
            <p className="text-[14px]">{aboutMoveText.sÖðruvísi}</p>
          </div>
          <div className="w-[20%] h-[100px]">
            <img src={SuperMynd} alt="error" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMoveSup;
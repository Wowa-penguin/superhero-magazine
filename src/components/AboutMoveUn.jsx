import { aboutMoveText } from "../constants/index";
import { UnbreakableMynd } from "../assets/index.js";

const AboutMoveUn = () => {
  return (
    <div className="border-solid border-2 h-full rounded-lg p-2">
      <div className="flex justify-between">
        <div className="flex flex-row gap-4">
          <div className="w-[44%] h-full">
            <h2 className="text-[18px]">{aboutMoveText.umMyndinaU}</h2>
            <p className="text-[14px]">{aboutMoveText.uTexsti}</p>
          </div>

          <div className="w-[36%] h-full text-[14px]">
            <h2 className="text-[18px]">{aboutMoveText.uÖðruvísiTitil}</h2>
            <p className="text-[14px]">{aboutMoveText.uÖðruvísi}</p>
          </div>
          <div className="w-[20%] h-[100px]">
            <img src={UnbreakableMynd} alt="error" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMoveUn;

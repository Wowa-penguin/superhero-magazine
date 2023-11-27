import { styles } from "../styles";
import { aboutMoveText } from "../constants/index";
import { ChronicleMynd } from "../assets/index.js";

const AboutMove = () => {
  return (
    <div className="border-solid border-2 h-full rounded-lg p-2">
      <div className="flex justify-between">
        <div className="flex flex-row gap-4">
          <div className="w-[40%] h-full text-[14px]">
            <h2>{aboutMoveText.cÖðruvísiTitil}</h2>
            <p>{aboutMoveText.cTexsti}</p>
          </div>

          <div className="w-[40%] h-full text-[14px]">
            <h2>{aboutMoveText.cÖðruvísiTitil}</h2>
            <p>{aboutMoveText.cÖðruvísi}</p>
          </div>
          <div className="w-[20%] h-[100px]">
            <img src={ChronicleMynd} alt="error" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMove;

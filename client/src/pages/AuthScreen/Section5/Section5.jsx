import SectionRow from "../../../UI/SectionRow";
import Questions from "./Questions";

export default function Section5() {
  return (
    <SectionRow>
      <div className="flex flex-col items-center gap-4 flex-1">
        <h2 className="font-extrabold text-5xl">Frequently Asked Questions</h2>
        <div className="w-full my-10">
          <Questions />
        </div>
      </div>
    </SectionRow>
  );
}

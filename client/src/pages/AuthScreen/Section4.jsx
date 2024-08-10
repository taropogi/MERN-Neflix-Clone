import SectionRow from "../../UI/SectionRow";

export default function Section4() {
  return (
    <SectionRow reverse={true}>
      <div className=" flex-1 ">
        <div className="relative">
          <img src="/kids.png" alt="Stranger Things Image" className="mt-4" />
        </div>
      </div>
      <div className="flex-1 md:text-left text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
          Create profiles for kids
        </h2>
        <p className="text-lg md:text-2xl">
          Send kids on adventures with their favorite characters in a space made
          just for them-- free with your membership
        </p>
      </div>
    </SectionRow>
  );
}

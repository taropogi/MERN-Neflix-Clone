import SectionRow from "../../UI/SectionRow";

export default function Section4() {
  return (
    <SectionRow reverse={true}>
      <div className=" flex-1 ">
        <div className="relative">
          <img
            src="/stranger-things-lg.png"
            alt="Stranger Things Image"
            className="mt-4"
          />
          <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
            <img
              src="/stranger-things-sm.png"
              alt="Image"
              className="h-10 sm:h-20"
            />
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-0">
                <span className="text-md lg:text-lg font-bold">
                  Stranger Things
                </span>
                <span className="text-sm text-blue-600">Downloading...</span>
              </div>
              <img
                src="/download-icon.gif"
                alt="Download Icon"
                className="h-12"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 md:text-left text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
          Download your shows to watch offline
        </h2>
        <p className="text-lg md:text-xl">
          Save your favorites easily and always have something to watch.
        </p>
      </div>
    </SectionRow>
  );
}

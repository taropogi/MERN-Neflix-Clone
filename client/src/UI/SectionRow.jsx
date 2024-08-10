export default function SectionRow({ reverse = false, children }) {
  return (
    <div className="py-10 bg-black text-white">
      <div
        className={`flex max-w-6xl items-center justify-center md:flex-row flex-col${
          reverse ? "-reverse" : ""
        } px-4 md:px-2 mx-auto`}
      >
        {children}
      </div>
    </div>
  );
}

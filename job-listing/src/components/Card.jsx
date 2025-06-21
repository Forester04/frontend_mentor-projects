import data from "/data";
import clsx from "clsx";
export default function Card() {
  const featuredBorder =
    "flex flex-col md:flex-row md:justify-between md:items-center bg-white p-4 rounded-md shadow-md";
  const classname = clsx(featuredBorder, "border-l-4 border-cyan-600");
  const jobDetails = data.map((job) => {
    return (
      <div key={job.id} className={job.featured ? classname : featuredBorder}>
        <div className="md:flex gap-4 items-center">
          <img
            src={job.logo}
            alt="Company's Logo"
            className="-mt-10 md:mt-0 w-[50px] md:w-[100px]"
          />
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-4 items-center">
              <h1 className="font-bold text-[15px] text-cyan-500">
                {job.company}
              </h1>
              <div className="flex gap-2">
                <span
                  className={
                    job.new
                      ? "bg-cyan-700 p-1 text-xs text-white text-center font-bold rounded-full"
                      : ""
                  }
                >
                  {job.new ? "NEW!" : ""}
                </span>
                <span
                  className={
                    job.featured
                      ? "bg-black text-white text-xs font-bold uppercase p-1 rounded-full"
                      : ""
                  }
                >
                  {job.featured ? "Featured" : ""}
                </span>
              </div>
            </div>
            <h2 className="text-base font-bold cursor-pointer hover:text-cyan-500">
              {job.position}
            </h2>
            <div className="flex  gap-3 border-b md:border-0">
              <p className="text-[15px] text-nowrap">{job.postedAt}</p>
              <p className="-mt-1 ">.</p>
              <p className="text-[15px] text-nowrap">{job.contract}</p>
              <p className="-mt-1">.</p>
              <p className="text-[15px] text-nowrap">{job.location}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <div className="bg-cyan-100 self-start text-cyan-700 font-bold p-1 text-sm rounded-md cursor-pointer hover:text-white hover:bg-cyan-600">
            {job.role}
          </div>
          <div className="flex gap-2">
            {job.tools.map((tool) => {
              return (
                <div
                  key={tool}
                  className="bg-cyan-100 p-1 text-cyan-700 self-start text-sm font-bold rounded-md cursor-pointer hover:text-white hover:bg-cyan-600"
                >
                  {tool}
                </div>
              );
            })}
          </div>
          <div className="flex gap-2">
            {job.languages.map((language) => {
              return (
                <div
                  key={language}
                  className="bg-cyan-100 self-start rounded-md p-1 text-sm text-cyan-700 font-bold cursor-pointer hover:text-white hover:bg-cyan-600"
                >
                  {language}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return <div className="flex flex-col gap-10 md:gap-4">{jobDetails}</div>;
}

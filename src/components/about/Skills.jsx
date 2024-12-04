import React from "react";

const skillsContent = [
  { skillClass: "p36", skillPercent: "70", skillName: "HTML" },
  { skillClass: "p80", skillPercent: "80", skillName: "TYPESCRIPT" },
  { skillClass: "p40", skillPercent: "75", skillName: "CSS" },
  { skillClass: "p65", skillPercent: "65", skillName: "NESTJS" },
  { skillClass: "p72", skillPercent: "72", skillName: "REACTJS" },
  { skillClass: "p72", skillPercent: "76", skillName: "NEXTJS" },
  { skillClass: "p85", skillPercent: "63", skillName: "SOLIDITY" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;

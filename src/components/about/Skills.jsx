import React from "react";

const skillsContent = [
  { skillClass: "p36", skillPercent: "36", skillName: "HTML" },
  { skillClass: "p80", skillPercent: "80", skillName: "TYPESCRIPT" },
  { skillClass: "p40", skillPercent: "40", skillName: "CSS" },
  { skillClass: "p85", skillPercent: "85", skillName: "SOLIDITY" },
  { skillClass: "p65", skillPercent: "65", skillName: "NODEJS" },
  { skillClass: "p72", skillPercent: "72", skillName: "REACT" },
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

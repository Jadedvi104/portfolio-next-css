import React from "react";

const experienceContent = [
  {
    year: "   2019 - 2020",
    position: "Senior Marketing Specialist",
    compnayName: "Planforfit",
    details: `Responsibilities for Marketing Campaign and Lead a Marketing Team`,
  },
  {
    year: "NOV 2021 - APRIL 2022",
    position: "Blokchain Developer",
    compnayName: "Reshift Studio",
    details: `Responsibility: Develop, test and implement Smart Contracts such as
    ERC20, ERC721 and ERC1155 and Staking Token, Staking NFT and
    Gachapon. Development of technical specifications and plans`,
  },
  {
    year: "MAY 2022 - JULY 2022",
    position: "Full-stack Developer",
    compnayName: "Multiverse Expert",
    details: `Develop and test Smart Contract by using Solidity ,
    Hardhat and Etherjs. Identify and resolve web development issues
    reported by clients.`,
  },
  {
    year: "AUG 2022 - Current",
    position: "Full-stack Developer",
    compnayName: "Echoplus Co., Ltd.",
    details: `Responsibility: Design, implement new features and develop web
    applications for company's projects using Solidity, Ethersjs, ReactJs and
    Nestjs. Building, testing, and maintaining web application and
    performing comprehensive quality assurance testing`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;

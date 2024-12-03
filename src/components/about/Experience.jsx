import React from "react";

const experienceContent = [
  {
    year: "2019 - 2020",
    position: "Senior Marketing Specialist",
    compnayName: "Planforfit",
    details: `Responsibilities for Marketing Campaign and Lead a Marketing Team`,
  },
  {
    year: "NOV 2021 - APRIL 2022",
    position: "Smart Contract Developer",
    compnayName: "Ecio.space",
    details: `Responsibility: Develop, test and implement Smart Contracts such as
    ERC20, ERC721 and ERC1155 and Staking Token, Staking NFT and
    Gachapon. Development of technical specifications and plans`,
  },
  {
    year: "MAY 2022 - JULY 2022",
    position: "Full-stack Developer",
    compnayName: "Multiverse Expert",
    details: `Developed and maintained dynamic, 
    responsive web applications using React.js and Next.js.`,
  },
  {
    year: "AUG 2022 - DEC 2023",
    position: "Fullstack Developer",
    compnayName: "Echoplus Co., Ltd.",
    details: `Built reusable components, ensuring maintainability and scalability.
Ensured cross-browser compatibility and responsiveness of web applications across multiple devices.
Managed and optimized MongoDB, including schema design, indexing, and query optimization.
Utilized TypeScript for type-safe code, enhancing maintainability and reducing runtime errors.`,
  },
  {
    year: "JAN 2024 - JUNE 2024",
    position: "Fullstack Developer",
    compnayName: "Globiance Co., Ltd.",
    details: `Designed and implemented secure, efficient, and scalable components for Globiance DEX projects.`,
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

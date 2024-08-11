import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Jirayu", hasColor: "" },
  { meta: "last name", metaInfo: "Nakplien", hasColor: "" },
  { meta: "Age", metaInfo: "29 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Thai", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Bangkok, Thailand", hasColor: "" },
  { meta: "phone", metaInfo: "(+66)886394604", hasColor: "" },
  { meta: "Email", metaInfo: "jirayu.na@jirayudevhub.com", hasColor: "" },
  { meta: "Line", metaInfo: "jadedvi104", hasColor: "" },
  { meta: "langages", metaInfo: "English, Thai", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;

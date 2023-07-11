import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Jirayu", hasColor: "" },
  { meta: "last name", metaInfo: "Nakplien", hasColor: "" },
  { meta: "Age", metaInfo: "28 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Thai", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Pakkred, Nonthaburi, Thailand", hasColor: "" },
  { meta: "phone", metaInfo: "+886394604", hasColor: "" },
  { meta: "Email", metaInfo: "jirayu@jirayudev.site", hasColor: "" },
  { meta: "Skype", metaInfo: " steve.milner", hasColor: "" },
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

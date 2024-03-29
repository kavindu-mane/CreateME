import React, { useState, useEffect, useCallback } from "react";
import BasicInfo from "../BasicInfo/BasicInfo";
import Skills from "../Skills/Skills";
import { useData } from "../Providers/DataProvider";
import { useMarkdown } from "../Providers/MarkDownProvider";
import SocialMedia from "../Social/SocialMedia";
import AddOns from "../AddOns/AddOns";
import DownladOutput from "../DownladOutput/DownladOutput";

const Dashboard = () => {
  const [element, setElement] = useState(<BasicInfo />); // BasicInfo
  const [nextActive, setNextActive] = useState(1);
  const [backBtnState, setBackBtnState] = useState(true);
  const [backBtnOpacity, setBackBtnOpacity] = useState("");
  const [nextBtnState, setNextBtnState] = useState(false);
  const [nextBtnOpacity, setNextBtnOpacity] = useState("");
  const [data] = useData();
  const [, setMarkdown] = useMarkdown();

  const elemetMoveNext = (event, next) => {
    if (next === 1) setElement(<Skills />);
    else if (next === 2) setElement(<SocialMedia />);
    else if (next === 3) setElement(<AddOns />);
    else if (next === 4) setElement(<DownladOutput />);
    if (next === 3) event.target.innerHTML = "Done";

    setNextActive(nextActive + 1);
    setTimeout(() => window.scrollTo(0, 0), 2);
  };

  const elemetMoveBack = (event, next) => {
    if (next === 5) setElement(<DownladOutput />);
    else if (next === 4) setElement(<SocialMedia />);
    else if (next === 3) setElement(<Skills />);
    else if (next === 2) setElement(<BasicInfo />);

    setNextActive(nextActive - 1);
  };

  const setUserName = (username, key) => {
    const withAtArray = [
      "youtube",
      "hackerearth",
      "medium",
      "tiktok",
      "twitter",
    ];
    if (withAtArray.includes(key)) return "@" + username.replaceAll("-", "--");
    else return username.replaceAll("-", "--");
  };

  const addSocialNSkill = useCallback(
    (section) => {
      const align = data[section]["align"];
      const logoType = data[section]["logo-type"]
        .replaceAll(" ", "-")
        .toLowerCase();
      let mdText = `<!--START_SECTION:${section.toUpperCase()}-->\n`;
      mdText += `## <p align = ${align}> ${data[section]["title"]} </p>\n`;
      mdText += `<div align = ${align}>\n`;

      if (section === "skill") {
        data[section]["value"].forEach((e) => {
          if (e[1])
            mdText +=
              `<img src="https://img.shields.io/badge/${e[0]}-%23${e[3]}.svg?style=${logoType}&logo=${e[0]}&logoColor=white" alt=${e[0]} /> &ensp;\n`
                .replace("#", "%23")
                .replace("#", "-sharp")
                .replace("++&", "plusplus&");
        });
      } else {
        const element = data[section]["value"];
        Object.keys(data[section]["value"]).forEach((e) => {
          if (element[e][1] !== "")
            mdText += `<a href=${
              element[e][0] + element[e][1]
            } ><img src="https://img.shields.io/badge/${e}-${setUserName(
              element[e][1],
              e
            )}-%23${
              element[e][2]
            }.svg?style=${logoType}&logo=${e}&logoColor=white" 
                alt=${e} /></a> &ensp;\n`.replaceAll("_", "__");
        });
      }
      mdText += `</div>\n<!--END_SECTION:${section.toUpperCase()}--><br/>\n\n`;

      return mdText;
    },
    [data]
  );

  const setImages = useCallback(
    (key1, key2) => {
      const src = data[key1][key2];
      const alt = data["username"];
      const langSec = key2 === "lang-link" ? "-LANGUAGES" : "";

      return `<!--START_SECTION:${key1.toUpperCase() + langSec}-->
<div align = "${data[key1]["center"] ? "center" : "left"}">
    <img src = "${src}" alt = "${alt}"/> 
</div>
<!--END_SECTION:${key1.toUpperCase() + langSec}--><br/>\n\n`;
    },
    [data]
  );

  // get only title , subtitle and work
  const field = Object.keys(data).slice(0, 3);

  useEffect(() => {
    // markdown text creation
    let finalMd = "";
    // basic info data add to preview
    field.forEach((element) => {
      const startComment = `<!--START_SECTION:${element.toUpperCase()}-->\n`;
      const endComment = `<!--END_SECTION:${element.toUpperCase()}-->\n\n`;
      const active = data[element]["active"];
      const align = data[element]["align"];
      const value = data[element]["value"];

      if (active) {
        finalMd += startComment;
        value.split("\n").forEach((line) => {
          const mdFormats = {
            title: `# <p align = ${align}>${line}&ensp;<img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt= "${data["username"]}" width="35"></p>\n`,
            subtitle: `### <p align = ${align}>${line}</p>\n`,
            work: `***<p align = ${align}>${line}</p>***\n`,
          };
          finalMd += mdFormats[element];
        });
        finalMd += endComment;
      }
    });

    // skill data add to preview
    if (data["skill"]["active"]) {
      finalMd += addSocialNSkill("skill");
    }

    // social data add to preview
    if (data["social"]["active"]) {
      finalMd += addSocialNSkill("social");
    }

    if (data["profile-views"]["active"]) {
      finalMd += setImages("profile-views", "link");
    }

    if (data["readme-stats"]["stats-active"]) {
      finalMd += setImages("readme-stats", "stats-link");
    }

    if (data["readme-stats"]["lang-active"]) {
      finalMd += setImages("readme-stats", "lang-link");
    }

    if (data["streak-stats"]["active"]) {
      finalMd += setImages("streak-stats", "link");
    }

    if (data["profile-trophy"]["active"]) {
      finalMd += setImages("profile-trophy", "link");
    }

    if (data["waka-stats"]["active"]) {
      finalMd += "<!--START_SECTION:waka-->\n<!--END_SECTION:waka-->\n\n";
    }

    finalMd += "\n<!-- Created with CreateME profile readme generator-->";

    setMarkdown(finalMd);
  }, [nextActive, field, setMarkdown, data, addSocialNSkill, setImages]);

  useEffect(() => {
    if (nextActive === 5) {
      const leftCol = document.getElementById("left-column");
      const rightCol = document.getElementById("right-column");

      leftCol.classList.remove("create", "border");
      leftCol.classList.add("col-xl-8");
      rightCol.classList.add("col-xl-8");
      leftCol.parentElement.classList.add(
        "d-flex",
        "justify-content-center",
        "intro-div"
      );
    }

    setBackBtnState(nextActive === 1 || nextActive === 5 ? true : false);
    setBackBtnOpacity(nextActive === 1 || nextActive === 5 ? " opacity-0" : "");
    setNextBtnState(nextActive === 5 ? true : false);
    setNextBtnOpacity(nextActive === 5 ? " opacity-0" : "");
  }, [nextActive]);

  const backBtnClasses =
    "btn fw-bold text-secondary mt-3 bg-transparent border-0 d-flex justify-content-center";

  return (
    <React.Fragment>
      <div className="pb-1">
        <button
          className={backBtnClasses + backBtnOpacity}
          onClick={(event) => elemetMoveBack(event, nextActive)}
          disabled={backBtnState}
        >
          <span className="material-symbols-outlined">arrow_back</span>
          &ensp;Back
        </button>
      </div>

      {element}

      <div className={"px-2 d-flex justify-content-end " + nextBtnOpacity}>
        <button
          className="btn btn-primary mt-3 px-4"
          disabled={nextBtnState}
          onClick={(event) => elemetMoveNext(event, nextActive)}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;

const allDivs = document.body.getElementsByTagName("*");
const loader = document.querySelector(".loading");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");

  if (loader) {
    loader.remove();
  }
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].classList.remove("hidden");
  }
});

for (let i = 0; i < allDivs.length; i++) {
  if (!allDivs[i].className.includes("loading")) {
    allDivs[i].classList.add("hidden");
  }
}

const tBarProgress = document.querySelectorAll(".bar_language");

if (tBarProgress.length > 0) {
  tBarProgress.forEach((eBar) => {
    let iBarValue = eBar.getAttribute("data-progress");
    eBar.style.setProperty("--progress_fill", iBarValue + "%");

    const eBarValue = eBar.nextElementSibling;
    eBarValue.textContent = iBarValue + "%";
  });
}

const eCategoryLang = document.querySelector(".list_language");

if (eCategoryLang) {
  const tLanguages = {
    GLua: "lua_glua.png",
    Python: "python.png",
    JS: "js.png",
    HTML_CSS: "html_css.png",
    CSharp: "csharp.png",
    Cpp: "cpp.png",
    Batch: "batch.png",
  };

  const tProjects = {
    [1]: {
      sLang: {
        [1]: "GLua",
      },
      sTitle: "Vehicle Customizer",
      sDescription:
        "Tool that can be used for ELS compatibility with SVMOD, VCMOD vehicles. It allows you to generate a code with a single accessory on a vehicle.",
      sMedia: [
        {
          sType: "Video",
          sLink:
            "https://www.youtube.com/embed/MaurIeozN0g?si=VQAgiZH9dINcy46m",
        },
        {
          sType: "Image",
          sLink:
            "https://steamuserimages-a.akamaihd.net/ugc/1945021378798297557/918B34A4F219B5678C61629F3F87740DE64632C2/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        },
      ],
      sLink:
        "https://steamcommunity.com/sharedfiles/filedetails/?id=2891598626",
    },
    [2]: {
      sLang: {
        [1]: "GLua",
      },
      sTitle: "NightVision",
      sDescription:
        "A system owned by VLife Group. A system that allows you to turn the light off/on. The player won't see anything in the room, unless he has nightvision.",
      sMedia: [
        {
          sType: "Video",
          sLink:
            "https://www.youtube.com/embed/5ugCQMiLx_I?si=36CYY-fNSOvXPYSJ",
        },
      ],
      sLink: "Private",
    },
    [3]: {
      sLang: {
        [1]: "GLua",
      },
      sTitle: "Inventory & Accessories",
      sDescription:
        "A system owned by VLife Group. A system that allows you to manage your inventory. You can add, remove, use items.",
      sMedia: [
        {
          sType: "Video",
          sLink:
            "https://www.youtube.com/embed/URUY-sE8Zxk?si=XzWc1dXHkIU2JZ5I",
        },
      ],
      sLink: "Private",
    },
    [4]: {
      sLang: {
        [1]: "GLua",
      },
      sTitle: "ALPR",
      sDescription:
        "A system owned by VLife Group. A system that allows you to scan a vehicle's license plate. It will display the owner's name, the vehicle's model and the vehicle's color.",
      sMedia: [
        {
          sType: "Image",
          sLink: "resource/alpr.png",
        },
      ],
      sLink: "Private",
    },
    [5]: {
      sLang: {
        [1]: "CSharp",
      },
      sTitle: "Callout Manager - LSPDFR",
      sDescription: "A callout manager for LSPDFR (GTA V).",
      sMedia: [
        {
          sType: "Image",
          sLink:
            "https://s3-screenshots.int-cdn.lcpdfrusercontent.com/monthly_2024_10/20241021123229_1.jpg.e8d01f36fa644626a570e3b93d2ec385.jpg",
        },
        {
          sType: "Image",
          sLink:
            "https://s3-screenshots.int-cdn.lcpdfrusercontent.com/monthly_2024_10/20241021121219_1.jpg.ab467fa1b039a9b1a92ab22ad78f07fc.jpg",
        },
      ],
      sLink:
        "https://www.lcpdfr.com/downloads/gta5mods/scripts/49067-callout-launcher/",
    },
    [6]: {
      sLang: {
        [1]: "CSharp",
      },
      sTitle: "French Callout - LSPDFR",
      sDescription: "A callout for LSPDFR (GTA V). PROJET OUTDATED.",
      sMedia: [],
      sLink: "Private",
    },
    [7]: {
      sLang: {
        [1]: "Cpp",
      },
      sTitle: "KeyPad - Arduino",
      sDescription:
        "A simple arduino project that lets you type code on the screen. If the code is good, it will emit a sound; if it's bad, it will emit a different sound.",
      sMedia: [
        {
          sType: "Video",
          sLink: "resource/keypad_arduino.mp4",
          bNoSound: true,
        },
      ],
      sLink: "Private",
    },

    [8]: {
      sLang: {
        [1]: "Batch",
      },
      sTitle: "View History",
      sDescription:
        "A batch script that allows you to view the history web (OS : Windows). Created in 12/2021",
      sMedia: [],
      sLink: "Private",
    },

    [9]: {
      sLang: {
        [1]: "CSharp",
      },
      sTitle: "App Desktop - PresentHTML",
      sDescription:
        "An application that allowed me to present my HTML project. Created for a school project",
      sMedia: [
        {
          sType: "Image",
          sLink: "resource/presentation_html.png",
        },
      ],
      sLink: "Private",
    },

    [10]: {
      sLang: {
        [1]: "CSharp",
      },
      sTitle: "App Desktop - PresentJS",
      sDescription:
        "An application that allowed me to present my JS project. Created for a school project",
      sMedia: [
        {
          sType: "Image",
          sLink: "resource/presentation_js.png",
        },
      ],
      sLink: "Private",
    },

    [11]: {
      sLang: {
        [1]: "CSharp",
      },
      sTitle: "App Desktop - Arduino",
      sDescription:
        "An application that allowed me to present my Arduino project. Created for a school project",
      sMedia: [
        {
          sType: "Image",
          sLink: "resource/presentation_arduino.png",
        },
      ],
      sLink: "Private",
    },

    [12]: {
      sLang: {
        [1]: "CSharp",
      },
      sTitle: "App Desktop - Motor",
      sDescription:
        "An application that allowed me to present my Motor project. Created for a school project",
      sMedia: [
        {
          sType: "Image",
          sLink: "resource/presentation_motor.png",
        },
      ],
      sLink: "Private",
    },

    [13]: {
      sLang: {
        [1]: "Cpp",
      },
      sTitle: "Robot - Arduino",
      sDescription:
        "A simple arduino project that allows you to create several behaviors with a robot, such as following a black line or creating geometric shapes prepared in the code.",
      sMedia: [
        {
          sType: "Image",
          sLink: "resource/robot_optimized_square.gif",
        },
        {
          sType: "Image",
          sLink: "resource/robot_square.gif",
        },
        {
          sType: "Image",
          sLink: "resource/robot_line.gif",
        },
      ],
      sLink: "Private",
    },

    [14]: {
      sLang: {
        [1]: "CSharp",
      },
      sTitle: "App Desktop - Robot",
      sDescription:
        "An application that allowed me to present my Robot project. Created for a school project",
      sMedia: [
        {
          sType: "Image",
          sLink: "resource/presentation_motor.png",
        },
      ],
      sLink: "Private",
    },

    [15]: {
      sLang: {
        [1]: "Python",
      },
      sTitle: "Trello and Google Sheets",
      sDescription:
        "Creation of greater compatibility with the Trello and Google Sheet APIs. This compatibility is used to register all cards in a given category on Google Sheets and create a chart/stats. A system owned by VLife Group and Me.",
      sMedia: [
        {
          sType: "Image",
          sLink: "resource/trello_googlesheet.png",
        },
      ],
      sLink: "Private",
    },

    [16]: {
      sLang: {
        [1]: "GLua",
      },
      sTitle: "Event Zombie",
      sDescription:
        "Event Zombie (Halloween 2023) for VLife. This add-on allows you to simulate a transformation (human to zombie), and boost speed, jump and life. Ranking for those who infect the most people and kill the most zombies.",
      sMedia: [
        {
          sType: "Video",
          sLink:
            "https://www.youtube.com/embed/9zuzJPSCGBA?si=73MAhUO7DOZHjM-m",
        },
      ],
      sLink: "Private",
    },

    [17]: {
      sLang: {
        [1]: "GLua",
      },
      sTitle: "VPet",
      sDescription:
        "Bring life to your server with VPets! This addon allows players to have their own virtual pets. Perfect for DarkRP, Sandbox, or any other gamemode, VPets add a layer of personality and fun to any Garry's Mod server!",
      sMedia: [
        {
          sType: "Video",
          sLink: "https://www.youtube.com/embed/i-CgVmHRlns",
        },
        {
          sType: "Image",
          sLink:
            "https://media.gmodstore.com/460x/script_banners/93ccffab8a43cc4b33986af255757222.png",
        },
      ],
      sLink:
        "https://www.gmodstore.com/market/view/vpet-the-pet-system-you-need",
    },

    [18]: {
      sLang: {
        [1]: "GLua",
      },
      sTitle: "DarkRP City Worker (MODIF)",
      sDescription:
        "A new mission has been added to make the traffic lights on the New York City map more dynamic.",
      sMedia: [
        {
          sType: "Video",
          sLink: "https://www.youtube.com/embed/nmjFlSdRDl8",
        },
      ],
      sLink: "Private",
    },

    [19]: {
      sLang: {
        [1]: "GLua",
      },
      sTitle: "Armory Police NextBot",
      sDescription:
        "A police armory that brings you your gun with a realistic system and a modern UI.",
      sMedia: [
        {
          sType: "Video",
          sLink: "resource/armory_police.mp4",
          bNoSound: true,
        },
      ],
      sLink: "Private",
    },

    [20]: {
      sLang: {
        [1]: "GLua",
      },
      sTitle: "Tracker Phone",
      sDescription: "A system that can trace any telephone number on the map.",
      sMedia: [
        {
          sType: "Video",
          sLink: "resource/tracker_phone.mp4",
          bNoSound: true,
        },
      ],
      sLink: "Private",
    },

    [21]: {
      sLang: {
        [1]: "GLua",
      },
      sTitle: "Clothing System",
      sDescription: "A system that can trace any telephone number on the map.",
      sMedia: [
        {
          sType: "Image",
          sLink: "resource/clothing.png",
          bNoSound: true,
        },
      ],
      sLink: "Private",
    },
    [22]: {
      sLang: {
        [1]: "HTML_CSS",
      },
      sTitle: "Website - School",
      sDescription: "Project for school.",
      sMedia: [
        {
          sType: "Image",
          sLink: "resource/site.png",
          bNoSound: true,
        },
      ],
      sLink: "Private",
    },
  };

  function Vitroze_OpenMoreInformations(tProject) {
    const eBackground = document.createElement("div");
    eBackground.classList.add("moreinformation");

    const eMenu = document.createElement("div");
    eMenu.classList.add("moreinformation_menu");

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        eBackground.remove();
      }
    });

    eBackground.appendChild(eMenu);

    const eTitle = document.createElement("h1");
    eTitle.textContent = tProject.sTitle;
    eTitle.classList.add("moreinformation_title");
    eMenu.appendChild(eTitle);

    if (
      tProject.sMedia &&
      Array.isArray(tProject.sMedia) &&
      tProject.sMedia.length > 0
    ) {
      const eMediaMain =
        tProject.sMedia[0].sType == "Image"
          ? document.createElement("img")
          : tProject.sMedia[0].sLink.includes("youtube")
          ? document.createElement("iframe")
          : document.createElement("video");
      eMediaMain.src = tProject.sMedia[0].sLink;
      eMediaMain.classList.add("information_mediamain");

      if (
        tProject.sMedia[0].sType == "Video" &&
        eMediaMain.tagName == "VIDEO"
      ) {
        eMediaMain.autoplay = true;
        eMediaMain.loop = true;
        eMediaMain.controls = true;
      }

      if (tProject.sMedia[0].bNoSound && tProject.sMedia[0].sType == "Video") {
        eMediaMain.muted = true;
      }

      eMenu.appendChild(eMediaMain);

      if (tProject.sMedia.length > 1) {
        const eDivMedia = document.createElement("div");
        eDivMedia.classList.add("moreinformation_multimedia");

        for (let i = 1; i < tProject.sMedia.length; i++) {
          const eMedia =
            tProject.sMedia[i].sType == "Image"
              ? document.createElement("img")
              : tProject.sMedia[i].sLink.includes("youtube")
              ? document.createElement("iframe")
              : document.createElement("video");
          eMedia.src = tProject.sMedia[i].sLink;
          eMedia.classList.add("information_media");

          if (
            tProject.sMedia[i].sType == "Video" &&
            eMedia.tagName == "VIDEO"
          ) {
            eMedia.autoplay = true;
            eMedia.loop = true;
            eMedia.controls = true;
          }

          if (
            tProject.sMedia[i].bNoSound &&
            tProject.sMedia[i].sType == "Video"
          ) {
            eMedia.muted = true;
          }

          eDivMedia.appendChild(eMedia);
        }

        eMenu.appendChild(eDivMedia);
      }
    } else {
      const eNoMedia = document.createElement("div");
      eNoMedia.textContent = "No media available.";
      eNoMedia.classList.add("information_mediamain");
      eMenu.appendChild(eNoMedia);
    }

    const eDescription = document.createElement("p");
    eDescription.textContent = tProject.sDescription;
    eDescription.classList.add("moreinformation_text");
    eMenu.appendChild(eDescription);

    const eButton = document.createElement("button");
    eButton.textContent = "Download";
    eButton.addEventListener("click", () => {
      if (tProject.sLink == "Private") {
        return;
      }

      window.open(tProject.sLink);
    });

    if (tProject.sLink == "Private") {
      eButton.disabled = true;

      const eImage = document.createElement("img");
      eImage.src = "./resource/lock.png";
      eButton.appendChild(eImage);
    }

    eButton.classList.add(
      tProject.sLink == "Private"
        ? "moreinformation_buttonlock"
        : "moreinformation_button"
    );

    eMenu.appendChild(eButton);

    document.body.appendChild(eBackground);
  }

  function Vitroze_ReloadProject(sLang = "All") {
    const eCategoryProject = document.querySelector(".list_projects");
    for (let i = 1; i <= Object.keys(tProjects).length; i++) {
      if (
        sLang != "All" &&
        !Object.values(tProjects[i].sLang).includes(sLang)
      ) {
        continue;
      }

      const eProject = document.createElement("div");
      eProject.classList.add("project");

      const sLangList = Object.values(tProjects[i].sLang).join(",");
      eProject.setAttribute("data-lang", sLangList);

      const eLanguage = document.createElement("div");
      eLanguage.classList.add("langlist");

      for (let iLang in tProjects[i].sLang) {
        const eLang = document.createElement("img");
        eLang.src = `./resource/${tLanguages[tProjects[i].sLang[iLang]]}`;
        eLanguage.appendChild(eLang);
      }

      eProject.appendChild(eLanguage);

      const eTitle = document.createElement("h1");
      eTitle.textContent = tProjects[i].sTitle;
      eProject.appendChild(eTitle);

      if (
        tProjects[i].sMedia &&
        Array.isArray(tProjects[i].sMedia) &&
        tProjects[i].sMedia.length > 0
      ) {
        const iRandom = Math.floor(Math.random() * tProjects[i].sMedia.length);

        const eMedia =
          tProjects[i].sMedia[iRandom].sType == "Image"
            ? document.createElement("img")
            : tProjects[i].sMedia[iRandom].sLink.includes("youtube")
            ? document.createElement("iframe")
            : document.createElement("video");
        eMedia.src = tProjects[i].sMedia[iRandom].sLink;
        eMedia.classList.add("project_media");

        if (
          tProjects[i].sMedia[iRandom].sType == "Video" &&
          eMedia.tagName == "VIDEO"
        ) {
          eMedia.autoplay = true;
          eMedia.loop = true;
          eMedia.controls = true;
        }

        if (
          tProjects[i].sMedia[iRandom].bNoSound &&
          tProjects[i].sMedia[iRandom].sType == "Video"
        ) {
          eMedia.muted = true;
        }

        eProject.appendChild(eMedia);
      } else {
        const eNoMedia = document.createElement("div");
        eNoMedia.textContent = "No media available.";
        eNoMedia.classList.add("project_media");
        eProject.appendChild(eNoMedia);
      }

      const eButton = document.createElement("button");
      eButton.textContent = "More informations";
      eButton.addEventListener("click", () => {
        // if (tProjects[i].sLink == "Private") {
        //   alert("This project is private.");
        // } else {
        //   window.open(tProjects[i].sLink);
        // }

        Vitroze_OpenMoreInformations(tProjects[i]);
      });

      // Si projet privé alors on désactive le bouton et on ajoute une image de cadenas

      eProject.appendChild(eButton);

      eCategoryLang.appendChild(eProject);

      eCategoryProject.appendChild(eProject);
    }
  }

  for (let sLang in tLanguages) {
    const eLang = document.createElement("button");
    eLang.classList.add("language_button");
    eLang.setAttribute("data-lang", sLang);
    //eLang.style.backgroundImage = `url(./resource/${tLanguages[sLang]})`;

    eCategoryLang.appendChild(eLang);

    const eLangImage = document.createElement("img");
    eLangImage.src = `./resource/${tLanguages[sLang]}`;
    eLang.appendChild(eLangImage);

    eLang.addEventListener("click", () => {
      if (eLang.classList.contains("active")) {
        const tProjects = document.querySelectorAll(".project");
        tProjects.forEach((eProject) => {
          eProject.remove();
        });

        eLang.classList.remove("active");
        Vitroze_ReloadProject();

        return;
      }

      document.querySelectorAll(".language_button").forEach((eLang) => {
        if (eLang.classList.contains("active")) {
          eLang.classList.remove("active");
        }
      });

      eLang.classList.add("active");

      const tProjects = document.querySelectorAll(".project");
      tProjects.forEach((eProject) => {
        eProject.remove();
      });

      Vitroze_ReloadProject(sLang);
    });
  }

  Vitroze_ReloadProject();
}

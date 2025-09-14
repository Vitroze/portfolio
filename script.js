// const allDivs = document.body.querySelectorAll("body > *");

// window.addEventListener("load", () => {
//   const oLoader = document.querySelector(".loading");

//   if (oLoader) {
//     oLoader.remove();

//     for (let i = 0; i < allDivs.length; i++) {
//       if (!allDivs[i].className.includes("loading")) {
//         allDivs[i].classList.remove("hidden");
//       }
//     }
//   }
// });

// for (let i = 0; i < allDivs.length; i++) {
//   if (!allDivs[i].className.includes("loading")) {
//     console.log(allDivs[i].className);
//     allDivs[i].classList.add("hidden");
//   }
// }

// const tBarProgress = document.querySelectorAll(".bar_language");
// if (tBarProgress.length > 0) {
//   tBarProgress.forEach((eBar) => {
//     let iBarValue = eBar.getAttribute("data-progress");
//     eBar.style.setProperty("--progress_fill", iBarValue + "%");

//     const eBarValue = eBar.nextElementSibling;
//     eBarValue.textContent = iBarValue + "%";
//   });
// }

// const eCategoryLang = document.querySelector(".list_language");
// if (eCategoryLang) {
//   const tLanguages = {
//     GLua: "logos/lua_glua.svg",
//     Python: "logos/python.svg",
//     JS: "logos/js.svg",
//     HTML_CSS: "logos/html_css.svg",
//     CSharp: "logos/csharp.svg",
//     Cpp: "logos/cpp.svg",
//     Batch: "logos/batch.svg",
//   };

//   const tProjects = {
//     [1]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "Vehicle Customizer",
//       sDescription:
//         "Tool that can be used for ELS compatibility with SVMOD, VCMOD vehicles. It allows you to generate a code with a single accessory on a vehicle.",
//       sMedia: [
//         {
//           sType: "Video",
//           sLink:
//             "https://www.youtube.com/embed/MaurIeozN0g?si=VQAgiZH9dINcy46m",
//         },
//         {
//           sType: "Image",
//           sLink:
//             "https://steamuserimages-a.akamaihd.net/ugc/1945021378798297557/918B34A4F219B5678C61629F3F87740DE64632C2/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
//         },
//       ],
//       sLink:
//         "https://steamcommunity.com/sharedfiles/filedetails/?id=2891598626",
//     },
//     [2]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "NightVision",
//       sDescription:
//         "A system owned by VLife Group. A system that allows you to turn the light off/on. The player won't see anything in the room, unless he has nightvision.",
//       sMedia: [
//         {
//           sType: "Video",
//           sLink:
//             "https://www.youtube.com/embed/5ugCQMiLx_I?si=36CYY-fNSOvXPYSJ",
//         },
//       ],
//       sLink: "Private",
//     },
//     [3]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "Inventory & Accessories",
//       sDescription:
//         "A system owned by VLife Group. A system that allows you to manage your inventory. You can add, remove, use items.",
//       sMedia: [
//         {
//           sType: "Video",
//           sLink:
//             "https://www.youtube.com/embed/URUY-sE8Zxk?si=XzWc1dXHkIU2JZ5I",
//         },
//       ],
//       sLink: "Private",
//     },
//     [4]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "ALPR",
//       sDescription:
//         "A system owned by VLife Group. A system that allows you to scan a vehicle's license plate. It will display the owner's name, the vehicle's model and the vehicle's color.",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/alpr.png",
//         },
//       ],
//       sLink: "Private",
//     },
//     [5]: {
//       sLang: {
//         [1]: "CSharp",
//       },
//       sTitle: "Callout Manager - LSPDFR",
//       sDescription: "A callout manager for LSPDFR (GTA V).",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink:
//             "https://s3-screenshots.int-cdn.lcpdfrusercontent.com/monthly_2024_10/20241021123229_1.jpg.e8d01f36fa644626a570e3b93d2ec385.jpg",
//         },
//         {
//           sType: "Image",
//           sLink:
//             "https://s3-screenshots.int-cdn.lcpdfrusercontent.com/monthly_2024_10/20241021121219_1.jpg.ab467fa1b039a9b1a92ab22ad78f07fc.jpg",
//         },
//       ],
//       sLink:
//         "https://www.lcpdfr.com/downloads/gta5mods/scripts/49067-callout-launcher/",
//     },
//     [6]: {
//       sLang: {
//         [1]: "CSharp",
//       },
//       sTitle: "French Callout - LSPDFR",
//       sDescription: "A callout for LSPDFR (GTA V). PROJECT OUTDATED.",
//       sMedia: [],
//       sLink: "Private",
//     },
//     [7]: {
//       sLang: {
//         [1]: "Cpp",
//       },
//       sTitle: "KeyPad - Arduino",
//       sDescription:
//         "A simple arduino project that lets you type code on the screen. If the code is good, it will emit a sound; if it's bad, it will emit a different sound.",
//       sMedia: [
//         {
//           sType: "Video",
//           sLink: "resource/creations/keypad_arduino.mp4",
//           bNoSound: true,
//         },
//       ],
//       sLink: "Private",
//     },

//     [8]: {
//       sLang: {
//         [1]: "Batch",
//       },
//       sTitle: "View History",
//       sDescription:
//         "A batch script that allows you to view the history web (OS : Windows). Created in 12/2021",
//       sMedia: [],
//       sLink: "Private",
//     },

//     [9]: {
//       sLang: {
//         [1]: "CSharp",
//       },
//       sTitle: "App Desktop - PresentHTML",
//       sDescription:
//         "An application that allowed me to present my HTML project. Created for a school project",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/presentation_html.png",
//         },
//       ],
//       sLink: "Private",
//     },

//     [10]: {
//       sLang: {
//         [1]: "CSharp",
//       },
//       sTitle: "App Desktop - PresentJS",
//       sDescription:
//         "An application that allowed me to present my JS project. Created for a school project",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/presentation_js.png",
//         },
//       ],
//       sLink: "Private",
//     },

//     [11]: {
//       sLang: {
//         [1]: "CSharp",
//       },
//       sTitle: "App Desktop - Arduino",
//       sDescription:
//         "An application that allowed me to present my Arduino project. Created for a school project",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/presentation_arduino.png",
//         },
//       ],
//       sLink: "Private",
//     },

//     [12]: {
//       sLang: {
//         [1]: "CSharp",
//       },
//       sTitle: "App Desktop - Motor",
//       sDescription:
//         "An application that allowed me to present my Motor project. Created for a school project",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/presentation_motor.png",
//         },
//       ],
//       sLink: "Private",
//     },

//     [13]: {
//       sLang: {
//         [1]: "Cpp",
//       },
//       sTitle: "Robot - Arduino",
//       sDescription:
//         "A simple arduino project that allows you to create several behaviors with a robot, such as following a black line or creating geometric shapes prepared in the code.",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/robot_optimized_square.gif",
//         },
//         {
//           sType: "Image",
//           sLink: "resource/creations/robot_square.gif",
//         },
//         {
//           sType: "Image",
//           sLink: "resource/creations/robot_line.gif",
//         },
//       ],
//       sLink: "Private",
//     },

//     [14]: {
//       sLang: {
//         [1]: "CSharp",
//       },
//       sTitle: "App Desktop - Robot",
//       sDescription:
//         "An application that allowed me to present my Robot project. Created for a school project",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/presentation_motor.png",
//         },
//       ],
//       sLink: "Private",
//     },

//     [15]: {
//       sLang: {
//         [1]: "Python",
//       },
//       sTitle: "Trello and Google Sheets",
//       sDescription:
//         "Creation of greater compatibility with the Trello and Google Sheet APIs. This compatibility is used to register all cards in a given category on Google Sheets and create a chart/stats. A system owned by VLife Group and Me.",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/trello_googlesheet.png",
//         },
//       ],
//       sLink: "Private",
//     },

//     [16]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "Event Zombie",
//       sDescription:
//         "Event Zombie (Halloween 2023) for VLife. This add-on allows you to simulate a transformation (human to zombie), and boost speed, jump and life. Ranking for those who infect the most people and kill the most zombies.",
//       sMedia: [
//         {
//           sType: "Video",
//           sLink:
//             "https://www.youtube.com/embed/9zuzJPSCGBA?si=73MAhUO7DOZHjM-m",
//         },
//       ],
//       sLink: "Private",
//     },

//     [17]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "VPet",
//       sDescription:
//         "Bring life to your server with VPets! This addon allows players to have their own virtual pets. Perfect for DarkRP, Sandbox, or any other gamemode, VPets add a layer of personality and fun to any Garry's Mod server!",
//       sMedia: [
//         {
//           sType: "Video",
//           sLink: "https://www.youtube.com/embed/i-CgVmHRlns",
//         },
//         {
//           sType: "Image",
//           sLink:
//             "https://media.gmodstore.com/460x/script_banners/93ccffab8a43cc4b33986af255757222.png",
//         },
//       ],
//       sLink:
//         "https://www.gmodstore.com/market/view/vpet-the-pet-system-you-need",
//     },

//     [18]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "DarkRP City Worker (MODIF)",
//       sDescription:
//         "A new mission has been added to make the traffic lights on the New York City map more dynamic.",
//       sMedia: [
//         {
//           sType: "Video",
//           sLink: "https://www.youtube.com/embed/nmjFlSdRDl8",
//         },
//       ],
//       sLink: "Private",
//     },

//     [19]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "Armory Police NextBot",
//       sDescription:
//         "A police armory that brings you your gun with a realistic system and a modern UI.",
//       sMedia: [
//         {
//           sType: "Video",
//           sLink: "resource/creations/armory_police.mp4",
//           bNoSound: true,
//         },
//       ],
//       sLink: "Private",
//     },

//     [20]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "Tracker Phone",
//       sDescription: "A system that can trace any telephone number on the map.",
//       sMedia: [
//         {
//           sType: "Video",
//           sLink: "resource/creations/tracker_phone.mp4",
//           bNoSound: true,
//         },
//       ],
//       sLink: "Private",
//     },

//     [21]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "Clothing System",
//       sDescription:
//         "A system that allows you to change outfits while keeping the same head.",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/clothing.png",
//           bNoSound: true,
//         },
//       ],
//       sLink: "Private",
//     },
//     [22]: {
//       sLang: {
//         [1]: "HTML_CSS",
//       },
//       sTitle: "Website - School",
//       sDescription: "Project for school.",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/site.png",
//           bNoSound: true,
//         },
//       ],
//       sLink: "Private",
//     },
//     [23]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "History Sanction",
//       sDescription:
//         "A system owned by VLife Group. A system that tracks player sanctions, even those that have been deleted. Compatible: SAM & Awarn3",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/casier.png",
//         },
//       ],
//     },
//     [24]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "Escape Menu",
//       sDescription: "A system owned by VLife Group. A basic escape menu.",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/escape_menu.png",
//         },
//       ],
//     },
//     [25]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "Animation Menu",
//       sDescription: "A system owned by VLife Group. A basic animation menu.",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/animation_menu.png",
//         },
//       ],
//     },
//     [26]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "EMS System",
//       sDescription: "A system owned by VLife Group. A advanced EMS system.",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/ems_menu.png",
//         },
//       ],
//     },
//     [27]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "F4 Menu",
//       sDescription:
//         "A system owned by VLife Group. A basic F4 menu (2 Design).",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/animation_menu.png",
//         },
//       ],
//     },
//     [28]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "HUD",
//       sDescription: "A system owned by VLife Group. A basic HUD (2 Design).",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/hud_fun.png",
//         },
//         {
//           sType: "Image",
//           sLink: "resource/creations/hud_serious.png",
//         },
//       ],
//     },
//     [29]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "NPC Employer",
//       sDescription: "A system owned by VLife Group. A basic NPC Employer.",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/npc_employer.png",
//         },
//       ],
//     },
//     [30]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "Report Bug",
//       sDescription: "A system owned by VLife Group. A basic report bug menu.",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/reportbug.png",
//         },
//       ],
//     },
//     [31]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "Daily Rewards",
//       sDescription:
//         "A system owned by VLife Group. A basic daily rewards (3 Design).",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/daily.png",
//         },
//       ],
//     },
//     [32]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "System TP",
//       sDescription: "A system owned by VLife Group. A basic system TP.",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/tp_1.png",
//         },
//       ],
//     },

//     [33]: {
//       sLang: {
//         [1]: "GLua",
//       },
//       sTitle: "Notification",
//       sDescription:
//         "A system owned by VLife Group. A basic system Notification.",
//       sMedia: [
//         {
//           sType: "Image",
//           sLink: "resource/creations/notification.png",
//         },
//       ],
//     },
//   };

//   function Vitroze_OpenMoreInformations(tProject) {
//     const eBackground = document.createElement("div");
//     eBackground.classList.add("moreinformation");

//     const eMenu = document.createElement("div");
//     eMenu.classList.add("moreinformation_menu");

//     window.addEventListener("keydown", (e) => {
//       if (e.key === "Escape") {
//         eBackground.remove();
//       }
//     });

//     eBackground.addEventListener("click", (e) => {
//       if (e.target === eBackground) {
//         eBackground.remove();
//       }
//     });

//     eBackground.appendChild(eMenu);

//     const eTitle = document.createElement("h1");
//     eTitle.textContent = tProject.sTitle;
//     eTitle.classList.add("moreinformation_title");
//     eMenu.appendChild(eTitle);

//     if (
//       tProject.sMedia &&
//       Array.isArray(tProject.sMedia) &&
//       tProject.sMedia.length > 0
//     ) {
//       const eMediaMain =
//         tProject.sMedia[0].sType == "Image"
//           ? document.createElement("img")
//           : tProject.sMedia[0].sLink.includes("youtube")
//           ? document.createElement("iframe")
//           : document.createElement("video");
//       eMediaMain.src = tProject.sMedia[0].sLink;
//       eMediaMain.classList.add("information_mediamain");

//       if (
//         tProject.sMedia[0].sType == "Video" &&
//         eMediaMain.tagName == "VIDEO"
//       ) {
//         eMediaMain.autoplay = true;
//         eMediaMain.loop = true;
//         eMediaMain.controls = true;
//       }

//       if (tProject.sMedia[0].bNoSound && tProject.sMedia[0].sType == "Video") {
//         eMediaMain.muted = true;
//       }

//       eMenu.appendChild(eMediaMain);

//       if (tProject.sMedia.length > 1) {
//         const eDivMedia = document.createElement("div");
//         eDivMedia.classList.add("moreinformation_multimedia");

//         for (let i = 0; i < tProject.sMedia.length; i++) {
//           const eMedia =
//             tProject.sMedia[i].sType == "Image"
//               ? document.createElement("img")
//               : tProject.sMedia[i].sLink.includes("youtube")
//               ? document.createElement("iframe")
//               : document.createElement("video");
//           eMedia.src = tProject.sMedia[i].sLink;
//           eMedia.classList.add("information_media");

//           if (
//             tProject.sMedia[i].sType == "Video" &&
//             eMedia.tagName == "VIDEO"
//           ) {
//             eMedia.autoplay = true;
//             eMedia.loop = true;
//             eMedia.controls = true;
//           }

//           if (
//             tProject.sMedia[i].bNoSound &&
//             tProject.sMedia[i].sType == "Video"
//           ) {
//             eMedia.muted = true;
//           }

//           eMedia.loading = "lazy";

//           eMedia.addEventListener("click", () => {
//             eMediaMain.src = eMedia.src;
//             eMediaMain.autoplay = true;
//             eMediaMain.loop = true;
//             eMediaMain.controls = true;
//             eMediaMain.muted = tProject.sMedia[i].bNoSound;
//           });

//           eDivMedia.appendChild(eMedia);
//         }

//         eMenu.appendChild(eDivMedia);
//       }
//     } else {
//       const eNoMedia = document.createElement("div");
//       eNoMedia.textContent = "No media available.";
//       eNoMedia.classList.add("information_mediamain");
//       eMenu.appendChild(eNoMedia);
//     }

//     const eDescription = document.createElement("p");
//     eDescription.textContent = tProject.sDescription;
//     eDescription.classList.add("moreinformation_text");
//     eMenu.appendChild(eDescription);

//     const eButton = document.createElement("button");

//     if (tProject.sLink == "Private" || !tProject.sLink) {
//       const eImage = document.createElement("img");
//       eImage.src = "./resource/lock.svg";
//       eImage.alt = "Lock Icon";
//       eImage.classList.add("button_icon");
//       eButton.appendChild(eImage);

//       eButton.disabled = true;
//     }

//     const eText = document.createElement("span");
//     eText.textContent = "Download";
//     eText.classList.add("button_text");
//     eButton.appendChild(eText);

//     eButton.addEventListener("click", () => {
//       if (tProject.sLink == "Private") {
//         return;
//       }
//       window.open(tProject.sLink);
//     });

//     eButton.classList.add(
//       tProject.sLink == "Private"
//         ? "moreinformation_buttonlock"
//         : "moreinformation_button"
//     );

//     eMenu.appendChild(eButton);

//     document.body.appendChild(eBackground);
//   }

//   function Vitroze_ReloadProject(sLang = "All") {
//     const eCategoryProject = document.querySelector(".list_projects");

//     eCategoryProject.innerHTML = "";

//     const filteredProjects = Object.keys(tProjects)
//       .map((key) => tProjects[key])
//       .filter(
//         (project) =>
//           sLang === "All" || Object.values(project.sLang).includes(sLang)
//       );

//     const fragment = document.createDocumentFragment();

//     filteredProjects.forEach((project) => {
//       const eProject = document.createElement("div");
//       eProject.classList.add("project");

//       const sLangList = Object.values(project.sLang).join(",");
//       eProject.setAttribute("data-lang", sLangList);

//       const eLanguage = document.createElement("div");
//       eLanguage.classList.add("langlist");

//       Object.values(project.sLang).forEach((lang) => {
//         const eLang = document.createElement("img");
//         eLang.src = `./resource/${tLanguages[lang]}`;
//         eLanguage.appendChild(eLang);
//       });

//       eProject.appendChild(eLanguage);

//       const eTitle = document.createElement("h1");
//       eTitle.textContent = project.sTitle;
//       eProject.appendChild(eTitle);

//       if (
//         project.sMedia &&
//         Array.isArray(project.sMedia) &&
//         project.sMedia.length > 0
//       ) {
//         const iRandom = Math.floor(Math.random() * project.sMedia.length);
//         const media = project.sMedia[iRandom];
//         const eMedia = document.createElement(
//           media.sType === "Image"
//             ? "img"
//             : media.sLink.includes("youtube")
//             ? "iframe"
//             : "video"
//         );

//         eMedia.loading = "lazy";
//         eMedia.src = media.sLink;
//         eMedia.classList.add("project_media");

//         if (media.sType === "Video" && eMedia.tagName === "VIDEO") {
//           eMedia.autoplay = true;
//           eMedia.loop = true;
//           eMedia.controls = true;
//           if (media.bNoSound) {
//             eMedia.muted = true;
//           }
//         }

//         eProject.appendChild(eMedia);
//       } else {
//         const eNoMedia = document.createElement("div");
//         eNoMedia.textContent = "No media available.";
//         eNoMedia.classList.add("project_media");
//         eProject.appendChild(eNoMedia);
//       }

//       const eButton = document.createElement("button");
//       eButton.textContent = "More information";
//       eButton.addEventListener("click", () =>
//         Vitroze_OpenMoreInformations(project)
//       );
//       eProject.appendChild(eButton);

//       fragment.appendChild(eProject);
//     });

//     eCategoryProject.appendChild(fragment);
//   }

//   for (let sLang in tLanguages) {
//     const eLang = document.createElement("button");
//     eLang.classList.add("language_button");
//     eLang.setAttribute("data-lang", sLang);

//     eCategoryLang.appendChild(eLang);

//     const eLangImage = document.createElement("img");
//     eLangImage.src = `./resource/${tLanguages[sLang]}`;
//     eLang.appendChild(eLangImage);

//     eLang.addEventListener("click", () => {
//       if (eLang.classList.contains("active")) {
//         const tProjects = document.querySelectorAll(".project");
//         tProjects.forEach((eProject) => {
//           eProject.remove();
//         });

//         eLang.classList.remove("active");
//         Vitroze_ReloadProject();

//         return;
//       }

//       document.querySelectorAll(".language_button").forEach((eLang) => {
//         if (eLang.classList.contains("active")) {
//           eLang.classList.remove("active");
//         }
//       });

//       eLang.classList.add("active");

//       const tProjects = document.querySelectorAll(".project");
//       tProjects.forEach((eProject) => {
//         eProject.remove();
//       });

//       Vitroze_ReloadProject(sLang);
//     });
//   }

//   Vitroze_ReloadProject();
// }

const tLanguages = {
  // GLua: "logos/lua_glua.svg",
  // Python: "logos/python.svg",
  // JS: "logos/js.svg",
  // HTML_CSS: "logos/html_css.svg",
  // CSharp: "logos/csharp.svg",
  // Cpp: "logos/cpp.svg",
  // Batch: "logos/batch.svg",
  [1]: {
    sName: "LUA/GLua",
    mLogo: "logos/lua_glua.svg",
    iStars: 3,
    sIDLanguage: "DescGLua",
    sDesc : "Developed a wide range of custom addons on the game Garry’s Mod, gaining in-depth expertise in Lua and GLua scripting."
  },
  [2]: {
    sName: "Python",
    mLogo: "logos/python.svg",
    iStars: 3,
    sIDLanguage: "DescPython",
    sDesc: "Built scripts, automation tools, and small applications, refining logic and problem-solving skills.",
  },
  [3]: {
    sName: "JavaScript",
    mLogo: "logos/js.svg",
    iStars: 2,
    sIDLanguage: "DescJS",
    sDesc: "Created interactive and dynamic functionalities, enhancing user experiences with efficient scripting.",
  },
  [4]: {
    sName: "HTML/CSS",
    mLogo: "logos/html_css.svg",
    iStars: 2,
    sIDLanguage: "DescHTML_CSS",
    sDesc: "Designed and structured modern web pages, focusing on clean markup, responsive layouts, and visual coherence."
  },
  [5]: {
    sName: "C#",
    mLogo: "logos/csharp.svg",
    iStars: 2,
    sIDLanguage: "DescCSharp",
    sDesc: "Worked on object-oriented projects, learning to structure code efficiently and implement practical solutions."
  },
  [6]: {
    sName: "C++",
    mLogo: "logos/cpp.svg",
    iStars: 1,
    sIDLanguage: "DescCpp",
    sDesc: "Applied object-oriented and procedural programming concepts while exploring low-level systems."
  },
  [7]: {
    sName: "Batch",
    mLogo: "logos/batch.svg",
    iStars: 1,
    sIDLanguage: "DescBatch",
    sDesc: "Wrote scripts to automate repetitive tasks, improving workflow efficiency and task management."
  },
};

for (let iID in tLanguages) {
  const tLang = tLanguages[iID];
  console.log(tLang);

  const eCategoryLang = document.querySelector(".skills");
  if (eCategoryLang) {
    const eLang = document.createElement("div");
    eLang.classList.add("lines");
    eCategoryLang.appendChild(eLang);

    const eLangSkill = document.createElement("div");
    eLangSkill.classList.add("language-skill");
    eLang.appendChild(eLangSkill);

    const eLangLogo = document.createElement("img");
    eLangLogo.src = `/resource/${tLang.mLogo}`;
    eLangLogo.classList.add("lang-logo");
    eLangSkill.appendChild(eLangLogo);

    const eLangName = document.createElement("h2");
    eLangName.textContent = tLang.sName;
    eLangName.classList.add("lang-name");
    eLangSkill.appendChild(eLangName);

    const eStarsDiv = document.createElement("div");
    eStarsDiv.classList.add("lang-stars");
    eLangSkill.appendChild(eStarsDiv);

    let iStar = 0;
    for (let i = 0; i < 3; i++) {

      iStar = iStar + 1;

      const eStar = document.createElement("img");
      eStar.src = `/resource/${iStar <= tLang.iStars ? "star_fill.svg" : "star.svg"}`;
      eStar.classList.add("lang-star");
      eStarsDiv.appendChild(eStar);
    }

    const eDesc = document.createElement("p");
    eDesc.classList.add("Desc");
   // eDesc.textContent = tLang.sDesc;
    eDesc.setAttribute("sIDLanguage", tLang.sIDLanguage);
    eLang.appendChild(eDesc);
  }

  const eDropDown = document.getElementById("myDropdown");
  if (eDropDown) {
    const eLangButton = document.createElement("p");
    eLangButton.href = "#";
    eLangButton.textContent = tLang.sName;
    eLangButton.setAttribute("sLang", tLang.sName);
    eDropDown.appendChild(eLangButton);
  }
}

const observerOptions = {
  threshold: 0.2  // 20% visible pour déclencher
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible'); // ajoute la classe pour déclencher l'animation
      observer.unobserve(entry.target);       // facultatif, pour ne déclencher qu'une fois
    }
  });
}, observerOptions);

// Observer les éléments
document.querySelectorAll('.language-skill, .Desc, .lang-logo, .lang-name, .lang-stars')
  .forEach(el => observer.observe(el));


function toggleDropdownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.querySelector(".dropbtn").classList.toggle("open");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.querySelector(".dropbtn").classList.remove("open");
      }
    }
  }
}

document.querySelectorAll('.dropdown-content p').forEach(item => {
  item.addEventListener('click', event => {
    document.querySelector(".dropbtn .btn-text").textContent = item.getAttribute('sLang');
  });
});

if (!localStorage.getItem("sLang")) {
  localStorage.setItem("sLang", "fr");
}

tStringsEn = {
  "about": "About Me",
  "skills": "Skills",
  "projects": "Projects",
  "hi": "Hi",
  "Name": "I'm Vitroze",
  "Description": "French game developer passionate about Lua and Python, with years of experience crafting custom addons for Garry’s Mod and exploring new dimensions of creativity.",
  "DescSkills": "Languages and tools I’ve honed to tackle any coding challenge.",
  "DescGLua": "Developed a wide range of custom addons on the game Garry’s Mod, gaining in-depth expertise in Lua and GLua scripting.",
  "DescPython": "Built scripts, automation tools, and small applications, refining logic and problem-solving skills.",
  "DescJS": "Created interactive and dynamic functionalities, enhancing user experiences with efficient scripting.",
  "DescHTML_CSS": "Designed and structured modern web pages, focusing on clean markup, responsive layouts, and visual coherence.",
  "DescCSharp": "Worked on object-oriented projects, learning to structure code efficiently and implement practical solutions.",
  "DescCpp": "Applied object-oriented and procedural programming concepts while exploring low-level systems.",
  "DescBatch": "Wrote scripts to automate repetitive tasks, improving workflow efficiency and task management.",
  "DescProjects": "A showcase of my work, from addons to coding creative projects.",
  "All": "All",
}

tStringsFr = {
  "about": "À propos de moi",
  "skills": "Compétences",
  "projects": "Projets",
  "hi": "Salut",
  "Name": "Je suis Vitroze",
  "Description": "Développeur de jeux français passionné par Lua et Python, avec des années d'expérience dans la création d'addons personnalisés pour Garry's Mod et l'exploration de nouvelles dimensions de créativité.",
  "DescSkills": "Langages et outils que j'ai perfectionnés pour relever tous les défis de codage.",
  "DescGLua": "Développement d'une large gamme d'addons personnalisés sur le jeu Garry's Mod, acquérant une expertise approfondie en scripting Lua et GLua.",
  "DescPython": "Création de scripts, d'outils d'automatisation et de petites applications, affinant les compétences en logique et en résolution de problèmes.",
  "DescJS": "Création de fonctionnalités interactives et dynamiques, améliorant l'expérience utilisateur grâce à un scripting efficace.",
  "DescHTML_CSS": "Conception et structuration de pages web modernes, en mettant l'accent sur un balisage propre, des mises en page réactives et une cohérence visuelle.",
  "DescCSharp": "Travail sur des projets orientés objet, apprenant à structurer le code efficacement et à mettre en œuvre des solutions pratiques.",
  "DescCpp": "Application des concepts de programmation orientée objet et procédurale tout en explorant les systèmes bas niveau.",
  "DescBatch": "Rédaction de scripts pour automatiser les tâches répétitives, améliorant l'efficacité du flux de travail et la gestion des tâches.",
  "DescProjects": "Une vitrine de mon travail, des addons à la création de projets créatifs.",
  "All": "Tous",
};

// fetch('languages/en.json')
//   .then(response => response.json())
//   .then(data => {
//     tStringsEn = data;
//   })
//   .catch(error => console.error("Erreur:", error));

// fetch('languages/fr.json')
//   .then(response => response.json())
//   .then(data => {
//     tStringsFr = data;
//   })
//   .catch(error => console.error("Erreur:", error));

function loadDefaultLanguage() {
  const sLang = localStorage.getItem("sLang");
  console.log("Loading language: " + sLang);

  const mIcon = document.getElementById("lang-icon");
  if (sLang === "en") {
    mIcon.src = "resource/nav/fr.svg";
  } else if (sLang === "fr") {
    mIcon.src = "resource/nav/en.svg";
  }

  document.documentElement.lang = sLang;
  const tStrings = sLang === "en" ? tStringsEn : tStringsFr;

  for (let key in tStrings) {
   // const oElement = document.querySelector(`[sIDLanguage="${key}"]`) || document.getElementById(key) || document.getElementsByClassName(key)[0];

    const tElements = document.querySelectorAll(`[sIDLanguage="${key}"], #${key}, .${key}`);
    tElements.forEach(oElement => {
        console.log(oElement);
      if (oElement) {
        if (oElement.hasAttribute("sIDLanguage")) {
          oElement.textContent = tStrings[key];
        }
      }
    });


    // if (oElement) {
    //   oElement.textContent = tStrings[key];
    // }
  }
}

loadDefaultLanguage();

document.getElementById("lang-select").addEventListener("click", function() {
  localStorage.setItem("sLang", localStorage.getItem("sLang") === "fr" ? "en" : "fr");

  loadDefaultLanguage();
});
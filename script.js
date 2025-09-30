const tLanguages = {
  [1]: {
    sName: "LUA/GLua",
    mLogo: "logos/lua_glua.svg",
    iStars: 3,
    sIDLanguage: "DescGLua",
  },
  [2]: {
    sName: "Python",
    mLogo: "logos/python.svg",
    iStars: 3,
    sIDLanguage: "DescPython",
  },
  [3]: {
    sName: "JavaScript",
    mLogo: "logos/js.svg",
    iStars: 2,
    sIDLanguage: "DescJS",
  },
  [4]: {
    sName: "HTML/CSS",
    mLogo: "logos/html_css.svg",
    iStars: 2,
    sIDLanguage: "DescHTML_CSS",
  },
  [5]: {
    sName: "C#",
    mLogo: "logos/csharp.svg",
    iStars: 2,
    sIDLanguage: "DescCSharp",
  },
  [6]: {
    sName: "SQL",
    mLogo: "logos/sql.svg",
    iStars: 2,
    bNoShow: true,
    sIDLanguage: "DescSQL",
  },
  [7]: {
    sName: "GIT",
    mLogo: "logos/git.svg",
    iStars: 1,
    sIDLanguage: "DescGit",
    bNoShow: true,
  },
  [8]: {
    sName: "C++",
    mLogo: "logos/cpp.svg",
    iStars: 1,
    sIDLanguage: "DescCpp",
  },
  [9]: {
    sName: "Batch",
    mLogo: "logos/batch.svg",
    iStars: 1,
    sIDLanguage: "DescBatch",
  },
};

for (let iID in tLanguages) {
  const tLang = tLanguages[iID];

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
    eDesc.setAttribute("sIDLanguage", tLang.sIDLanguage);
    eLang.appendChild(eDesc);
  }

  if (tLang.bNoShow) continue;

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
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

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

if (!localStorage.getItem("sLang")) {
  localStorage.setItem("sLang", "en");
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
  "DescSQL": "Managed and queried databases, enhancing data handling and retrieval skills.",
  "DescGit": "Utilized version control systems to manage codebases, collaborate effectively, and maintain project history.",
  "DescCpp": "Applied object-oriented and procedural programming concepts while exploring low-level systems.",
  "DescBatch": "Wrote scripts to automate repetitive tasks, improving workflow efficiency and task management.",
  "DescProjects": "A showcase of my work, from addons to coding creative projects.",
  "All": "All",
  "DescFooter": "This is my personal portfolio, showcasing my skills, projects, and journey as a developer.",
  "CopyRight": "© 2025 - Vitroze - All rights reserved",
  "Pizu": "Designed by Pizu"
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
  "DescSQL": "Gestion et interrogation de bases de données, améliorant les compétences en gestion et récupération de données.",
  "DescGit": "Utilisation de systèmes de contrôle de version pour gérer les bases de code, collaborer efficacement et maintenir l'historique des projets.",
  "DescCpp": "Application des concepts de programmation orientée objet et procédurale tout en explorant les systèmes bas niveau.",
  "DescBatch": "Rédaction de scripts pour automatiser les tâches répétitives, améliorant l'efficacité du flux de travail et la gestion des tâches.",
  "DescProjects": "Une vitrine de mon travail, des addons à la création de projets créatifs.",
  "All": "Tous",
  "DescFooter": "Ceci est mon portfolio personnel, présentant mes compétences, mes projets et mon parcours en tant que développeur.",
  "CopyRight": "© 2025 - Vitroze - Tous droits réservés",
  "Pizu": "Conçu par Pizu"
};

function loadDefaultLanguage() {
  const sLang = localStorage.getItem("sLang");

  const mIcon = document.getElementById("lang-icon");
  if (sLang === "en") {
    mIcon.src = "resource/nav/fr.svg";
  } else if (sLang === "fr") {
    mIcon.src = "resource/nav/en.svg";
  }

  document.documentElement.lang = sLang;
  const tStrings = sLang === "en" ? tStringsEn : tStringsFr;

  for (let key in tStrings) {
    const tElements = document.querySelectorAll(`[sIDLanguage="${key}"], #${key}, .${key}`);
    tElements.forEach(oElement => {
      if (oElement) {
        if (oElement.hasAttribute("sIDLanguage")) {
          oElement.textContent = tStrings[key];
        }
      }
    });
  }
}

loadDefaultLanguage();

document.getElementById("lang-select").addEventListener("click", function() {
  localStorage.setItem("sLang", localStorage.getItem("sLang") === "fr" ? "en" : "fr");

  loadDefaultLanguage();
});

const tProjects = {
  [1]: {
    sLang: {
      [1]: "LUA/GLua",
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
      [1]: "LUA/GLua",
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
      [1]: "LUA/GLua",
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
      [1]: "LUA/GLua",
    },
    sTitle: "ALPR",
    sDescription:
      "A system owned by VLife Group. A system that allows you to scan a vehicle's license plate. It will display the owner's name, the vehicle's model and the vehicle's color.",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/alpr.png",
      },
    ],
    sLink: "Private",
  },
  [5]: {
    sLang: {
      [1]: "C#",
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
      [1]: "C#",
    },
    sTitle: "French Callout - LSPDFR",
    sDescription: "A callout for LSPDFR (GTA V). PROJECT OUTDATED.",
    sMedia: [],
    sLink: "Private",
  },
  [7]: {
    sLang: {
      [1]: "C++",
    },
    sTitle: "KeyPad - Arduino",
    sDescription:
      "A simple arduino project that lets you type code on the screen. If the code is good, it will emit a sound; if it's bad, it will emit a different sound.",
    sMedia: [
      {
        sType: "Video",
        sLink: "resource/creations/keypad_arduino.mp4",
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
      [1]: "C#",
    },
    sTitle: "App Desktop - PresentHTML",
    sDescription:
      "An application that allowed me to present my HTML project. Created for a school project",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/presentation_html.png",
      },
    ],
    sLink: "Private",
  },

  [10]: {
    sLang: {
      [1]: "C#",
    },
    sTitle: "App Desktop - PresentJS",
    sDescription:
      "An application that allowed me to present my JS project. Created for a school project",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/presentation_js.png",
      },
    ],
    sLink: "Private",
  },

  [11]: {
    sLang: {
      [1]: "C#",
    },
    sTitle: "App Desktop - Arduino",
    sDescription:
      "An application that allowed me to present my Arduino project. Created for a school project",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/presentation_arduino.png",
      },
    ],
    sLink: "Private",
  },

  [12]: {
    sLang: {
      [1]: "C#",
    },
    sTitle: "App Desktop - Motor",
    sDescription:
      "An application that allowed me to present my Motor project. Created for a school project",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/presentation_motor.png",
      },
    ],
    sLink: "Private",
  },

  [13]: {
    sLang: {
      [1]: "C++",
    },
    sTitle: "Robot - Arduino",
    sDescription:
      "A simple arduino project that allows you to create several behaviors with a robot, such as following a black line or creating geometric shapes prepared in the code.",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/robot_optimized_square.gif",
      },
      {
        sType: "Image",
        sLink: "resource/creations/robot_square.gif",
      },
      {
        sType: "Image",
        sLink: "resource/creations/robot_line.gif",
      },
    ],
    sLink: "Private",
  },

  [14]: {
    sLang: {
      [1]: "C#",
    },
    sTitle: "App Desktop - Robot",
    sDescription:
      "An application that allowed me to present my Robot project. Created for a school project",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/presentation_motor.png",
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
        sLink: "resource/creations/trello_googlesheet.png",
      },
    ],
    sLink: "Private",
  },

  [16]: {
    sLang: {
      [1]: "LUA/GLua",
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
      [1]: "LUA/GLua",
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
      [1]: "LUA/GLua",
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
      [1]: "LUA/GLua",
    },
    sTitle: "Armory Police NextBot",
    sDescription:
      "A police armory that brings you your gun with a realistic system and a modern UI.",
    sMedia: [
      {
        sType: "Video",
        sLink: "resource/creations/armory_police.mp4",
        bNoSound: true,
      },
    ],
    sLink: "Private",
  },

  [20]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "Tracker Phone",
    sDescription: "A system that can trace any telephone number on the map.",
    sMedia: [
      {
        sType: "Video",
        sLink: "resource/creations/tracker_phone.mp4",
        bNoSound: true,
      },
    ],
    sLink: "Private",
  },

  [21]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "Clothing System",
    sDescription:
      "A system that allows you to change outfits while keeping the same head.",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/clothing.png",
        bNoSound: true,
      },
    ],
    sLink: "Private",
  },
  [22]: {
    sLang: {
      [1]: "HTML/CSS",
    },
    sTitle: "Website - School",
    sDescription: "Project for school.",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/site.png",
        bNoSound: true,
      },
    ],
    sLink: "Private",
  },
  [23]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "History Sanction",
    sDescription:
      "A system owned by VLife Group. A system that tracks player sanctions, even those that have been deleted. Compatible: SAM & Awarn3",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/casier.png",
      },
    ],
  },
  [24]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "Escape Menu",
    sDescription: "A system owned by VLife Group. A basic escape menu.",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/escape_menu.png",
      },
    ],
  },
  [25]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "Animation Menu",
    sDescription: "A system owned by VLife Group. A basic animation menu.",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/animation_menu.png",
      },
    ],
  },
  [26]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "EMS System",
    sDescription: "A system owned by VLife Group. A advanced EMS system.",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/ems_menu.png",
      },
    ],
  },
  [27]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "F4 Menu",
    sDescription:
      "A system owned by VLife Group. A basic F4 menu (2 Design).",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/animation_menu.png",
      },
    ],
  },
  [28]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "HUD",
    sDescription: "A system owned by VLife Group. A basic HUD (2 Design).",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/hud_fun.png",
      },
      {
        sType: "Image",
        sLink: "resource/creations/hud_serious.png",
      },
    ],
  },
  [29]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "NPC Employer",
    sDescription: "A system owned by VLife Group. A basic NPC Employer.",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/npc_employer.png",
      },
    ],
  },
  [30]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "Report Bug",
    sDescription: "A system owned by VLife Group. A basic report bug menu.",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/reportbug.png",
      },
    ],
  },
  [31]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "Daily Rewards",
    sDescription:
      "A system owned by VLife Group. A basic daily rewards (3 Design).",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/daily.png",
      },
    ],
  },
  [32]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "System TP",
    sDescription: "A system owned by VLife Group. A basic system TP.",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/tp_1.png",
      },
    ],
  },

  [33]: {
    sLang: {
      [1]: "LUA/GLua",
    },
    sTitle: "Notification",
    sDescription:
      "A system owned by VLife Group. A basic system Notification.",
    sMedia: [
      {
        sType: "Image",
        sLink: "resource/creations/notification.png",
      },
    ],
  },
};

function loadProject(sLang = "All") {

  const eCategoryProjectOld = document.querySelector(".projects-list");
  if (eCategoryProjectOld) {
    eCategoryProjectOld.innerHTML = "";
  }

  const eCategoryProject = document.querySelector(".projects-list");
  if (eCategoryProject) {

    for (let iID in tProjects) {
      if (sLang !== "All" && !Object.values(tProjects[iID].sLang).includes(sLang)) {
        continue;
      }

      const tProject = tProjects[iID];
      
      const eProject = document.createElement("div");
      eProject.classList.add("project-card");
      eCategoryProject.appendChild(eProject);

      const eTitle = document.createElement("p");
      eTitle.textContent = tProject.sTitle;
      eTitle.classList.add("project-title");
      eProject.appendChild(eTitle);

      const eDivTags = document.createElement("div");
      eDivTags.classList.add("project-tags");
      eProject.appendChild(eDivTags);

      for (let sLang in tProject.sLang) {
        const eTag = document.createElement("span");
        eTag.classList.add("tag");
        eTag.textContent = tProject.sLang[sLang];
        eDivTags.appendChild(eTag);
      }

      const sDesc = tProject.sDescription.length > 190 ? tProject.sDescription.substring(0, 190) + "..." : tProject.sDescription;

      const oDesc = document.createElement("p");
      oDesc.textContent = sDesc;
      oDesc.classList.add("project-description");
      eProject.appendChild(oDesc);

      const oDivLinks = document.createElement("div");
      oDivLinks.classList.add("project-links");
      eProject.appendChild(oDivLinks);

      if (tProject.sMedia && Array.isArray(tProject.sMedia) && tProject.sMedia.length > 0) {
        const eButton = document.createElement("button");
        eButton.classList.add("details");
        oDivLinks.appendChild(eButton);

        const oMore = document.createElement("img");
        oMore.src = "resource/arrow.svg";
        eButton.appendChild(oMore);

        eButton.addEventListener("click", () => {
          const modalBackground = document.createElement("div");
          modalBackground.classList.add("blur-background");
          document.body.appendChild(modalBackground);

          const oPreviewContainer = document.createElement("div");
          oPreviewContainer.classList.add("preview-container");
          document.body.appendChild(oPreviewContainer);

          const oPreviewTrack = document.createElement("div");
          oPreviewTrack.classList.add("preview-track");
          oPreviewContainer.appendChild(oPreviewTrack);

          for (let i = 0; i < tProject.sMedia.length; i++) {
            const media = tProject.sMedia[i];

            const eMedia = document.createElement(
              media.sType === "Image"
                ? "img"
                : media.sLink.includes("youtube")
                ? "iframe"
                : "video"
            );

            eMedia.src = media.sLink;
            eMedia.classList.add("preview-item");

            oPreviewTrack.appendChild(eMedia);
            if (media.sType === "Video" && eMedia.tagName === "VIDEO") {
              eMedia.autoplay = true;
              eMedia.loop = true;
              eMedia.controls = true;
              if (media.bNoSound) {
                eMedia.muted = true;
              }
            }

            const oDotContainer = document.createElement("div");
            oDotContainer.classList.add("preview-dots");
            oPreviewContainer.appendChild(oDotContainer);

            for (let j = 0; j < tProject.sMedia.length; j++) {
              const oDot = document.createElement("div");
              oDot.classList.add("dot");
              if (j === 0) oDot.classList.add("active");
              oDotContainer.appendChild(oDot);

              oDot.addEventListener("click", () => {
                oPreviewTrack.style.transform = `translateX(-${j * 100}%)`;
                oDotContainer.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
                oDot.classList.add('active');
              });
            }
          }

          modalBackground.addEventListener("click", () => {
            document.body.removeChild(modalBackground);
            document.body.removeChild(oPreviewContainer);
            document.body.removeChild(noScroll);
          });
        });

        if (tProject && tProject.sLink != "Private" && tProject.sLink) {
          const eButton = document.createElement("button");
          eButton.onclick = () => {
            window.open(tProject.sLink, "_blank", "noopener,noreferrer");
          };
          eButton.classList.add("download");
          oDivLinks.appendChild(eButton);

          const eArrow = document.createElement("img");
          eArrow.src = "resource/download.svg";
          eButton.appendChild(eArrow);
        }
      }

    }
  }
}

loadProject();

document.querySelectorAll('.dropdown-content p').forEach(item => {
  item.addEventListener('click', event => {
    document.querySelector(".dropbtn .btn-text").textContent = item.getAttribute('sLang');

    loadProject(item.getAttribute('sLang') === "All" ? "All" : item.getAttribute('sLang'));
  });
});
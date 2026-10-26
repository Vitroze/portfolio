let tLanguages = {};

const txt = v => ({ en: "", fr: "", ...(typeof v === "string" ? { en: v } : v) });
function normalize(json) {
    const d = json && typeof json === "object" ? json : {};

    d.version = d.version || 1;
    d.languages = d.languages || {};

    d.ui = d.ui || {};
    Object.keys(d.ui).forEach(k => { d.ui[k] = txt(d.ui[k]); });

    d.about = d.about || {};
    ["hello", "name", "description"].forEach(k => { d.about[k] = txt(d.about[k]); });

    d.skills = d.skills || [];
    d.skills.forEach(s => { s.description = txt(s.description); s.stars = Number(s.stars) || 0; });

    d.projects = d.projects || [];
    d.projects.forEach(p => {
        p.title = p.title || "";
        p.description = txt(p.description);
        p.languages = p.languages || [];
        p.media = p.media || [];
        p.link = p.link || null;
    });
    return d;
}

function load_dropdown() {
  document.querySelectorAll('.dropdown-content p').forEach(item => {
    item.addEventListener('click', _ => {
      document.querySelector(".dropbtn .btn-text").textContent = item.textContent;

      loadProject(item.getAttribute('sLang') === "All" ? "All" : item.getAttribute('sLang'));
    });
  });
}


function loadSkills() {
  const eCategoryLang = document.querySelector(".skills");
  if (eCategoryLang) {
    eCategoryLang.innerHTML = "";

    const eDropDown = document.getElementById("myDropdown");
    if (eDropDown) {
      const eDropDownItems = eDropDown.querySelectorAll("p");
      eDropDownItems.forEach(item => {
        if (item.getAttribute("sLang") !== "All") {
          item.remove();
        }
      });
    }

    for (let iID in tLanguages) {
      const tLang = tLanguages[iID];
      if (!tLang) continue;

      const eLang = document.createElement("div");
      eLang.classList.add("lines");
      eCategoryLang.appendChild(eLang);

      const eLangSkill = document.createElement("div");
      eLangSkill.classList.add("language-skill");
      eLang.appendChild(eLangSkill);

      const eLangLogo = document.createElement("img");
      eLangLogo.src = tLang.mLogo;
      eLangLogo.classList.add("lang-logo");
      eLangSkill.appendChild(eLangLogo);

      const eLangInfo = document.createElement("div");
      eLangInfo.classList.add("lang-info");
      eLangSkill.appendChild(eLangInfo);

      const eLangName = document.createElement("h2");
      eLangName.textContent = tLang.sName;
      eLangName.classList.add("lang-name");
      eLangInfo.appendChild(eLangName);

      const eStarsDiv = document.createElement("div");
      eStarsDiv.classList.add("lang-stars");
      eLangInfo.appendChild(eStarsDiv);

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

      if (tLang.bNoShow) continue;

      if (eDropDown) {
        const eLangButton = document.createElement("p");
        eLangButton.href = "#";
        eLangButton.textContent = tLang.sName;
        eLangButton.setAttribute("sLang", tLang.id);
        eDropDown.appendChild(eLangButton);
      }
    }
  }

  load_dropdown();
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

function reload_observer() {
  observer.disconnect();
  document.querySelectorAll('.language-skill, .Desc, .lang-logo, .lang-name, .lang-stars')
    .forEach(el => observer.observe(el));
}

reload_observer();

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
  "hello": "Hi",
  "name": "I'm Vitroze",
  "description": "French game developer passionate about Lua and Python, with years of experience crafting custom addons for Garry’s Mod and exploring new dimensions of creativity.",
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
  "CopyRight": "© {Year} - Vitroze - All rights reserved",
  "Pizu": "Designed by Pizu",
  "PreviewHint": "Press Esc or click outside the image to close"
}

tStringsFr = {
  "about": "À propos de moi",
  "skills": "Compétences",
  "projects": "Projets",
  "hello": "Salut",
  "name": "Je suis Vitroze",
  "description": "Développeur de jeux français passionné par Lua et Python, avec des années d'expérience dans la création d'addons personnalisés pour Garry's Mod et l'exploration de nouvelles dimensions de créativité.",
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
  "CopyRight": "© {Year} - Vitroze - Tous droits réservés",
  "Pizu": "Conçu par Pizu",
  "PreviewHint": "Appuyez sur Échap ou cliquez en dehors de l'image pour quitter"
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
    let sTranslate = tStrings[key];
    if (key == "CopyRight") {
      sTranslate = sTranslate.replace("{Year}", new Date().getFullYear());
    }

    const tElements = document.querySelectorAll(`[sIDLanguage="${key}"], #${key}, .${key}`);
    if (tElements.length === 0) {
      console.warn(`No elements found for key: ${key}`);
    }

    tElements.forEach(oElement => {
      if (oElement) {
        if (oElement.hasAttribute("sIDLanguage")) {
          oElement.textContent = sTranslate;
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

let tProjects = {};

function loadProject(sLang = "All") {
  const eCategoryProject = document.querySelector(".projects-list");
  if (eCategoryProject) {
    eCategoryProject.innerHTML = "";
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

      for (let sID in tProject.sLang) {
        let sLang = tProject.sLang[sID];
        sLang = Object.values(tLanguages).find(lang => lang.id === sLang) ? Object.values(tLanguages).find(lang => lang.id === sLang).sName : sLang; // Use the name from tLanguages if available

        const eTag = document.createElement("span");
        eTag.classList.add("tag");
        eTag.textContent = sLang;
        eDivTags.appendChild(eTag);
      }

      if (tProject.mDescription) {
        const oDesc = document.createElement("p");
        oDesc.textContent = tProject.mDescription[localStorage.getItem("sLang")] && tProject.mDescription[localStorage.getItem("sLang")].length > 190 ? tProject.mDescription[localStorage.getItem("sLang")].substring(0, 190) + "..." : tProject.mDescription[localStorage.getItem("sLang")] || "";
        oDesc.classList.add("project-description");
        eProject.appendChild(oDesc);
      }

      const oDivLinks = document.createElement("div");
      oDivLinks.classList.add("project-links");
      eProject.appendChild(oDivLinks);

      if (tProject.aMedia && Array.isArray(tProject.aMedia) && tProject.aMedia.length > 0) {
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

          const oPreviewHint = document.createElement("p");
          oPreviewHint.classList.add("preview-hint");
          oPreviewHint.setAttribute("sIDLanguage", "PreviewHint");
          oPreviewHint.textContent = (localStorage.getItem("sLang") === "en" ? tStringsEn : tStringsFr)["PreviewHint"];
          document.body.appendChild(oPreviewHint);

          const oPreviewTrack = document.createElement("div");
          oPreviewTrack.classList.add("preview-track");
          oPreviewContainer.appendChild(oPreviewTrack);

          for (let i = 0; i < tProject.aMedia.length; i++) {
            const media = tProject.aMedia[i];

            const eMedia = document.createElement(
              media.type === "image"
                ? "img"
                : media.url && media.url.includes("youtube")
                ? "iframe"
                : "video"
            );

            eMedia.src = media.url;
            eMedia.classList.add("preview-item");

            if (eMedia.tagName === "IFRAME") {
              eMedia.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
              eMedia.referrerPolicy = "strict-origin-when-cross-origin";
              eMedia.allowFullscreen = true;
              eMedia.style.border = "none";
            }

            oPreviewTrack.appendChild(eMedia);
            if (media.type === "video" && eMedia.tagName === "VIDEO") {
              eMedia.autoplay = true;
              eMedia.loop = true;
              eMedia.controls = true;
              if (media.bNoSound) {
                eMedia.muted = true;
              }
            }
          }

          const oDotContainer = document.createElement("div");
          oDotContainer.classList.add("preview-dots");
          oPreviewContainer.appendChild(oDotContainer);

          for (let j = 0; j < tProject.aMedia.length; j++) {
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

          const closePreview = () => {
            document.removeEventListener("keydown", onKeyDown);
            modalBackground.remove();
            oPreviewContainer.remove();
            oPreviewHint.remove();
          };

          const onKeyDown = (e) => {
            if (e.key === "Escape") closePreview();
          };

          document.addEventListener("keydown", onKeyDown);
          modalBackground.addEventListener("click", closePreview);
        });

      }

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

loadProject();

const DATA_URL = "https://raw.githubusercontent.com/Vitroze/portfolio-json/refs/heads/main/save_github.json?t=1";
function loadJSON() {
  fetch(DATA_URL)
    .then(response => response.json())
    .then(json => {
      let data = json;
      try {
        data = normalize(data);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }

      if (data.about) {
        for (const [key, value] of Object.entries(data.about)) {
          tStringsEn[key] = value.en || "";
          tStringsFr[key] = value.fr || "";
        }
      }

      if (data.languages) {
        tLanguages = {};
        for (const [sID, skill] of Object.entries(data.languages)) {
          const iID = skill.order || Object.keys(tLanguages).length + 1;
          let sIDLanguage = (skill.description.en || skill.description.fr) ? "Desc" + skill.name.replace(/\s+/g, '') : "";
          sIDLanguage = sIDLanguage.replace(/\s+/g, ''); // Remove spaces from the ID
          sIDLanguage = sIDLanguage.replace(/[^a-zA-Z0-9]/g, '_'); // Remove special characters from the ID

          tLanguages[iID] = {
            sName: skill.name,
            id: sID,
            mLogo: skill.logo.startsWith("resource/") ? "https://raw.githubusercontent.com/Vitroze/portfolio-json/refs/heads/main/" + skill.logo : skill.logo,
            iStars: skill.stars,
            bNoShow: skill.hidden || false,
            sIDLanguage: sIDLanguage,
          };

          if (sIDLanguage) {
            tStringsEn[sIDLanguage] = skill.description.en || "";
            tStringsFr[sIDLanguage] = skill.description.fr || "";
          }

            loadSkills();
        };

        if (data.projects) {
          tProjects = {};
          for (const [_, project] of Object.entries(data.projects)) {
            const iProjectID = Object.keys(tProjects).length + 1;

            mediaArray = [];
            if (project.media && Array.isArray(project.media)) {
              mediaArray = project.media.map(media => {
                if (media.url && media.url.startsWith("resource/")) {
                  return {
                    ...media,
                    url: "https://raw.githubusercontent.com/Vitroze/portfolio-json/refs/heads/main/" + media.url
                  };
                }
                return media;
              });
            }

            tProjects[iProjectID] = {
              sLang: project.languages.reduce((acc, lang) => {
                acc[Object.keys(acc).length + 1] = lang;
                return acc;
              }, {}),
              sTitle: project.title,
              aLanguages: project.languages,
              mDescription: project.description,
              sLink: project.link,
              aMedia: mediaArray,
            };
          }

          loadProject();

        }

      }
      reload_observer();
      loadDefaultLanguage();
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
    });
}

loadJSON();
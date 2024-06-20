const linkData = [
  /*  {
    href: "https://sanketghosh.github.io/links",
    label: "Website",
    icon: "./assets/web.svg",
    alt: "website logo",
  }, */
  {
    href: "https://github.com/sanketghosh",
    label: "GitHub",
    icon: "./assets/github.svg",
    alt: "github logo",
    usernameId: "sanketghosh",
  },
  {
    href: "https://x.com/svnket",
    label: "X (Twitter)",
    icon: "./assets/x.svg",
    alt: "x logo",
    usernameId: "svnket",
  },
  /*  {
    href: "https://in.linkedin.com/in/sanketghosh",
    label: "LinkedIn",
    icon: "./assets/linkedin.svg",
    alt: "linkedin logo",
    usernameId: "sanketghosh",
  }, */
  /*   {
    href: "code.sanket13@gmail.com",
    label: "Mail",
    icon: "./assets/mail.svg",
    alt: "mail logo",
    usernameId: "code.sanket13@gmail.com",
  }, */
];

const linksContainer = document.getElementById("links__container");

linkData.map((data) => {
  const singleLink = document.createElement("div");
  singleLink.className =
    "bg-zinc-900/30 hover:bg-zinc-900/50 transition-all rounded-lg shadow-black shadow-md overflow-hidden";
  singleLink.innerHTML = `
     <a
        href=${data.label === "Mail" ? "mailto:" : ""}${data.href}
              target="_blank"
              class="flex items-center gap-4 w-full h-full p-3"
            >
              <img
                src=${data.icon}
                alt=${data.alt}
                class="p-3 bg-zinc-950 rounded-lg border-2 border-amber-500"
              />
             <div class="">
                <h2 class="text-lg lg:text-xl font-bold tracking-tight">${
                  data.label
                }</h2>
                <p
                  class="underline underline-offset-4 font-semibold text-zinc-500 tracking-tighter text-[13px] sm:text-sm lg:text-base line-clamp-1"
                >
                ${data.href}
                </p>
              </div>
            </a>
    
    `;
  linksContainer.appendChild(singleLink);
});

/* 

${data.label === "Mail" ? "" : "@"}${data.usernameId}
*/

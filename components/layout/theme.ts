export const themeStorageKey = "theme";

export const themeBootScript = `(function(){try{var t=localStorage.getItem("${themeStorageKey}");var dark=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",dark);}catch(e){}})();`;

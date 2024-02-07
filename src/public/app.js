const sunIcon = document.querySelector(".sun");
const monIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("prefers-color-scheme: dark").matches;

const iconToggle = () => {
    monIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
};

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        monIcon.classList.add("hidden");
        return;
    }

    sunIcon.classList.add("hidden");
};

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

sunIcon.addEventListener("click", () => {
    themeSwitch();
});

monIcon.addEventListener("click", () => {
    themeSwitch();
});

themeCheck();

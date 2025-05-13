export function createTabs({ containerId, tabs }) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }

    // Create tab navigation
    const tabNav = document.createElement("div");
    tabNav.style.display = "flex";
    tabNav.style.borderBottom = "2px solid #ccc";

    // Create content area
    const contentArea = document.createElement("div");
    contentArea.style.padding = "15px";
    contentArea.style.border = "1px solid #ccc";
    contentArea.style.borderTop = "none";
    contentArea.style.borderRadius = "0 0 8px 8px";

    tabs.forEach((tab, index) => {
        const tabButton = document.createElement("button");
        tabButton.textContent = tab.label;
        tabButton.style.flex = "1";
        tabButton.style.padding = "10px";
        tabButton.style.border = "none";
        tabButton.style.background = index === 0 ? "#007BFF" : "#ddd";
        tabButton.style.color = index === 0 ? "#fff" : "#000";
        tabButton.style.cursor = "pointer";
        tabButton.style.transition = "0.2s";

        tabButton.addEventListener("click", () => {
            document.querySelectorAll(`#${containerId} button`).forEach(btn => {
                btn.style.background = "#ddd";
                btn.style.color = "#000";
            });
            tabButton.style.background = "#007BFF";
            tabButton.style.color = "#fff";
            contentArea.innerHTML = tab.content;
        });

        tabNav.appendChild(tabButton);
    });

    contentArea.innerHTML = tabs[0].content; // Default to first tab

    container.appendChild(tabNav);
    container.appendChild(contentArea);
}
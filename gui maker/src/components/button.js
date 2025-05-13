export function createButton({
    label = "Click Me",
    color = "#007BFF",
    size = "medium",
    onClick = () => alert("Button clicked!")
}) {
    // Create the button element
    const button = document.createElement("button");
    button.textContent = label;
    button.style.backgroundColor = color;
    button.style.border = "none";
    button.style.borderRadius = "6px";
    button.style.padding = size === "large" ? "12px 24px" : "8px 16px";
    button.style.fontSize = size === "large" ? "18px" : "14px";
    button.style.cursor = "pointer";
    button.style.transition = "0.2s ease-in-out";

    // Hover effect
    button.addEventListener("mouseenter", () => {
        button.style.opacity = "0.8";
    });

    button.addEventListener("mouseleave", () => {
        button.style.opacity = "1";
    });

    // Click event
    button.addEventListener("click", onClick);

    return button;
}
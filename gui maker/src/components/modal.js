export function createModal({ title = "Modal Title", content = "This is the modal content.", closeText = "Close" }) {
    // Create modal wrapper
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.width = "300px";
    modal.style.background = "#fff";
    modal.style.borderRadius = "8px";
    modal.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    modal.style.padding = "20px";
    modal.style.zIndex = "1000";
    modal.style.display = "none"; // Initially hidden

    // Modal title
    const modalTitle = document.createElement("h3");
    modalTitle.textContent = title;
    modalTitle.style.marginBottom = "10px";

    // Modal content
    const modalContent = document.createElement("p");
    modalContent.textContent = content;

    // Close button
    const closeButton = document.createElement("button");
    closeButton.textContent = closeText;
    closeButton.style.marginTop = "10px";
    closeButton.style.padding = "6px 12px";
    closeButton.style.backgroundColor = "#007BFF";
    closeButton.style.color = "#fff";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "4px";
    closeButton.style.cursor = "pointer";

    // Close event
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Append elements
    modal.appendChild(modalTitle);
    modal.appendChild(modalContent);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);

    return modal;
}

export function showModal(modal) {
    modal.style.display = "block";
}
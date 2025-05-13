export function makeDraggable(element) {
    let offsetX, offsetY, isDragging = false;

    element.style.position = "absolute";
    element.style.cursor = "grab";

    element.addEventListener("mousedown", (event) => {
        isDragging = true;
        offsetX = event.clientX - element.getBoundingClientRect().left;
        offsetY = event.clientY - element.getBoundingClientRect().top;
        element.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (event) => {
        if (!isDragging) return;
        let x = event.clientX - offsetX;
        let y = event.clientY - offsetY;

        // Optional: Boundary check to prevent dragging outside viewport
        const maxX = window.innerWidth - element.offsetWidth;
        const maxY = window.innerHeight - element.offsetHeight;
        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));

        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        element.style.cursor = "grab";
    });
}
// Import all components
import { createButton } from "./components/button.js";
import { makeDraggable } from "./components/draggable.js";
import { createModal, showModal } from "./components/modal.js";
import { createTabs } from "./components/tabs.js";

// Export as a UI library object
const UI_Library = {
    createButton,
    makeDraggable,
    createModal,
    showModal,
    createTabs
};

// Allow users to globally access your library
window.UI_Library = UI_Library;

export default UI_Library;
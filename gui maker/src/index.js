// Import components
import { createButton } from "./components/button.js";
import { makeDraggable } from "./components/draggable.js";
import { createModal, showModal } from "./components/modal.js";
import { createTabs } from "./components/tabs.js";

// Create a UI library object
const UI_Library = {
    createButton,
    makeDraggable,
    createModal,
    showModal,
    createTabs,
};

// Support both ES module and global browser usage
if (typeof window !== "undefined") {
    window.UI_Library = UI_Library;
}

// Export as default for ES module compatibility
export default UI_Library;

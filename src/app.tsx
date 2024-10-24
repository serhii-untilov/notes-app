import '@fontsource/caveat/400.css';
import * as React from "react";
import { createRoot } from "react-dom/client";
import { MainSection } from './components/main-section';
import "./index.css"; // import css

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <MainSection />
    </React.StrictMode >
);

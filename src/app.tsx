import '@fontsource/caveat/400.css';
import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // import css
import { MainPage } from './pages/main-page';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <MainPage />
    </React.StrictMode >
);

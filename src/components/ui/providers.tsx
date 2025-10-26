"use client";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Navbar from "@/components/ui/navbar";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <Provider store={store}>
            <Navbar />
            {children}
        </Provider>
        </ThemeProvider>
    );
}

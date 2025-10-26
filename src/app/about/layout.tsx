import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "Online bookstore built with Next.js",
};

export default function  AboutLayout({children,}: {children: React.ReactNode;}) {
    return ( 
        <div>
            {children}
        </div>
    );
}

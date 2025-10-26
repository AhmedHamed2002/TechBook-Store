import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Details Page",
    description: "Online bookstore built with Next.js",
};

export default function DetailsLayout({children,}: {children: React.ReactNode;}) {
    return ( 
        <div>
            {children}
        </div>
    );
}

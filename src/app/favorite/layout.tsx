import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Favorite Page",
    description: "Online bookstore built with Next.js",
};

export default function  FavoriteLayout({children,}: {children: React.ReactNode;}) {
    return ( 
        <div>
            {children}
        </div>
    );
}

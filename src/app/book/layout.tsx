import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Books Page",
    description: "Online bookstore built with Next.js",
};

export default function  BooksLayout({children,}: {children: React.ReactNode;}) {
    return ( 
        <div>
            {children}
        </div>
    );
}

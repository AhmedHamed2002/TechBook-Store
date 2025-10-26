import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cart Page",
    description: "Online bookstore built with Next.js",
};

export default function  CartLayout({children,}: {children: React.ReactNode;}) {
    return ( 
        <div>
            {children}
        </div>
    );
}

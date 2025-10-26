import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Payment Page",
    description: "Online bookstore built with Next.js",
};

export default function  PaymentLayout({children,}: {children: React.ReactNode;}) {
    return ( 
        <div>
            {children}
        </div>
    );
}

"use client"
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";


export default function Providers({ children, }: { children: React.ReactNode; }) {
    return (
        <SessionProvider>
            <Provider store={store}>
            {children}
            </Provider>
        </SessionProvider>
    )
}
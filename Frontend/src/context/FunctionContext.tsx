"use client";
import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { FunctionContext } from "../interfaces/FunctionContext";

const FunctionContext = createContext<FunctionContext | undefined>(
    undefined
);

export function FunctionProvider({ children }: { children: ReactNode }) {
    function CapitalizeWord(value: string) {
        return value.split("_")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }
    function EmailValidation(value: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    const value: FunctionContext = {
        CapitalizeWord,
        EmailValidation,
    };
    return (
        <FunctionContext.Provider value={value}>
            {children}
        </FunctionContext.Provider>
    );
}
export function useFunction() {
    const context = useContext(FunctionContext);
    if (!context) {
        throw new Error("useFunction must be used within a FunctionProvider");
    }
    return context;
}

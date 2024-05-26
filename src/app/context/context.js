'use client'
import { createContext } from "react";

const NextbasicContext = createContext();



export const NextbasicProvider = NextbasicContext.Provider;
export const NextbasicConsumer = NextbasicContext.Consumer;

export default NextbasicContext;
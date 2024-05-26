import React from "react";

const NextbasicContext = React.createContext();

export const NextbasicProvider = NextbasicContext.Provider;
export const NextbasicConsumer = NextbasicContext.Consumer;

export default NextbasicContext;
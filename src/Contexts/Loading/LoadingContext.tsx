"use client";
import { useState, createContext, useEffect } from "react";

export const LoadingContext = createContext({});

function LoadingProvider({ children, showLoadingCallback }: any) {


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    showLoadingCallback(loading);
  }, [loading, showLoadingCallback]);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;

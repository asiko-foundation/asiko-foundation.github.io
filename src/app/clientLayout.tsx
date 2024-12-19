"use client";

import { useReducer, use } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

const layoutType = {
  setIsChatOpen: "setIsChatOpen",
};

function layoutReducer(state, action) {
  if (action.type === layoutType.setIsChatOpen) {
    return { ...state, isChatOpen: action.value };
  }
  return state;
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, dispatch] = useReducer(layoutReducer, { isChatOpen: false });
  const setIsChatOpen = (isopen: boolean) =>
    dispatch({ type: layoutType.setIsChatOpen, value: isopen });

  return (
    <>
      <Navbar setIsChatOpen={setIsChatOpen} />
      <div>{children}</div>
      <Footer />
      <PopupWidget
        isChatOpen={state.isChatOpen}
        setIsChatOpen={setIsChatOpen}
      />
    </>
  );
}

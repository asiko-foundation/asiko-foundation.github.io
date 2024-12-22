"use client";

import { useReducer, use } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import {
  ChatOpenContext,
  SetChatOpenContext,
} from "@/data/clientLayoutContext";

const layoutType = {
  setIsChatOpen: "setIsChatOpen",
};

interface State {
  isChatOpen: boolean;
}
interface Action {
  type: string;
  value: boolean | string | number | object;
}
const initialState: State = { isChatOpen: false };

function layoutReducer(state: any, action: Action) {
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
  const [state, dispatch] = useReducer(layoutReducer, initialState);

  function setIsChatOpen(isopen: boolean) {
    dispatch({ type: layoutType.setIsChatOpen, value: isopen });
  }

  return (
    <ChatOpenContext.Provider value={state.isChatOpen}>
      <SetChatOpenContext.Provider value={setIsChatOpen}>
        <Navbar />
        <div className="flex grow">{children}</div>
        <Footer />
        <PopupWidget />
      </SetChatOpenContext.Provider>
    </ChatOpenContext.Provider>
  );
}

import { PropsWithChildren, createContext, useState } from "react";
import { Presentation } from "../types/types.ts";
import { presentationSlice as data } from "../types/example/maximum.ts";

type PresentationContextType = {
  presentation: Presentation;
  setPresentation: (newPresentation: Presentation) => void;
};

export const PresentationContext = createContext<PresentationContextType>({
  presentation: {
    currentSlideID: null,
    name: data.items.name,
    slides: [],
  },
  setPresentation: () => {},
});

function PresentationProvider({ children }: PropsWithChildren) {
  const [presentation, setPresentation] = useState<Presentation>({
    currentSlideID: null,
    name: data.items.name,
    slides: [],
  });

  const handleSetPresentation = (newPresentation: Presentation) => {
    setPresentation({ ...newPresentation });
  };

  return (
    <PresentationContext.Provider
      value={{
        presentation,
        setPresentation: handleSetPresentation,
      }}
      children={children}
    />
  );
}

export default PresentationProvider;

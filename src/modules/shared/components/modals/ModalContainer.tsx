import { FC, Suspense } from "react";
import { ContactModal } from "./ContactModal";

export const ModalContainer: FC = () => {
  return (
    <>
      <Suspense>
        <ContactModal />
      </Suspense>
    </>
  );
};

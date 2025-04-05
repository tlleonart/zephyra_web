import { parseAsBoolean, useQueryState } from "nuqs";

export const useModal = (query: string) => {
  const [isOpen, setIsOpen] = useQueryState(
    query,
    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
  );

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, setIsOpen, open, close };
};

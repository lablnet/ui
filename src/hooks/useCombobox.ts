import { useState, useCallback } from "react";

export interface UseComboboxProps<T> {
  defaultValue?: T | null;
  onChange?: (value: T | null) => void;
}

export function useCombobox<T>({ defaultValue = null, onChange }: UseComboboxProps<T> = {}) {
  const [selected, setSelected] = useState<T | null>(defaultValue);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const select = useCallback((item: T | null) => {
    setSelected(item);
    onChange?.(item);
    setIsOpen(false);
  }, [onChange]);

  const clear = useCallback(() => {
    setSelected(null);
    onChange?.(null);
  }, [onChange]);

  return {
    selected,
    setSelected,
    query,
    setQuery,
    isOpen,
    setIsOpen,
    select,
    clear,
  };
}

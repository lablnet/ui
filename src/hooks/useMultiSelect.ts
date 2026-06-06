import { useState, useCallback } from "react";

export interface UseMultiSelectProps<T> {
  defaultValue?: T[];
  onChange?: (value: T[]) => void;
}

export function useMultiSelect<T>({ defaultValue = [], onChange }: UseMultiSelectProps<T> = {}) {
  const [selected, setSelected] = useState<T[]>(defaultValue);

  const toggle = useCallback((item: T) => {
    setSelected((prev) => {
      const isSelected = prev.includes(item);
      const next = isSelected ? prev.filter((i) => i !== item) : [...prev, item];
      onChange?.(next);
      return next;
    });
  }, [onChange]);

  const select = useCallback((item: T) => {
    setSelected((prev) => {
      if (prev.includes(item)) return prev;
      const next = [...prev, item];
      onChange?.(next);
      return next;
    });
  }, [onChange]);

  const deselect = useCallback((item: T) => {
    setSelected((prev) => {
      const next = prev.filter((i) => i !== item);
      onChange?.(next);
      return next;
    });
  }, [onChange]);

  const clear = useCallback(() => {
    setSelected([]);
    onChange?.([]);
  }, [onChange]);

  return {
    selected,
    setSelected,
    toggle,
    select,
    deselect,
    clear,
  };
}

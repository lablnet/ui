import * as React from "react";
import { X, ChevronDown, Check, Plus } from "lucide-react";
import { cn } from "@/utils";

export interface SelectizeOption {
  label: string;
  value: string;
}

export interface SelectizeProps {
  options: SelectizeOption[];
  value: string | string[]; // supports single or multi
  onChange: (value: any) => void;
  onCreateOption?: (label: string) => void;
  placeholder?: string;
  creatable?: boolean;
  isMulti?: boolean;
  className?: string;
  disabled?: boolean;
}

export const Selectize: React.FC<SelectizeProps> = ({
  options,
  value,
  onChange,
  onCreateOption,
  placeholder = "Search or create...",
  creatable = true,
  isMulti = false,
  className,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Parse values
  const selectedValues = React.useMemo(() => {
    if (isMulti) {
      return Array.isArray(value) ? value : value ? [value] : [];
    }
    return value ? [value as string] : [];
  }, [value, isMulti]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = React.useCallback(
    (optionValue: string) => {
      if (isMulti) {
        const next = selectedValues.includes(optionValue)
          ? selectedValues.filter((v) => v !== optionValue)
          : [...selectedValues, optionValue];
        onChange(next);
      } else {
        onChange(optionValue);
        setIsOpen(false);
        setQuery("");
      }
    },
    [selectedValues, isMulti, onChange]
  );

  const handleCreateOption = React.useCallback(() => {
    const trimmed = query.trim();
    if (!trimmed) return;

    // Trigger parent onCreateOption
    if (onCreateOption) {
      onCreateOption(trimmed);
    } else {
      // Fallback: use query as value
      if (isMulti) {
        onChange([...selectedValues, trimmed]);
      } else {
        onChange(trimmed);
      }
    }
    setQuery("");
    if (!isMulti) setIsOpen(false);
  }, [query, isMulti, selectedValues, onChange, onCreateOption]);

  const handleRemove = React.useCallback(
    (optionValue: string, e: React.MouseEvent) => {
      e.stopPropagation();
      if (isMulti) {
        onChange(selectedValues.filter((v) => v !== optionValue));
      } else {
        onChange("");
      }
    },
    [selectedValues, isMulti, onChange]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && query.trim() !== "") {
        e.preventDefault();
        const matched = options.find((o) => o.label.toLowerCase() === query.toLowerCase());
        if (matched) {
          handleSelect(matched.value);
        } else if (creatable) {
          handleCreateOption();
        }
      } else if (e.key === "Backspace" && query === "" && selectedValues.length > 0) {
        if (isMulti) {
          onChange(selectedValues.slice(0, -1));
        } else {
          onChange("");
        }
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    },
    [query, options, selectedValues, creatable, isMulti, onChange, handleSelect, handleCreateOption]
  );

  const filteredOptions = React.useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [options, query]);

  const showCreateItem = React.useMemo(() => {
    if (!creatable || !query.trim()) return false;
    const exists = options.some((o) => o.label.toLowerCase() === query.trim().toLowerCase());
    return !exists;
  }, [creatable, query, options]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full", disabled && "pointer-events-none opacity-50", className)}
    >
      <div
        onClick={() => {
          if (!disabled) {
            setIsOpen(true);
            inputRef.current?.focus();
          }
        }}
        className={cn(
          "flex min-h-10 w-full flex-wrap items-center justify-between rounded-md border border-input bg-background px-3 py-1.5 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 cursor-pointer transition-all",
          isOpen && "ring-2 ring-ring ring-offset-2 border-primary"
        )}
      >
        <div className="flex flex-wrap gap-1.5 items-center w-[90%]">
          {isMulti
            ? selectedValues.map((v) => {
                const label = options.find((o) => o.value === v)?.label || v;
                return (
                  <span
                    key={v}
                    className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground shadow-sm"
                  >
                    {label}
                    <button
                      type="button"
                      onClick={(e) => handleRemove(v, e)}
                      className="rounded-full hover:bg-black/10 dark:hover:bg-white/20 p-0.5 focus:outline-none transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                );
              })
            : selectedValues.length > 0 &&
              !isOpen && (
                <span className="text-foreground">
                  {options.find((o) => o.value === selectedValues[0])?.label || selectedValues[0]}
                </span>
              )}

          {(isMulti || selectedValues.length === 0 || isOpen) && (
            <input
              ref={inputRef}
              type="text"
              className="flex-1 bg-transparent border-0 py-0.5 outline-none placeholder:text-muted-foreground min-w-[100px] text-foreground"
              placeholder={selectedValues.length === 0 ? placeholder : ""}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              onKeyDown={handleKeyDown}
              disabled={disabled}
            />
          )}
        </div>

        <div className="flex items-center gap-1.5 text-muted-foreground pr-1">
          {!isMulti && selectedValues.length > 0 && !disabled && (
            <button
              type="button"
              onClick={(e) => handleRemove(selectedValues[0], e)}
              className="rounded-full p-0.5 hover:bg-accent hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg animate-scale-in">
          {showCreateItem && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleCreateOption();
              }}
              className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-3 text-sm text-primary hover:bg-accent hover:text-accent-foreground font-semibold gap-1.5 border-b border-border/50 mb-1"
            >
              <Plus className="h-4 w-4" />
              <span>Create option "{query}"</span>
            </div>
          )}

          {filteredOptions.length === 0 && !showCreateItem ? (
            <div className="py-2 px-3 text-sm text-muted-foreground text-center">No options found.</div>
          ) : (
            filteredOptions.map((option) => {
              const isSelected = selectedValues.includes(option.value);
              return (
                <div
                  key={option.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(option.value);
                  }}
                  className={cn(
                    "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-3 text-sm outline-none hover:bg-accent hover:text-accent-foreground text-foreground transition-colors justify-between",
                    isSelected && "bg-accent/40 font-medium"
                  )}
                >
                  <span>{option.label}</span>
                  {isSelected && <Check className="h-4 w-4 text-primary" />}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

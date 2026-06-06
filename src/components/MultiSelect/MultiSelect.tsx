import * as React from "react";
import { X, ChevronDown, Check } from "lucide-react";
import { cn } from "@/utils";

export interface MultiSelectOption {
  label: string;
  value: string;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value = [],
  onChange,
  placeholder = "Select options...",
  className,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Close when clicking outside
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
      const newValue = value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue];
      onChange(newValue);
    },
    [value, onChange]
  );

  const handleRemove = React.useCallback(
    (optionValue: string, e: React.MouseEvent) => {
      e.stopPropagation();
      onChange(value.filter((v) => v !== optionValue));
    },
    [value, onChange]
  );

  const handleClear = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange([]);
    },
    [onChange]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && query === "" && value.length > 0) {
        onChange(value.slice(0, -1));
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    },
    [query, value, onChange]
  );

  const filteredOptions = React.useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [options, query]);

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
          {value.map((v) => {
            const label = options.find((o) => o.value === v)?.label || v;
            return (
              <span
                key={v}
                className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground shadow-sm animate-fade-in"
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
          })}

          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-0 py-0.5 outline-none placeholder:text-muted-foreground min-w-[60px] text-foreground"
            placeholder={value.length === 0 ? placeholder : ""}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onKeyDown={handleKeyDown}
            disabled={disabled}
          />
        </div>

        <div className="flex items-center gap-1.5 text-muted-foreground pr-1">
          {value.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
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
          {filteredOptions.length === 0 ? (
            <div className="py-2 px-3 text-sm text-muted-foreground text-center">No options found.</div>
          ) : (
            filteredOptions.map((option) => {
              const isSelected = value.includes(option.value);
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

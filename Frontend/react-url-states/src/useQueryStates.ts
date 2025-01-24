import { useEffect, useState } from "react";

export default function useQueryStates(
  key: string
): [string | null, (value: string) => void] {
  const [value, setValue] = useState<string | null>(null);
  const setQueryParam = (value: string): void => {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set(key, value);
    window.history.replaceState({}, "", newUrl);
    setValue(value);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const value = searchParams.get(key);
    setValue(value);
  }, [value]);

  return [value, setQueryParam];
}

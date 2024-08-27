import { useEffect, useState } from "react";

interface useCollapseProps {
  storageKey: string;
  defaultValue: boolean;
}

/**
 * Хук для управления состоянием "свернуто/развернуто" с сохранением в LocalStorage.
 *
 * @param {string} storageKey - Ключ для сохранения состояния в LocalStorage.
 * @param {boolean} defaultValue - Значение по умолчанию, если в LocalStorage нет сохраненного состояния.
 *
 * @returns {{ collapse: boolean, toggleCollapse: React.Dispatch<React.SetStateAction<boolean>> }} - Объект с текущим состоянием "свернуто/развернуто" и функцией для его изменения.
 *
 * @example
 * const { collapse, toggleCollapse } = useCollapse({ storageKey: 'sidebar', defaultValue: true });
 *
 */
export const useCollapse = ({ defaultValue = true, storageKey }: useCollapseProps) => {
  const [collapse, toggleCollapse] = useState<boolean>(() => {
    if (!localStorage.getItem(storageKey)) {
      localStorage.setItem(storageKey, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return JSON.parse(localStorage.getItem(storageKey) as string);
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(collapse));
  }, [collapse]);

  return { collapse, toggleCollapse };
};

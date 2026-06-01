"use client";

import { useEffect } from "react";

/**
 * Anti-copy deterrent.
 *
 * Disables the right-click context menu, the common "view source / dev tools"
 * keyboard shortcuts, and image dragging. This raises the bar for casual
 * copying but is NOT real security — anyone determined can still inspect a
 * site. The meaningful protection is the server-side kill-switch
 * (lib/site-lock.ts), which can take the whole site offline instantly.
 *
 * Toggle off by setting NEXT_PUBLIC_COPY_GUARD="false".
 */
export default function CopyGuard() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_COPY_GUARD === "false") return;

    const blockContextMenu = (e: MouseEvent) => e.preventDefault();
    const blockDrag = (e: DragEvent) => e.preventDefault();

    const blockKeys = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const isDevtoolsCombo =
        key === "f12" ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c"].includes(key)) ||
        ((e.ctrlKey || e.metaKey) && ["u", "s"].includes(key));

      if (isDevtoolsCombo) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("dragstart", blockDrag);
    document.addEventListener("keydown", blockKeys);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("dragstart", blockDrag);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  return null;
}

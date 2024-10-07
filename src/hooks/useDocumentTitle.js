import { useLayoutEffect } from "react";

export default function useDocumentTitle(title) {
    useLayoutEffect(() => {
        window.document.title = title;
    }, [title]);
}
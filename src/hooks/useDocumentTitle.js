import { useLayoutEffect } from "react";

export default function useDocumenTitle(title) {
    useLayoutEffect(() => {
        window.document.title = title;
    }, [title]);
}
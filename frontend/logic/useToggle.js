import { useState } from "react";

export default function useToggle(defVal = false) {
    const [isExpanded, setIsExpanded] = useState(defVal);
    const toggle = () => setIsExpanded(!isExpanded);
    const collapse = () => setIsExpanded(false);
    return [isExpanded, toggle, collapse];
}

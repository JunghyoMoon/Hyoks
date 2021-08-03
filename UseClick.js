const useClick = (onClick) => {
    if (typeof onClick !== "function") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListner("click", onclick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListner("click", onClick);
            }
        };
    }, []);
    return element;
};

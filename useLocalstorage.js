export const useLocalstorage = (initialKey, initialValue) => {
    const [state, setState] = useState({});
    const setItem = (key, data) => {
        window.localStorage.setItem(key, JSON.stringify(data));
        setState({ key: data });
    };
    useEffect(() => {
        if (localStorage.key(0)) {
        }
    }, [state]);
    return { ...state, setItem };
};

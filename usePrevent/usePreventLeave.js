export const usePreventLeave = () => {
    const listener = (e) => {
        e.preventDefault();
        // only chrome?
        e.returnValue = "";
    };
    const enablePrevent = () =>
        window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
        window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
};

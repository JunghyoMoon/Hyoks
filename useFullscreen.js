const useFullScreen = (callback) => {
    const element = useRef();
    const triggerFullscreen = () => {
        if (element.current) {
            element.current.requestFullscreen();
            if (callback && typeof callback === "function") {
                callback(true);
            }
        }
    };
    const exitFullscreen = () => {
        document.exitFullscreen();
        if (callback && typeof callback === "function") {
            callback(false);
        }
    };
    return { element, triggerFullscreen, exitFullscreen };
};

// not done yet.
// todo: 크롬 외의 브라우져에서도 지원하게 할 것
//       state 추가하여 풀스크린 여부 검사
//       callback 검사 중복 금지.

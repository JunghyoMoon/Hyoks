// using Notification api
// MDN 찾아보기

const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }
    const fireNotification = () => {
        if (Notification.permission !== "granted") {
            // ask for permission
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotification;
};

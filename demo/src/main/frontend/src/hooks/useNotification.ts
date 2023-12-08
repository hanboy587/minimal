
export type NotiProps = {
  body : string | undefined;
  icon : string | undefined;
};

const useNotification = (title : string , options : NotiProps) => {
    if (!("Notification" in window)) {
        // console.log("This is OS does not support Notification API.");
      return;
    }
  
    const fireNotif = () => {
      /* 권한 요청 부분 */
      if (Notification.permission !== "granted") {
        // console.log("Notification.permission : ", Notification.permission);
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            /* 권한을 요청받고 nofi를 생성해주는 부분 */
            // console.log("Notification : SUCESS: ");
            new Notification(title, options);
          } else {
            // console.log("Notification : Denied: ");
            return;
          }
        });
      } else {
        /* 권한이 있을때 바로 noti 생성해주는 부분 */
        // console.log("noti!!!!!");
        // new Notification(title);
        new Notification(title, options);
      }
    };
    return fireNotif;
  };

export default useNotification;
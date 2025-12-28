import {showMessage} from "../dialog/message";
import {getCloudURL} from "../config/util/about";

export const needSubscribe = (tip = window.siyuan.languages._kernel[29]) => {
    // Cracked: always return false (no subscription needed)
    return false;
};

export const isPaidUser = () => {
    // Cracked: always return true (always paid user for S3/WebDAV)
    return true;
};

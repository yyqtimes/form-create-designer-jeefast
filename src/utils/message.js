import {Message} from 'element-ui';

const errorMessage = (msg) => {
    Message({
        message: msg,
        type: 'error',
        customClass: '_fc-message-error',
    })
};

export default errorMessage;
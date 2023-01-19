import { Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

export const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US');
};

console.log("Date", formatDate());

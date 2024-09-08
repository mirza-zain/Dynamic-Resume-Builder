import { User } from "./types";

const resumeForm = document.getElementById('forms') as HTMLFormElement;

const generateUniqueID = (): string => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const storeUserData = (userData: User) => {
    const uniqueID = generateUniqueID();
    localStorage.setItem(uniqueID, JSON.stringify(userData));
    return uniqueID;
}


resumeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const getInputValue = (id: string): string =>
        (document.getElementById(id) as HTMLInputElement)?.value.trim() ?? '';

    const user: User = {
        name: getInputValue('name'),
        sub: getInputValue('sub'),
        num: getInputValue('num'),
        email: getInputValue('email'),
        add: getInputValue('add'),
        uniname: getInputValue('uniname'),
        deg: getInputValue('deg'),
        major: getInputValue('major'),
        yearpass: getInputValue('yearpass'),
        company: getInputValue('company'),
        pos: getInputValue('pos'),
    };

})




export const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //działa

export const hasBigLetter = /^(?=.*[A-Z])/; //działa

export const hasSpecialLetters = /^(?=.*[!@#$%?^&*;<>()_+":])/; //działa

export const testRegexValue = (regexCondition, valueToCheck) => {
    if (regexCondition.test(valueToCheck)) {
        return true;
    } else {
        return false;
    }
};

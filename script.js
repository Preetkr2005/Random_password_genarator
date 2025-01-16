const input = document.querySelector("#box");
const btn = document.querySelector("#Generate");

btn.addEventListener('click', () => {
    const passwordLength = 12;
    function generatePassword(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            const randomChar = characters[randomIndex];
            password += randomChar;
        }
        return password;
    }
    const newPassword = generatePassword(passwordLength);
    input.value = newPassword;
});

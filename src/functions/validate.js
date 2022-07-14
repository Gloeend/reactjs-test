export function validate(form) {
    if (form.name === '' || form.description === '') {
        alert('Поля не должны быть пустыми')
        return false;
    }
    if (form.name.length > 63) {
        alert('Заголовок не может быть длиннее 64-х символов')
        return false;
    }
    if (form.description.length > 255) {
        alert('Описание не может быть больше 256-ти символов')
        return false;
    }
    return true;
}
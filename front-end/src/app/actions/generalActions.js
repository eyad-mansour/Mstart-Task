export const canDo = (cap, id) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.capabilities.includes(cap)) {
        return true;
    }
    if (id === Number(user && user.id)) {
        return true;
    }
    return false;
};
export const formatFormData = (formData) => {
    return formData.reduce((acc, prev) => {
        return {
            ...acc,
            [prev.name]: prev.value
        }
    }, {});
};
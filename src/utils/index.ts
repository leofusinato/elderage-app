export const noSpecialCharacters = /[\u0300-\u036f]/g;

export const removeSpecialCharacters = (text: string): string => {
  return text.normalize("NFD").replace(noSpecialCharacters, "");
};

export const formatPhoneNumber = (ddd: string, phone: string): string => {
  if (phone.length === 9) {
    return `(${ddd}) ${phone.slice(0, 5)}-${phone.slice(5)}`;
  }

  return `(${ddd}) ${phone.slice(0, 4)}-${phone.slice(4)}`;
};

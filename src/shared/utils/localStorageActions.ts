export const savePageToLocalStorage = (page: number) => {
   localStorage.setItem('currentPage', JSON.stringify(page));
};

export const getPageFromLocalStorage = () => {
   const storedPage = localStorage.getItem('currentPage');
   return storedPage ? JSON.parse(storedPage) : 1;
};

export const clearPageFromLocalStorage = () => {
   localStorage.removeItem('currentPage');
};

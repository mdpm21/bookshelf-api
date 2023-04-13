const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler
} = require('./handler');


// id belum bookId
const routes = [
    { // pakai fungsi nambah catatan yg ad di handler (create)
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    { // pakai fungsi melihat keseluruhan catatan yg ad di handler (read)
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    { // pakai fungsi melihat detail catatan yg ad di handler (read detail)
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,
    },
    { // pakai fungsi perbarui catatan yg ad di handler (update)
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdHandler,
    },
    { // pakai fungsi hapus catatan yg ad di handler (delete)
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;
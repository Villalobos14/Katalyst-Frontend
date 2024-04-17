'use client';
import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Tablita = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [newProduct, setNewProduct] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [productos, setProductos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const storedProductos = localStorage.getItem('productos');
        if (storedProductos) {
            try {
                const parsedProductos = JSON.parse(storedProductos);
                console.log('Productos cargados del localStorage:', parsedProductos);
                setProductos(parsedProductos);
            } catch (error) {
                console.error('Error parsing stored productos:', error);
            }
        } else {
            setProductos([]);
        }
    }, []);

    useEffect(() => {
        if (productos.length > 0) {
            localStorage.setItem('productos', JSON.stringify(productos));
        }
    }, [productos]);

    const itemsPerPage = 3;
    const totalPages = Math.ceil(productos.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, productos.length);
    const currentProducts = productos.slice(startIndex, endIndex);

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setNewProduct('');
        setNewQuantity('');
    };

    const addProduct = () => {
        if (newProduct.trim() === '' || isNaN(parseInt(newQuantity)) || parseInt(newQuantity) <= 0) {
            return;
        }
        const newId = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;
        const newProductObject = {
            id: newId,
            producto: newProduct,
            cantidad: parseInt(newQuantity),
        };

        setProductos([...productos, newProductObject]);
        closeModal();
    };

    const openEditModal = (producto) => {
        setSelectedProduct(producto);
        setNewProduct(producto.producto);
        setNewQuantity(producto.cantidad.toString());
        setModalOpen(true);
    };

    const editProduct = () => {
        if (selectedProduct && newProduct.trim() !== '' && !isNaN(parseInt(newQuantity)) && parseInt(newQuantity) > 0) {
            const updatedProductos = productos.map((producto) => {
                if (producto.id === selectedProduct.id) {
                    return {
                        ...producto,
                        producto: newProduct,
                        cantidad: parseInt(newQuantity),
                    };
                }
                return producto;
            });
            setProductos(updatedProductos);
            closeModal();
        } else if (!selectedProduct && newProduct.trim() !== '' && !isNaN(parseInt(newQuantity)) && parseInt(newQuantity) > 0) {
            const newId = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;
            const newProductObject = {
                id: newId,
                producto: newProduct,
                cantidad: parseInt(newQuantity),
            };
            setProductos([...productos, newProductObject]);
            closeModal();
        }
    };

    const deleteProduct = (productId) => {
        const updatedProductos = productos.filter((producto) => producto.id !== productId);
        setProductos(updatedProductos);
    };

    const deleteAllProducts = () => {
        localStorage.removeItem('productos');
        setProductos([]);
        window.location.reload();
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-16">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Inventario</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Listado de productos en el inventario, agrega o elimina productos.
                    </p>
                    <div className="mt-4 flex justify-start">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 0}
                            className="bg-[#468e4d] text-white px-1  py-1 text-sm rounded-md mr-2 cursor-pointer"
                        >
                            <ChevronLeftIcon className="h-5 w-5" />
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages - 1}
                            className="bg-[#468e4d] text-white px-1 py-1 text-sm rounded-md cursor-pointer"
                        >
                            <ChevronRightIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        onClick={openModal}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#468e4d] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#468e4d] focus:outline-none focus:ring-2 focus:ring-[#468e4d] focus:ring-offset-2 sm:w-auto"
                    >
                        Añadir producto
                    </button>
                    <button
                        type="button"
                        onClick={deleteAllProducts}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#8e4646] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#c66060] focus:outline-none focus:ring-2 focus:ring-[#8e4646] focus:ring-offset-2 sm:w-auto duration-300 transition-all ml-4"
                    >
                        Borrar todo
                    </button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Producto
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Cantidad
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Eliminar</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {currentProducts.length > 0 ? (
                                        currentProducts.map((producto) => (
                                            <tr key={producto.id}> 
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {producto.producto}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{producto.cantidad}</td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <button
                                                        className="text-[#468e4d] hover:text-[#468e4d]"
                                                        onClick={() => openEditModal(producto)}
                                                    >
                                                        Editar
                                                    </button>
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <button className="text-[#468e4d] hover:text-[#468e4d]" onClick={() => deleteProduct(producto.id)}>
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="text-center py-4 text-gray-500">No hay inventario disponible</td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                                <div className="pb-2 mx-auto mr-4">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Añadir Producto</h3>
                                        <div className="mt-2">
                                            <form className="space-y-6">
                                                <div>
                                                    <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                                                        Producto
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="text"
                                                            name="product"
                                                            id="product"
                                                            autoComplete='off'
                                                            className="shadow-sm focus:ring-[#468e4d] focus:border-[#468e4d] block w-full sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Nombre del producto"
                                                            value={newProduct}
                                                            onChange={(e) => setNewProduct(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                                                        Cantidad
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            type="number"
                                                            name="quantity"
                                                            id="quantity"
                                                            autoComplete='off'
                                                            className="shadow-sm focus:ring-[#468e4d] focus:border-[#468e4d] block w-full sm:text-sm border-gray-300 rounded-md"
                                                            placeholder="Cantidad"
                                                            value={newQuantity}
                                                            onChange={(e) => setNewQuantity(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                {selectedProduct ? (
                                    <>
                                        <button
                                            onClick={editProduct}
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#468e4d] text-base font-medium text-white hover:bg-[#2f693e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#468e4d] sm:ml-3 sm:w-auto sm:text-sm"
                                        >
                                            Guardar
                                        </button>
                                        <button
                                            onClick={closeModal}
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        >
                                            Cancelar
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={addProduct}
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#468e4d] text-base font-medium text-white hover:bg-[#2f693e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#468e4d] sm:ml-3 sm:w-auto sm:text-sm"
                                        >
                                            Guardar
                                        </button>
                                        <button
                                            onClick={closeModal}
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        >
                                            Cancelar
                                        </button>
                                    </>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tablita;
import { useState } from 'react';

const itemsPerPage = 5;

export default function Table({ data }) {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
    const currentData = data.slice(startIndex, endIndex);

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center justify-end">
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    {totalPages > 1 && (
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 0}
                                className={`mx-1 px-3 py-1 rounded ${currentPage === 0 ? 'bg-gray-300 text-gray-800' : 'bg-[#527566] text-white'}`}
                            >
                                Prev
                            </button>
                            <p className='text-white px-4 pt-1.5'>
                                {currentPage + 1}
                            </p>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages - 1}
                                className={`mx-1 px-3 py-1 rounded ${currentPage === totalPages - 1 ? 'bg-gray-300 text-gray-800' : 'bg-[#527566] text-white'}`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden  md:rounded-xl border-[0.1px]">
                            <table className="min-w-full text-white">
                                <thead className="bg-[#222222]">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left font-thin  sm:pl-6">
                                            Date
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left font-thin">
                                            Temperature
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left font-thin ">
                                            Heart Rate
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left font-thin ">
                                            Aceleration
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left font-thin ">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="border-transparent bg-[#CFCFCF] rounded-t-xl">
                                    {currentData.map((data, index) => (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap py-4 text-sm text-gray-900 sm:pl-6 ">
                                                {data.date}
                                            </td>
                                            <td className="whitespace-nowrap py-4 text-sm text-gray-900 ">
                                                {data.temperature} °
                                            </td>
                                            <td className="whitespace-nowrap py-4 text-sm text-gray-900 ">
                                                {data.heartRate} bpm
                                            </td>
                                            <td className="whitespace-nowrap py-4 text-sm text-gray-900 ">
                                                {data.aceleration} km/h
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-[#000000] ">{data.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

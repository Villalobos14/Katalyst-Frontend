const data = [
    {
        date: '20-02-24',
        temperature: '36',
        heartRate: '140',
        aceleration: '10',
        status: 'Increible'
    },
    {
        date: '20-02-24',
        temperature: '36',
        heartRate: '140',
        aceleration: '10',
        status: 'Increible'
    },
    {
        date: '20-02-24',
        temperature: '36',
        heartRate: '140',
        aceleration: '10',
        status: 'Increible'
    },
    
]

export default function UserTable() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center justify-end">
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-[#527566] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#31493f] focus:outline-none focus:ring-2 focus:ring-[#31493f] focus:ring-offset-2 sm:w-auto hover:duration-200 hover:scale-105"
                    >
                        Add user
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
                                            ID
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Nombre de Usuario
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Correo
                                        </th>
                                        
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {data.map((data, index) => (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {data.date}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.heartRate} bpm</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.temperature} °</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> 
                                                <button className="bg-[#243026] text-white px-3 py-1 rounded-lg">eliminar</button>
                                            </td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
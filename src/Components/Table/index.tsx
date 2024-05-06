import React from 'react';

interface UserData {
    name: string;
    position: string;
    email: string;
    password: string;
}

const Table: React.FC = () => {
    // Ambil data dari local storage
    const existingData = localStorage.getItem('registrationData');
    // Parse data JSON jika tersedia atau gunakan array kosong jika tidak
    const jsonData = existingData ? JSON.parse(existingData) : [];

    return (
        <div className="w-full max-w-screen-lg mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">User Data</h2>
            <div className="bg-sage-500 text-black p-4 rounded-t-lg">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="p-2">Name</th>
                            <th className="p-2">Position</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map melalui data JSON dan buat baris tabel untuk setiap item */}
                        {jsonData.map((user: UserData, index: number) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="p-2">{user.name}</td>
                                <td className="p-2">{user.position}</td>
                                <td className="p-2">{user.email}</td>
                                <td className="p-2">{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;

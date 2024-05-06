import React from 'react';
import { saveAs } from 'file-saver';

// Definisikan antarmuka untuk struktur data registrasi
interface RegistrationData {
  name: string;
  position: string;
  email: string;
  password: string;
}

const DownloadExcelButton: React.FC = () => {
  const downloadExcel = () => {
    // Ambil data dari local storage
    const existingData = localStorage.getItem('registrationData');
    let jsonData: RegistrationData[] = existingData ? JSON.parse(existingData) : [];


    try {
        // Coba untuk menguraikan JSON dari localStorage
        jsonData = existingData ? JSON.parse(existingData) : [];
      } catch (error) {
        // Tangani kesalahan jika parsing JSON gagal
        console.error('Error parsing JSON data:', error);
        // Jangan lakukan apa-apa atau keluar dari fungsi
        return;
      }
    // Ubah data menjadi format CSV
    const csvContent = "data:text/csv;charset=utf-8," +
      "Name,Position,Email,Password\n" +
      jsonData.map(data => `${data.name},${data.position},${data.email},${data.password}`).join("\n");

    // Buat blob dari data CSV
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });

    // Unduh file Excel
    saveAs(blob, 'registration_data.csv');
  };

  return (
    <div className="flex justify-center">
    <button 
      onClick={downloadExcel} 
      className="bg-gray-700 text-white py-2 px-4 rounded-lg"
    >
      Download Excel
    </button>
  </div>
    
  );
};

export default DownloadExcelButton;

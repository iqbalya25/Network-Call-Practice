import React from "react";
import Navbar from "../../Components/NavBar";
import Table from "../../Components/Table";
import DownloadExcelButton from "../../Components/CollectDataExcel";

const UserDisplay = () => {
    return(

        <div>
            <div>
                <Navbar/>
            </div>

            <div>
                <Table/>
            </div>
           
            <div>
                <DownloadExcelButton/>
            </div>
        </div>
    
    );
};

export default UserDisplay;
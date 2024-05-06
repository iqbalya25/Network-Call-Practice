
import Navbar from "../../Components/NavBar";
import RegistrationForm from "../../Components/RegisterForm";

const RegisterUser = () => {
    return(
        <div>

            <div>
                <Navbar/>
            </div>

            <div className="grid grid-cols-1 ">
                <div className="flex justify-center py-8">
                    <RegistrationForm/>
                </div>
            </div>

            <div>
                
            </div>

        </div>

    );
}

export default RegisterUser
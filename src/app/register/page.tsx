// import { FormNavigation } from "../components/FormNavigation";
import { FormRegister } from "../components/FormRegister";
import { Stepper } from "../components/Stepper";

const Register = () => {
    return (
        <div>
            <Stepper />
            <FormRegister />
            {/* <FormNavigation /> */}
        </div>
    );
};

export default Register;
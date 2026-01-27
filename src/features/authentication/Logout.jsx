import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/Button";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
    const {logout, isLoading} = useLogout();
    
    function handleLogout() {
        if (isLoading) return;
        logout();
    }

    return (
        <ButtonIcon disabled={isLoading} onClick={handleLogout}>
            {!isLoading ? <HiArrowRightOnRectangle/> : <SpinnerMini/>}
        </ButtonIcon>
    )
}

export default Logout;
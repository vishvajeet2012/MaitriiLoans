import VehicleLoanHero from "../personal-loan/vechileHero";
import VehicleLoanDocuments from "./vechileDoucmentrequrie";
import VehicleLoanInfo from "./vechileLoanInfo";

export default function VehicleLoan() {
    return (
        <div>
            <VehicleLoanHero />
            <VehicleLoanInfo />
            <VehicleLoanDocuments />

        </div>
    )
}
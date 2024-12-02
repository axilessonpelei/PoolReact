import TokenInfo from "../tokenInfo/tokenInfo.jsx";
import Swap from "../swap/swap.jsx";
import AddLiquidity from "../addliqidity/addLiqidity.jsx";

const PoolCard = ({ poolAddress }) => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <TokenInfo poolAddress={poolAddress} />
                </div>
                <div className="col-md-4">
                    <Swap poolAddress={poolAddress} />
                </div>
                <div className="col-md-4">
                    <AddLiquidity poolAddress={poolAddress} />
                </div>
            </div>
        </div>
    );
};

export default PoolCard;

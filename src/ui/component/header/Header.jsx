import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../core/context/context.jsx";

const Header = () => {
    const { wallet, logout } = useContext(AppContext);

    return (
        <header className="header">
            <div className="text">
                <h1>профессионалы 2024</h1>
                <Link to='/router' className='btn btn-primary'>router</Link>
                <Link to='/pool' className='btn btn-primary'>pool</Link>
                <Link to='/staking' className='btn btn-primary'>staking</Link>
                {wallet.length === 0 ? (
                    <Link to="/" className='btn btn-primary'>регистрация</Link>
                ) : (
                    <>
                    <Link to="/" className='btn btn-primary' onClick={logout}>выйти</Link>
                        <Link to="/" className='btn btn-primary'>личный кабинет</Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img2 from '../../public/static/img/2.jpg';
import Select from 'react-select';



const Profile = () => {
    const [isNew, setIsNew] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const handleChange = (e) => {
        navigate(e.target.value)
    }

    const options = [
        { value: '/login', label: 'Login' },
        { value: '/signup', label: 'Signup' }
    ];

    // useEffect(() => {
    //     if (location.pathname === '/login') setIsNew(false);
    //     else if (location.pathname === '/signup') setIsNew(true);
    // }, [location]);
    return (
        <div className='profile'>
            <img src={img2} />
            {/* 
            <Link to={isNew ? '/login' : '/signup'} >
                <button
                    onClick={
                        (e) => {
                            if (isNew) setIsNew(false);
                            else setIsNew(true);
                        }
                    }
                >{isNew ? ('Login') : ('Signin')}</button>
            </Link>
            {(location.pathname === '/dashboard') ? (<Link to='/'><button>Logout</button></Link>) : (<></>)} */}

            {(location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login') ? (
                <>
                    <select onChange={handleChange} >
                        <option value="/login">Login</option>
                        <option value="/signup">Signup</option>
                    </select>
                    {/* <Select options={options} defaultValue={options[0]}></Select> */}
                </>
            ) : (
                <>
                    <Link to='/'><button>Logout</button></Link>
                </>
            )}
        </div>
    )
}


export default Profile;

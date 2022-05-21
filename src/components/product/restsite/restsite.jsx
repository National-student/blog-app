import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './restsite.css';
import icon from '../../../assets/images/Icon.png'
import arrow from '../../../assets/images/arrow.png'
import clock from '../../../assets/images/time.png'

const renderData = (users) => {
 
    return (
         <ul className='user-list-rest'>
            {
                users.map((user) => (
                    <li className='user-item' key={user.id}>
                        <Link className='rest-link' to={`/post/${user.id}`}>
                            <h5 className='user-date'>September 24.2020</h5>
                            <p className='user-text'>{user.title}</p>
                            <h6 className='user-time'>
                                <img src={clock} alt="time" width={17} height={17}/>
                                <p className='user-time-text'>3 minutes read</p>
                            </h6>
                        </Link>
                    </li>
                ))
            }
        </ul>
        
       
    );
}

function Restsite() {
    const [users, setUsers] = useState([])
    const [currentPage, setcurrentPage] = useState([1])
    const [itemsPerPage, setitemsPerPage] = useState([10])
    const [pageNumberLimit, setpageNumberLimit] = useState(5)
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0)


    const handleClick = (evt) => {
        setcurrentPage(Number(evt.target.id))
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++)
    {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
    const renderPageNumber = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit)
        {
            return (
                <li key={number} id={number} onClick={handleClick} className={currentPage === number ? "active" : null}>
                    {number}

                </li>
            );
        } else
        {
            return null;
        }
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => (err))
    }, [])

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1)
        if (currentPage + 1 > maxPageNumberLimit)
        {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    };
    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1)
        if ((currentPage - 1) % pageNumberLimit === 0)
        {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }
    return (
        <>
            <div className='restsite'>
                <h2 className='user-title'>Recent Posts</h2>
                {renderData(currentItems)}
                <ul className='render-number'>
                    <li>
                        <button className='Pr' onClick={handlePrevbtn} desabled={currentPage === pages[0] ? "true" : "false"}>
                            <img src={icon} alt="icon" /> </button>
                    </li>
                    {renderPageNumber}
                    <li>
                        <button className='nx' onClick={handleNextbtn} desabled={currentPage === pages[pages.length - 1] ? "true" : "false"} >
                            <img src={arrow} alt="arrow" width={6} height={11}/>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )

}
export default Restsite; 
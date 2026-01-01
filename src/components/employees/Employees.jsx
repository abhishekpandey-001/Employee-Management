import Layout from '../layout/Layout'
import { CiEdit } from 'react-icons/ci'
import { MdOutlineDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { openDeletePopup, openEmployeePopup } from '../../store/features/popup/popup.slice'

const Employees = () => {

    const employeesDetails = useSelector(state => state.employee.employees)
    return (
        <Layout>
            <ul className="list bg-base-100 rounded-box shadow-md">
                {employeesDetails.map((details) => (
                    <EmployeeCard details={details} key={details.id} />
                ))}
            </ul>
        </Layout>
    )
}


const EmployeeCard = ({ details }) => {

    const dispatch = useDispatch();
    return (
        <li className="list-row">
            <div><img className="size-10 rounded-box" src={details.profileUrl} /></div>
            <div>
                <div>{details.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">{details.email}</div>
            </div>
            <p className="list-col-wrap text-xs">
                {details.bio}
            </p>
            <button className="btn btn-square btn-ghost" onClick={() => dispatch(openEmployeePopup(details))}>
                <CiEdit className='text-xl' />
            </button>
            <button className="btn btn-square btn-ghost" onClick={() => dispatch(openDeletePopup(details.id))}>
                <MdOutlineDelete className='text-xl' />
            </button>
            <button className="btn btn-square btn-ghost">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
            </button>
        </li>
    )
}

export default Employees

import {useDispatch, useSelector} from 'react-redux'
import { closeEmployeePopup } from '../../store/features/popup/popup.slice';
import { useState } from 'react';
import { postEmployee } from '../../store/features/employee/employee.thunk';

const EmployeePopup = () => {
    const [formDetails, setFormDetails] = useState({
        profileUrl: '',
        bio: '',
        name: '',
        email: '',
        highlight: false
    })
    

    const popup = useSelector(state=>state.popup.employeePopup);
    const dispatch = useDispatch()

    if(!popup) return null;

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    const handleSubmit = async ()=>{
        await dispatch(postEmployee(formDetails));
        dispatch(closeEmployeePopup());
    }


    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center' onClick={()=>dispatch(closeEmployeePopup())}>
            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4" onClick={(e)=>e.stopPropagation()}>
                <legend className="fieldset-legend">Employee Detaiils</legend>

                <label className="label">Profile URL</label>
                <input type="text" className="input" placeholder="Profile URL" name='profileUrl' onChange={handleInputChange}/>

                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" name='name' onChange={handleInputChange}/>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name='email' onChange={handleInputChange} />

                <label className='label'>Bio</label>
                <textarea className='textarea h-24' placeholder='Bio' name='bio' onChange={handleInputChange}></textarea>

                <button onClick={handleSubmit} className='btn btn-neutral mt-4'>Submit</button>
            </fieldset>
        </div>
    )
}

export default EmployeePopup

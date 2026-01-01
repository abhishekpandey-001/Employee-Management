import { useDispatch, useSelector } from 'react-redux'
import { closeEmployeePopup } from '../../store/features/popup/popup.slice';
import { useEffect, useState } from 'react';
import { postEmployee, updateEmployee } from '../../store/features/employee/employee.thunk';

const EmployeePopup = () => {
    const [formDetails, setFormDetails] = useState({
        profileUrl: '',
        bio: '',
        name: '',
        email: '',
        highlight: false
    })


    const popup = useSelector(state => state.popup.employeePopup);
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        if (popup.id) {
            await dispatch(updateEmployee({
                id: popup.id,
                details: formDetails
            }))
        }
        else {
            await dispatch(postEmployee(formDetails));
        }
        dispatch(closeEmployeePopup());
    }

    useEffect(() => {

        if (popup) {
            setFormDetails({
                profileUrl: '',
                bio: '',
                name: '',
                email: '',
                highlight: false
            })
        }

        else if (popup?.id) {
            setFormDetails({
                profileUrl: popup.profileUrl,
                bio: popup.bio,
                name: popup.name,
                email: popup.email,
                highlight: false
            })
        }
    }, [popup])

    if (!popup) return null;

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center' onClick={() => dispatch(closeEmployeePopup())}>
            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border p-4" onClick={(e) => e.stopPropagation()}>
                <legend className="fieldset-legend">Employee Detaiils</legend>

                <label className="label">Profile URL</label>
                <input type="text" className="input" placeholder="Profile URL" name='profileUrl' onChange={handleInputChange} value={formDetails.profileUrl} />

                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" name='name' onChange={handleInputChange} value={formDetails.name} />

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name='email' onChange={handleInputChange} value={formDetails.email} />

                <label className='label'>Bio</label>
                <textarea className='textarea h-24' placeholder='Bio' name='bio' onChange={handleInputChange} value={formDetails.bio}></textarea>

                <button onClick={handleSubmit} className='btn btn-neutral mt-4'>Submit</button>
            </fieldset>
        </div>
    )
}

export default EmployeePopup

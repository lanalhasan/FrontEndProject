import './SignUp.css'
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
    const navigate = useNavigate()
    return (
        <div className="container" >
<form>
            <div className="row">
                <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="signup my-5 p-5">
                    
                    <img src="https://ferasjobeir.com/frontend-app/static/media/logo.1bb8db420e540d66b7c4a6a8350ca833.svg" alt=""/>
                    <h1 className= 'acc mb-3'>Create Account</h1>

                        <label htmlFor='name' className='mb-2'>Name</label>
                        <input type='text' id='name' className='form-control mb-3' />

                        <label htmlFor='email' className='mb-2'>Email Address</label>
                        <input  type='email' id='email' className='form-control mb-3' />

                        <label htmlFor='password' className='mb-2'>Password</label>
                        <input  type='password' id='password' className='form-control mb-3' />

                        <label htmlFor='password_confirmation' className='mb-2'>Password Confirmation</label>
                        <input  type='password' id='password_confirmation' className='form-control mb-3' />
                    <div className='d-flex justify-content-between mt-5 align-items-center'>
                        <button type="button" className="btn btn-link" onClick={()=> navigate('/signin')}>Sign In</button>
                        <input type='button' value='Register' className='btn btn-primary w-50 ' />
                    </div>
                    </div>
                </div>
            </div>
</form>
        </div>
    )
}

export default SignUp;
import SignUp from '../../pages/SignUp/SignUp'
import './Information.css'

const Information = () => {
    return (
        <div className='info'>
            <div  className='prof navbar sticky-top bg-light w-100'><h4 className='m-0 pt-1 px-3'>Profile</h4></div>
            <form>
                <div className='p-3 mb-4 user'>
                <div className="alert alert-info" role="alert">My Information</div>
                <div  className="form-field mb-3 user-avatar">
                    <label htmlFor="avatar" className="mx-auto my-2 d-block w-25">
                    <img src="https://www.gravatar.com/avatar/1683ce7f573f1af1584ea5b33bbf0e19?s=200" className="d-block mx-auto rounded-circle w-100"/>
                    </label>
                </div>
                <div>
                <label htmlFor='name' className=' mb-2'>Name<h6 className='star'>*</h6></label>
                        <input type='text' id='name' className='form-control mb-3' />

                        <label htmlFor='email' className='mb-2'>Ema il Address<h6 className='star'>*</h6></label>
                        <input  type='email' id='email' className='form-control mb-3' />

                        <label htmlFor='password' className='mb-2 '>Password<h6 className='star'>*</h6></label>
                        <input  type='password' id='password' className='form-control mb-3' />

                        <label htmlFor='password' className='mb-2'>New Password</label>
                        <input  type='password' id='password' className='form-control mb-3' />

                        <label htmlFor='password_confirmation' className='mb-2'>New Password Confirmation</label>
                        <input  type='password' id='password_confirmation' className='form-control mb-3' />
                  
                        <button type="submit" className='btn btn-primary mb-3 '>Update Profile</button>
                </div>
                </div>
            </form>
            <div class="mb-4 p-3"><div class="alert alert-info">My Posts</div><ul class="list-group"></ul></div>
        </div>
    )
}
export default Information
import React from 'react';
import vector from '../../img/Vector.png'
import './ForgotPassword.css'

const Forgotpassword = () => {
    return (
        <div className='forgotpassword'>
            <div className="forgotpassword-content">
                <div className="forgotpassword-top">
                    <img className="forgotpassword-img" src={vector} alt="" />
                    <div className="forgotpassword-tittle">
                        Đặt lại mật khẩu
                    </div>
                </div>
                <div className="forgotpassword-input">
                    <input className='text-input' type="text" placeholder='Nhập số điện thoại' name="" />
                </div>
                <div class="form__field">
                    <button className='btn' type="submit">Tiếp theo</button>
                </div>
            </div>
        </div>
    );
}

export default Forgotpassword;

import React from 'react';
import './footer.css';
import logo from '../../img/logo.png';
import fb from '../../img/fb.png';
import youtube from '../../img/Frame.png';
import pay1 from '../../img/visa.png';
import pay2 from '../../img/pay2.png';
import pay3 from '../../img/pay3.png';
import pay4 from '../../img/paypal.png';
import ungdung1 from '../../img/ungdung1.png';
import ungdung2 from '../../img/ungdung2.png';
import image1 from '../../img/image 6.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="img-logo">
                <img src={logo} alt="" />
            </div>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h4>CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ SẢN XUẤT HOÀNG SA</h4>
                    <div className="desc-footer">
                        <p>Mã số thuế:
                            0107747933</p>
                        <p> Địa chỉ:
                            Xóm Hàng Gậu, Đội 7, xã Chàng Sơn, huyện Thạch Thất, thành phố Hà Nội, Việt Nam
                        </p>
                        <p>Điện thoại:
                            0938895622</p>

                    </div>
                </div>
                <div className="footer-top-right">
                    <div class="footer-links1">
                        <h2>Về chúng tôi</h2>
                        <ul>
                            <li>Trang Chủ</li>
                            <li>Về Chúng Tôi</li>
                            <li>Tuyển dụng</li>
                        </ul>
                    </div>
                    <div class="footer-links2">
                        <h2>Dịch vụ khách hàng</h2>
                        <ul>
                            <li>Chăm sóc khách hàng</li>
                            <li>Liên hệ chúng tôi</li>
                            <li>Chính sách và quy tắc</li>
                        </ul>
                    </div>
                    <div class="footer-links3">
                        <h2>Dịch vụ thương mại</h2>
                        <ul>
                            <li>Đảm bảo thương mại</li>
                            <li>Danh tính doanh nghiệp</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='hr' />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <img className='footer-logo' src={image1} alt="" />
                    <div className="desc-footer-bottom">
                        <p>Địa chỉ văn phòng đặt tại trụ sở: Số 41 đường số 12, KDC ParkHills CityLand, phường 10, Gò Vấp, Hồ Chí Minh.</p>
                        <p> HiHiHi nhận đặt hàng trực tuyến và giao tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng.</p>
                        <p>Giấy chứng nhận Đăng ký Kinh doanh số 0107747933 do Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội cấp ngày 07 tháng 03 năm 2017.</p>
                        <p>2021 - Bản quyền của Công Ty Cổ Phần Đầu Tư và Sản Xuất Hoàng Sa.</p>
                    </div>
                </div>
                <div className="footer-bottom-right">
                    <div className="footer-social">
                        <h2>Mạng xã hội</h2>
                        <div className="img-social">
                            <img className='fb' src={fb} alt="" />
                            <img src={youtube} alt="" />
                        </div>
                    </div>
                    <div className="footer-pay">
                        <h2>Thanh toán</h2>
                        <div className="img-pay">
                            <img className='pay1' src={pay1} alt="" />
                            <img className='pay2' src={pay2} alt="" />
                            <img className='pay3' src={pay3} alt="" />
                            <img className='pay4' src={pay4} alt="" />
                        </div>
                    </div>
                    <div className="footer-pay">
                        <h2>Tải ứng dụng</h2>
                        <div className="img-pay">
                            <img className='ud1' src={ungdung1} alt="" />
                            <img src={ungdung2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

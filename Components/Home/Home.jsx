import { Link } from 'react-router-dom'
import leftImage from '../../src/img/pixelcut-export.png'



export default function Home() {
    return (
        <div className="Big">

            <div className="Container">
                <img src={leftImage} className='left-img' alt="" />
            </div>

            <div className="right">
                <form>
                    <h1 className="insta_header" href={"instagram.com"} style={{ height: "20px" }}>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
                    <div className="form-group">
                        <input type="text" className="input1" id="username" placeholder=" Phone number, username, or email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="input2" id="password" placeholder=" Password" />
                    </div>
                    <button type="submit" className="login">Log in</button>
                    <p className="or">_______________  OR  _______________</p>
                    <Link to="/404">
                        <a href="" className="facebook" >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU7WZj///8lS5Hh5O0hSJDz9PgxU5XV2eYsT5P7/P22vtQpTZI4V5ckSpHJz9/k5+8bRY9EYJyNm71yhLB6i7Skr8pccqartM2Wo8JRaqHY3OcAOIk/XJpjeKmcqMWIl7tsf63DytxgdaeCkbiyu9GG+yoLAAAEcklEQVR4nO3d63KbSBSFUUCowe7mKpBlJ5Fvef9nHBRbY81UWWwBh+aQ/f1KVcqEFUsI1N0QhF9ti806KrYXquD8h7yxcRatoyxOm/x/wqSKjAvWkzNRlVwK63JNvI9cWX8Jd9b37ohkd2dhvU5gR6w/hEnpe0/EKpM/wmp978FzrjoJ88j3fggW5Z2wMb53QzDTdEK73hdp9zJNw2Ab+94L0eJtUGS+d0K0rAg2az7QdIeaDYXao1B/FOqPQv1RqD8K9Ueh/ijUH4X6o9B3zpj0M5OaU8654JavPxcrdM7YOP75q6mP7cOptj0e6uf33ctbFXR/k0WR7cj91mUKncmil2NehN+2LTb568Ph/bGXuEShiR/bp+9x/+k+7dva4oQuCtorvzv1Qhfv836WXqHL9uirU6fQuNt+f+qEnzMnVis0aTIAqEiY7u+GAPUIbTPIp0cYDXkLahJGz0OBSoTp0JeoFqHZDwcqEQ47iuoRlreeqGkTpocxQAVC93MUUIEwHnSupkjoXsYBly8sb7icVyk0u5HAxQvjUZ8UCoTucSxw6cL0fu3CeMz5mgbh+OPM0oX2de3CeNsvUC2c4Ei6cKEZd1WhQJi+4pDi/rB7DFL72b8rKW3/YhiPwgw9J71rq9ieBkMHrXzxKIxAYBunYxb1+BM68Auot5G7509o3iHgfuyyM4/CIwKse4+VffkTQqfdxfjVrf6EFhkOfR+/NNKfMEKufidYOOhPiHwcTrF+d9nCdoL1ux6FwJXFFCuU/QmRa6f+OV39LVs4xSLzZQunWKFMoVwUUohGoVwUUohGoVwUUohGoVwUUohGoVwUUohG4bjclRBhfG0Dp3wLnblSCQjLaxs45Vto+w0jA0bfRIXoXITh7T2vVpcX+l6PLy68AwbBdQuRW6/qFubAfch1C38Dc1F0Cw/AB6JuITIKrluIjILrFiJn5qqF0J3IVQuhPVctfEUey6Fa+IBMzVQtrL1fH0oLX7xf40sLoWerqBZCE4g1C7fQV3GahU/QjmsWQh+HqoUttFJBs/AZmn6qWfgLmkGsWYhNkdYsxBZjKBaCT3FSLEyw/VYs7F8CrF14xNYqKBaC69oUjx8CI2viQvOUXAm47ce1H3+Cxrilx/Ej+30/gFHuH1d+Hn1qI+diyEUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWgUykUhhWh/hRC8k83UzSXMigC6k+v0zSWMt0GYTvDU3SH/8ixCl4bBJE9Ovr2ZhKbphFM83/v2ZhJGeSfE7gM6dfMIXRWehAl0I9CJm0dYJn+EYQ3dRXLaZhHaOvwQhrv5iXMI7S48C8O6nPu9KC90ZR1+CcOkioCHtkyYsNCZqErCS2EY5o2Ns2i2oDthDd14FtsmP28luNjittjM111/g7ddXP73/QNYSl9AM/Q0QgAAAABJRU5ErkJggg==" alt="" className="facebook-icon" />
                            Log in with Facebook</a>
                    </Link>
                    <p className="forgot-password">Forgot password?</p>
                </form>
                <div className="account">
                    <h4>Don`t have an account?

                        <a href="" className='href' style={{ fontWeight: "500"}}>Sign up</a>
                    </h4>
                </div>
                <h4>Get the app</h4>
                <img src="../../src/img/playmarket.png" alt="" />
                <Link to={"https://play.google.com/store/search?q=instagram&c=apps&hl=ru"}>
                </Link>
                <img src="../../src/img/microsoft.png" alt="" />
            </div>
        </div>
    )
}

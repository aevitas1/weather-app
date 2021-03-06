import getCurrentDate from './DateCalc'
import { FaCloudRain, FaCloudSun, FaCloudSunRain, FaSnowflake, FaSun, FaCloud, FaFileExport } from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Dates() {
    return (
        <div className='dates'>
            <div className="topDate">
                <h1><FaCloud className='weatherIcons'/>{getCurrentDate(0)}</h1>
            </div>
            <div className="bottomDates">
                <div>
                    <p><FaCloudRain className='weatherIcons' />{getCurrentDate(1)}</p>
                    <Link to=''><button>More info...</button></Link>
                    </div>
                <div>
                    <p><FaCloudSun className='weatherIcons' />{getCurrentDate(2)}</p>
                    <Link to=''><button>More info...</button></Link>
                    </div>
                <div>
                    <p><FaSnowflake className='weatherIcons'/>{getCurrentDate(3)}</p>
                    <Link to=''><button>More info...</button></Link>
                    </div>
                <div>
                    <p><FaCloudSunRain className='weatherIcons'/>{getCurrentDate(4)}</p>
                    <Link to=''><button>More info...</button></Link>
                    </div>
                <div>
                    <p><FaSun className='weatherIcons'/>{getCurrentDate(5)}</p>
                    <Link to=''><button>More info...</button></Link>
                    </div>
                </div>
        </div>
    )
}
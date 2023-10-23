import { Link } from "react-router-dom";


function Footer(){
    return (
        <div className="footer">
        <div>
         <h2 className="text">THE BASICS</h2>
         <ul>
            <li><Link>About CINE</Link></li>
            <li><Link>Contact Us</Link></li>
            <li><Link>Support Forums</Link></li>
            <li><Link>API</Link></li>
            <li><Link>System Status</Link></li>
         </ul>
        </div>
        <div>
        <h2 className="text">GET INVOLVED</h2>
        <ul>
            <li><Link>Contribution Bible</Link></li>
            <li><Link>Add New Movie</Link></li>
            <li><Link>Add New TV Show</Link></li>
        </ul>
        </div>

        <div>
        <h2 className="text">COMMUNITY</h2>
        <ul>
            <li><Link>Guidelines</Link></li>
            <li><Link>Discussions</Link></li>
            <li><Link>Leaderboard</Link></li>
            <li><Link>Twitter</Link></li>
        </ul>
        </div>

        
        <div>
        <h2 className="text">LEGAL</h2>
        <ul>
            <li><Link>Terms of Use</Link></li>
            <li><Link>API Terms of Use</Link></li>
            <li><Link>Privacy Policy</Link> </li>
            <li><Link>Takedown Request</Link> </li>
        </ul>
        </div>
        </div>
    )
}

export default Footer;
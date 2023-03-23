import { Link,  } from "react-router-dom"
import './styles.css'

export default function Admin (){

    
    return(
        <div>
             <nav>
                <ul className="admin-menu">
                    <li>
                        <Link to="/admin/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/product">
                            Product
                        </Link>
                    </li>
                </ul>
             </nav>

           
        </div>
        
    )
}
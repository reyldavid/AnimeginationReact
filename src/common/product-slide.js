import React, { Component } from 'react';
import { useHistory } from 'react-router';
import { NavLink, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

class ProductSlide extends Component {
    constructor(props) {
        super(props);
    }

    // navigate = () => {
    //     this.props.history.push('product/:' + this.props.prod.ProductID);
    // }

    render() {
        // console.log("Aya prod slide ");
        // console.log(this.props);
        // const history = useHistory();

        return (
            
    <Link to={'/product/:' + this.props.prod.ProductID}>
        {/* <div className="card card-max" onClick={this.navigate}> */}
        <div className="card card-max">
            <img src={'https://reydavid.blob.core.windows.net/anime/' + this.props.prod.ProductCode + '.jpg'}
                className="card-img-top mx-auto image-max" alt="{this.props.prod.ProductCode}" />
            <div className="card-body">
                <div className="card-title blue">{this.props.prod.ProductTitle}</div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>List Price: </td>
                                <td><s>${this.props.prod.UnitPrice.toFixed(2)} </s></td>
                            </tr>
                            <tr>
                                <td>Your Price: </td>
                                <td><strong><span className="text-danger">${this.props.prod.YourPrice.toFixed(2)} </span></strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Link>

        )
    }
}

// export default withRouter(ProductSlide);
export default ProductSlide;
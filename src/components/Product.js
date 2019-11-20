import React, {Component} from 'react';


class Product extends Component{
  render(){
    return(
      
      	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      		<div className="thumbnail">
      			<img alt="iphone 6" src= "https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/6/s/6s_rose_2.jpg" />
      			<div className="caption">
      				<h3> Iphone 6 Plus </h3>
      				<p> 16.000.000 VND </p>
      			</div>
      			<button type="button" className="btn btn-success"> Mua Hang </button>
      		</div>
      	</div>
    );

 }

}
  
 export default Product;
import React from "react";
import { Button } from "@mui/material";

const indiviCard=()=>{
   
    return (
        <div className="flex flex-col items-center justify-center  border-gray border-2 rounded-sm py-4 px-4 mb-8 rounded-s-md hover:shadow-lg hover:border-orange-600" id="category" style={{ width: 'calc(33.333333% - 16px)' }}>
        <div className="flex items-around justify-between w-full mb-6">
            <p className=" text-left text-xl font-medium font-serif mr-2">Biryani</p>
            <div className="bg-red-300 flex items-around justify-center h-20 w-24"></div>
        </div>

        <div className="flex items-around justify-between w-full">
            <p className=" text-left text-xl font-medium font-serif mr-2">₹45/-</p>
            <Button variant="outlined" sx={{ paddingX:5}}>ADD</Button>
        </div>
        

    </div>
    );
}

export default indiviCard;





{/* <div class="grid-wrapper flex" style="
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
">

					
					<div class="deal-item-wrapper" style="
    /* border: 2px solid black; */
//     border-radius: 15px;
//     box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
//     box-shadow: coral;
//     margin-bottom: 28px;
// ">
						

// <div class="card-deal">	
	
// 	<div class="card-deal-inner" style="
//     display: flex;
//     align-items: center;
//     padding-top: 8px;
//     padding-bottom: 8px;
// ">

		
// 		<div class="deal-thumb-image" style="
//     /* height: 40px; */
//     width: 240px;
// ">
// 						<a href="https://lit-coupon.com/deal/%c2%80-3-rabatt-auf-bestellungen-uber-%c2%80-29/" style="
//     height: 40px;
// ">	
						
				// <!-- Ribbon -->
				
// 				<!-- Button -->
									
				
// 				<!-- Image -->
				
// 									<img src="https://lit-coupon.com/wp-content/uploads/2024/07/ali.png" alt="" style="/* width:100%; */height: 80px;">
// 							</a>
// 		</div><!-- end deal-thumb-image -->

// 		<div class="card-deal-info" style="
//     display: flex;
//     flex-direction: column;
//     width: 100%;
// ">
			
// 			<!-- Title -->
// 						<h2 class="card-deal-title" style="width: 100%;"><a href="https://lit-coupon.com/deal/%c2%80-3-rabatt-auf-bestellungen-uber-%c2%80-29/">€ 3 Rabatt auf Bestellungen über € 29</a></h2>
			
// 			<!-- Category -->
			
// 			<div class="card-deal-categories" style="margin-top: 8px;"><a href="https://lit-coupon.com/deal_category/fashion/">Fashion</a></div>
	

// 			<!-- Rating -->
// 			<div class="card-deal-meta-rating" style="
//     margin-top: 8px;
// ">
									
					
// 					<div class="post-star-rating">
// 														<i class="rating-star fa fa-star" data-post-id="1764" data-rating="1"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1764" data-rating="2"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1764" data-rating="3"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1764" data-rating="4"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1764" data-rating="5"></i>
// 												</div>

				
// 			</div>

// 			<!-- Pricing --><div style="
//     display: flex;
// "><h3 style="
//     margin-right: 12px;
//     color: darkgreen;
// ">verified</h3><h4 style="
//     color: mediumblue;
//     font-size: 16px;
// ">used 49 times</h4></div>
			
// 			<!-- Expiring --><div style="
//     display: flex;
//     justify-content: space-between;
// ">
                
// 							<div class="" style="
//     display: flex;
// ">
// 										<div class="card-deal-meta-title" style="
//     margin-right: 4px;
// ">Expires in</div>
// 										<span class="jscountdown-wrap" data-time="2024/07/25" data-short="true">9 days</span>
// 				</div>
			
		
//     <div class="btn-card-deal" href="https://lit-coupon.com/deal/%c2%80-8-rabatt-auf-bestellungen-uber-%c2%80-69/" target="_blank"><i class="icon-Scissor"></i><span>View Coupon</span></div>
// </div>
// </div>

// <!-- end card-deal-info -->

// 	</div><!-- end card-deal-inner -->

// </div><!-- end card-deal -->					</div>

					
// 					<div class="deal-item-wrapper col-xs-6 col-sm-6 col-md-4">
						

// <div class="card-deal">	
	
// 	<div class="card-deal-inner">

		
// 		<div class="deal-thumb-image">
// 						<a href="https://lit-coupon.com/deal/%c2%80-8-rabatt-auf-bestellungen-uber-%c2%80-69/">	
						
// 				<!-- Ribbon -->
				
// 				<!-- Button -->
// 									<div class="btn-card-deal"><i class="icon-Scissor"></i><span>View Coupon</span></div>
				
// 				<!-- Image -->
				
// 									<img src="https://lit-coupon.com/wp-content/uploads/2024/07/ali.png" alt="" style="width:100%; height:220px">
// 							</a>
// 		</div><!-- end deal-thumb-image -->

// 		<div class="card-deal-info">
			
// 			<!-- Title -->
// 						<h2 class="card-deal-title" style="width:60%"><a href="https://lit-coupon.com/deal/%c2%80-8-rabatt-auf-bestellungen-uber-%c2%80-69/">€ 8 Rabatt auf Bestellungen über € 69</a></h2>
			
// 			<!-- Category -->
			
// 			<div class="card-deal-categories"><a href="https://lit-coupon.com/deal_category/fashion/">Fashion</a></div>
	

// 			<!-- Rating -->
// 			<div class="card-deal-meta-rating">
									
					
// 					<div class="post-star-rating">
// 														<i class="rating-star fa fa-star" data-post-id="1765" data-rating="1"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1765" data-rating="2"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1765" data-rating="3"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1765" data-rating="4"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1765" data-rating="5"></i>
// 												</div>

				
// 			</div>

// 			<!-- Pricing -->
			
// 			<!-- Expiring -->
// 							<div class="card-deal-meta-expiring">
// 										<div class="card-deal-meta-title">Expires in</div>
// 										<span class="jscountdown-wrap" data-time="2024/07/25" data-short="true">9 days</span>
// 				</div>
			
// 		</div><!-- end card-deal-info -->

// 	</div><!-- end card-deal-inner -->

// </div><!-- end card-deal -->					</div>

					
// 					<div class="deal-item-wrapper col-xs-6 col-sm-6 col-md-4">
						

// <div class="card-deal">	
	
// 	<div class="card-deal-inner">

		
// 		<div class="deal-thumb-image">
// 						<a href="https://lit-coupon.com/deal/%c2%80-20-rabatt-auf-bestellungen-uber-%c2%80-169/">	
						
// 				<!-- Ribbon -->
				
// 				<!-- Button -->
// 									<div class="btn-card-deal"><i class="icon-Scissor"></i><span>View Coupon</span></div>
				
// 				<!-- Image -->
				
// 									<img src="https://lit-coupon.com/wp-content/uploads/2024/07/ali.png" alt="" style="width:100%; height:220px">
// 							</a>
// 		</div><!-- end deal-thumb-image -->

// 		<div class="card-deal-info">
			
// 			<!-- Title -->
// 						<h2 class="card-deal-title" style="width:60%"><a href="https://lit-coupon.com/deal/%c2%80-20-rabatt-auf-bestellungen-uber-%c2%80-169/">€ 20 Rabatt auf Bestellungen über € 169</a></h2>
			
// 			<!-- Category -->
			
// 			<div class="card-deal-categories"><a href="https://lit-coupon.com/deal_category/fashion/">Fashion</a></div>
	

// 			<!-- Rating -->
// 			<div class="card-deal-meta-rating">
									
					
// 					<div class="post-star-rating">
// 														<i class="rating-star fa fa-star" data-post-id="1766" data-rating="1"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1766" data-rating="2"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1766" data-rating="3"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1766" data-rating="4"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1766" data-rating="5"></i>
// 												</div>

				
// 			</div>

// 			<!-- Pricing -->
			
// 			<!-- Expiring -->
// 							<div class="card-deal-meta-expiring">
// 										<div class="card-deal-meta-title">Expires in</div>
// 										<span class="jscountdown-wrap" data-time="2024/07/25" data-short="true">9 days</span>
// 				</div>
			
// 		</div><!-- end card-deal-info -->

// 	</div><!-- end card-deal-inner -->

// </div><!-- end card-deal -->					</div>

					
// 					<div class="deal-item-wrapper col-xs-6 col-sm-6 col-md-4">
						

// <div class="card-deal">	
	
// 	<div class="card-deal-inner">

		
// 		<div class="deal-thumb-image">
// 						<a href="https://lit-coupon.com/deal/%c2%80-50-rabatt-auf-bestellungen-uber-%c2%80-369/">	
						
// 				<!-- Ribbon -->
				
// 				<!-- Button -->
// 									<div class="btn-card-deal"><i class="icon-Scissor"></i><span>View Coupon</span></div>
				
// 				<!-- Image -->
				
// 									<img src="https://lit-coupon.com/wp-content/uploads/2024/07/ali.png" alt="" style="width:100%; height:220px">
// 							</a>
// 		</div><!-- end deal-thumb-image -->

// 		<div class="card-deal-info">
			
// 			<!-- Title -->
// 						<h2 class="card-deal-title" style="width:60%"><a href="https://lit-coupon.com/deal/%c2%80-50-rabatt-auf-bestellungen-uber-%c2%80-369/">€ 50 Rabatt auf Bestellungen über € 369</a></h2>
			
// 			<!-- Category -->
			
// 			<div class="card-deal-categories"><a href="https://lit-coupon.com/deal_category/fashion/">Fashion</a></div>
	

// 			<!-- Rating -->
// 			<div class="card-deal-meta-rating">
									
					
// 					<div class="post-star-rating">
// 														<i class="rating-star fa fa-star" data-post-id="1767" data-rating="1"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1767" data-rating="2"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1767" data-rating="3"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1767" data-rating="4"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1767" data-rating="5"></i>
// 												</div>

				
// 			</div>

// 			<!-- Pricing -->
			
// 			<!-- Expiring -->
// 							<div class="card-deal-meta-expiring">
// 										<div class="card-deal-meta-title">Expires in</div>
// 										<span class="jscountdown-wrap" data-time="2024/07/25" data-short="true">9 days</span>
// 				</div>
			
// 		</div><!-- end card-deal-info -->

// 	</div><!-- end card-deal-inner -->

// </div><!-- end card-deal -->					</div>

					
// 					<div class="deal-item-wrapper col-xs-6 col-sm-6 col-md-4">
						

// <div class="card-deal">	
	
// 	<div class="card-deal-inner">

		
// 		<div class="deal-thumb-image">
// 						<a href="https://lit-coupon.com/deal/%c2%80-30-rabatt-auf-bestellungen-uber-%c2%80-239/">	
						
// 				<!-- Ribbon -->
				
// 				<!-- Button -->
// 									<div class="btn-card-deal"><i class="icon-Scissor"></i><span>View Coupon</span></div>
				
// 				<!-- Image -->
				
// 									<img src="https://lit-coupon.com/wp-content/uploads/2024/07/ali.png" alt="" style="width:100%; height:220px">
// 							</a>
// 		</div><!-- end deal-thumb-image -->

// 		<div class="card-deal-info">
			
// 			<!-- Title -->
// 						<h2 class="card-deal-title" style="width:60%"><a href="https://lit-coupon.com/deal/%c2%80-30-rabatt-auf-bestellungen-uber-%c2%80-239/">€ 30 Rabatt auf Bestellungen über € 239</a></h2>
			
// 			<!-- Category -->
			
// 			<div class="card-deal-categories"><a href="https://lit-coupon.com/deal_category/fashion/">Fashion</a></div>
	

// 			<!-- Rating -->
// 			<div class="card-deal-meta-rating">
									
					
// 					<div class="post-star-rating">
// 														<i class="rating-star fa fa-star" data-post-id="1768" data-rating="1"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1768" data-rating="2"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1768" data-rating="3"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1768" data-rating="4"></i>
// 															<i class="rating-star fa fa-star" data-post-id="1768" data-rating="5"></i>
// 												</div>

				
// 			</div>

// 			<!-- Pricing -->
			
// 			<!-- Expiring -->
// 							<div class="card-deal-meta-expiring">
// 										<div class="card-deal-meta-title">Expires in</div>
// 										<span class="jscountdown-wrap" data-time="2024/07/25" data-short="true">9 days</span>
// 				</div>
			
// 		</div><!-- end card-deal-info -->

// 	</div><!-- end card-deal-inner -->

// </div><!-- end card-deal -->					</div>

					 

					
// 				</div> */}
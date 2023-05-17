import styled from "styled-components";


export const AboutMainStyled = styled.div`

	background:  linear-gradient(#003390, #0A1744);
	width: 100%;
	height: 1400px;
	color:white;
	display:flex;
	flex-direction:column;
	align-items:center ;
	justify-content:space-evenly;
		h1{
			margin:0px;
			text-align: left;
			font-size:40px;
		}
		@media screen and (max-width: 1516px) {
			height: 1400px;
			
		};
		@media screen and (max-width: 970px) {
			height: 2700px;
			
		};
		@media screen and (max-width: 414px) {
			height: 3800px;

			
	};  
	
`

export const AboutTextAndImageStyle = styled.div`
	width:90%;
	height:550px; 
	display:flex;
	align-items:center ;
	justify-content:space-between;
	padding-top:100px;
	
	#titleAndTextContent{
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		letter-spacing:0px;
		width: 55%;
		height:100%;
		font-size:20px;
	   
		font: normal normal normal 20px/37px Rubik;
		h1 {
		  font-weight: bold;
		  font: normal normal bold 82px/90px Rubik;
		}
		p{
			padding-top:20px;
		}
	};
	#aboutImageContent{
		
		display:flex;
		justify-content:flex-end;  
		color:black;
			img{
				width:100%;
				height:500px;
				
			};
	};
	@media screen and (max-width: 1516px) {

		width: 90%; 
		height: 380px;
		display:flex;
		justify-content:space-between;
		margin-top:0px;
		#titleAndTextContent{
			width:55%;
			height:400px;
			margin:5px;
			font: normal normal normal 17px/29px Rubik;
			h1{
				font: normal normal bold 60px/65px Rubik;
				
			}
		};
		#aboutImageContent{
		   
			justify-content:flex-end;
			height:380px;
			img{
				width:100%;
				height:100%;
				
			}
		};
	
	};
	@media screen and (max-width: 1170px) {

		width: 100%;
		height:400px;
		display:flex;
		justify-content:space-between;

			#titleAndTextContent{
				width:60%;
				justify-content:space-around;
			 
			};
			#aboutImageContent{
				
				img{
				   width:95%;
				}
			};
			
	};
	@media screen and (max-width: 970px) {

			display:flex;
			flex-direction:column;
			height:900px;
			#titleAndTextContent{
				width:90%;
				height:100%;
				p{
					margin: "0px";
					color: #e6e6e6 ;
					font: normal normal normal 17px/30px Rubik;              
				}
			};
			#aboutImageContent{
				width:100%;
				height:400px;
   
			};
		
		};
	@media screen and (max-width: 800px) {
		
		#titleAndTextContent{

			width:90%;
			justify-content:space-between;
			margin:0px;
				h1{
				
					font: normal normal bold 45px/50px Rubik;
					
				}
			};
			#aboutImageContent{

				width:80%;
				height:400px;
				margin-top:20px;

			};
	};
	@media screen and (max-width: 414px) {
			
		height:1050px;
			#titleAndTextContent{        
				
				h1{
					font: bold 37px Rubik;
				   
				}
				p{
					padding-top:20px;
				}

			};
			#aboutImageContent{
				width:100%;
				margin-top:10px;
				justify-content:center;
			};
	};
`

export const AboutUsStyle = styled.div`

	width:90%;
	height:450px;
	display:flex;
	flex-direction:column;
	justify-content:space-between ;

		h2{
			font-weight:bold;
			font-size:45px;
		};
		#itensPositions{
			display:flex;
			flex-direction:row;
			justify-content:space-between;
		   
		};
		#developersDataContent{
			width:19%;
			height:350px;
			background-color:#0B1A57; 
			display:flex;
			flex-direction:column;
			align-items:center;
			justify-content:space-evenly;
			border: 1px solid #FFFFFF24;
			border-radius: 10px;
			font: normal normal bold 27px/30px Rubik;
				#developersImage{
					width:120px;
					height:120px;
					border-radius:100%;
				
				}
				h3{
					color: #72EFDB;
					font-weight: "bold";
				}
				p{
					font: normal normal normal 15px/22px Rubik;
					letter-spacing: 0.23px;
					color:#bfbfbf;
					text-align:center;
					display:flex;
					align-items:center;
					width:80%;
					height:100px;
				   
				}
				#iconsBoxContent{
					display:flex;
					flex-direction:row;
					justify-content:space-around;
					width:50%;
				};
		};
		@media screen and (max-width: 1550px) {
			h2{
				font-size:35px;
			}
			#developersDataContent{
				
				h3{
					font-size:19px;
				}
				p{
					font: normal normal normal 13px/20px Rubik;
				}
			}
		};
		@media screen and (max-width: 1170px) {

			width: 100%; 
			h2{
				font-size:35px;
			}
			#developersDataContent{

				h3{
					font-size:19px;
				}
				p{
					font: normal normal normal 13px/20px Rubik;
				}
			} 
		};
		@media screen and (max-width: 970px) {
			height:1600px;
			justify-content:space-evenly;
				h2{
				   margin-left:40px;
				}
				#itensPositions{  
					width:100%;
					height:90%;
					flex-direction:column;
					align-items:center;
					justify-content:space-around;
				};
				#developersDataContent{
					width:90%;
					height:270px;
					justify-content:space-evenly;
					#developersImage{
						width:110px;
						height:110px;
						border-radius:100%;
				
					} 
					p{
						height:30px;
					}
				};
		};
		@media screen and (max-width: 414px) {
			height:3000px;
			margin-top:50px;
				h2{
					text-align:start;
					margin-left:20px;
					font-size:30px;
					
				};
				#itensPositions{  
					height:95%;
					justify-content:space-evenly;
				
				};
				#developersDataContent{
					height:471px;
					padding:30px;
					h3{
						font: normal normal bold 24px/28px Rubik;
					}
					p{
						font: normal normal normal 18px/24px Rubik;
						height:150px;
						letter-spacing: 0.23px;
						
					}
					#developersImage{
						width:150px;
						height:150px;
						border-radius:100%;
				
					} 
				};  
		};
`

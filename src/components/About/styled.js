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
            height: 1100px;
            
        };
        @media screen and (max-width: 970px) {
            height: 2300px;
            
        };
        @media screen and (max-width: 414px) {
            background:  linear-gradient(#003390, #0A1744, #0A1744);
            
        };  
    
`

export const AboutTextAndImageStyle = styled.div`

    /* width:90%; */
    height:550px; 
    display:flex;
    align-items:center ;
    justify-content:space-around;
     /* background-color:red;  */
    margin-top:100px;
    #titleAndTextContent{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        letter-spacing:0px;
        width: 45%;
        height:100%;
        font-size:20px;
       /*  background-color:green;  */
        font: normal normal normal 21px/38px Rubik;
        h1 {
          font-weight: bold;
          font: normal normal bold 82px/90px Rubik;
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
           /*  height:400px; */
            justify-content:space-around;
            margin:5px;
            font: normal normal normal 16px/28px Rubik;
            h1{
                font: normal normal bold 50px/55px Rubik;
            }
        };
        #aboutImageContent{
           
            /* background-color:yellow; */
            justify-content:flex-end;
            height:100%;
            img{
                width:85%;
                height:100%;
                
            }
        };
    
};
    @media screen and (max-width: 1170px) {

        width: 100%;
        height:350px;
        display:flex;
        justify-content:space-between;
        background-color:red;
        
            #titleAndTextContent{
                width:60%;
                justify-content:space-around;
                font: normal normal normal 13px/25px Rubik;
            };
            #aboutImageContent{
                width:350px;
                img{
                   background-color:yellow;
                   width:95%;
                }
            };
            
    };
    @media screen and (max-width: 800px) {

        height:850px;
        display:flex;
        flex-direction:column;
        margin-top:20px;
            #titleAndTextContent{
                width:90%;
                justify-content:space-around;
                font: normal normal normal 14px/26px Rubik;
               /*  background-color:darkblue; */
                margin:0px;
                    h1{
                        font: normal normal bold 35px/25px Rubik;
                    }
            };
            #aboutImageContent{
                width:80%;
                height:400px;
              
                /* background-color:gray; */
                
            };
    };
    @media screen and (max-width: 414px) {
            #aboutImageContent{
                justify-content:center;

            };
            #aboutImageContent{
                img{
                    width:90%;

                }
            };
    };
`

export const AboutUsStyle = styled.div`

    width:90%;
    height:450px;
    display:flex;
    flex-direction:column;
    justify-content:space-between ;
    /*  background-color:yellow; */
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
            width:19.5%;
            height:350px;
            background-color:#0B1A57; 
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-evenly;
            border: 1px solid #FFFFFF24;
            border-radius: 10px;
            font: normal normal bold 28px/31px Rubik;
                #developersImage{
                    width:150px;
                    height:150px;
                    border-radius:100%;
                
                }
                h3{
                    color: #72EFDB;
                    font-weight: "bold";
                }
                p{
                    font: normal normal normal 19px/25px Rubik;
                    letter-spacing: 0.23px;
                    color:#bfbfbf;
                    text-align:center;
                }
                #iconsBoxContent{
                    display:flex;
                    flex-direction:row;
                    justify-content:space-around;
                    width:50%;
                };
        };
        @media screen and (max-width: 1550px) {
            #developersDataContent{

                h3{
                    font-size:21px;
                }
                p{
                    font: normal normal normal 17px/23px Rubik;
                }
            }
        };
        @media screen and (max-width: 1170px) {
            width: 100%; 
           /* background-color:red; */
           h2{
            font-size:35px;
           }
           #developersDataContent{

                h3{
                    font-size:19px;
                }
                p{
                    font: normal normal normal 15px/21px Rubik;
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
                    justify-content:space-around; 
                };
        };
        @media screen and (max-width: 414px) {
            height:1600px;
                h2{
                    text-align:start;
                    margin-left:20px;
                    width:200px;
                   
                }
              
        };
`

import styled from "styled-components";


export const AboutMainStyled = styled.div`

    background-image: linear-gradient(#1E3E9B,#0A1720);
    width: 100%;
    height: 1000px;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center ;
    justify-content:center ;
        h1{
            margin:0px;
            text-align: left;
            font-size:40px;
        }
        @media screen and (max-width: 970px) {
            height: 2800px;
            
        };  
    
`

export const AboutTextAndImageStyle = styled.div`

    width:90%;
    height:300px;
    display:flex;
    align-items:center ;
    justify-content:space-around;
    #titleAndTextContent{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        font-size: 22px ;
        width: 45%;
        height:100%;
        color: #FCFCFC;
    };
    #aboutImageContent{

        display:flex;
        justify-content:flex-end;  
        color:black;

       
            img{
             width:400px;
                height:350px;
            };
    };
    @media screen and (max-width: 1170px) {

        width: 100%;
        height:350px;
        display:flex;
        justify-content:space-between;
            #titleAndTextContent{
                width:50%;
                justify-content:space-around;
                margin:5px;
            };
            #aboutImageContent{
                width:50%;
            };
            
    };
    @media screen and (max-width: 800px) {

        height:800px;
        display:flex;
        flex-direction:column;
            #titleAndTextContent{
                width:90%;
                justify-content:space-around;
              
            };
            #aboutImageContent{
                width:100%;
            };
    };
    @media screen and (max-width: 410px) {
            
            #aboutImageContent{
                img{
                    width:100%;
                }
            };
    };
`

export const AboutUsStyle = styled.div`

    width:85%;
    height:500px;
    display:flex;
    flex-direction:column;
    justify-content:center ;
        #itensPositions{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
        };
        #developersDataContent{
            width:19%;
            height:300px;
            background-color:#0B1A49; 
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            border: 1px solid #FFFFFF24;
            border-radius: 10px;
                #developersImage{
                    width:100px;
                    height:100px;
                    border-radius:100%;
                
                };
                p{
                    width:80%;
                    text-align:center;
                };
                #iconsBoxContent{
                    display:flex;
                    flex-direction:row;
                    justify-content:space-around;
                    width:50%;
                };
        };
        @media screen and (max-width: 1170px) {
            width: 100%;   
        };
        @media screen and (max-width: 970px) {
            height:1600px;
                h2{
                    text-align:center;
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
                    height:250px;
                    justify-content:space-around; 
                };
        };
`

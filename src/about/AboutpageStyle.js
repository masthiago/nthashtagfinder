import styled from "styled-components";


export const AboutMainStyled = styled.div`
    background-image: linear-gradient(#1E3E7B,#0A1744);
    width: 100vw;
    height: 1000px;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center ;
    justify-content:center ;
    
    h1{
        margin:0px;
        text-align: left;
        font: normal normal bold 62px/70px Rubik;
    }
`

export const AboutTextAndImageStyle = styled.div`
     /*  background-color:red;  */
    width:90%;
    height:300px;
    display:flex;
    align-items:center ;
    justify-content:space-around;
    #titleAndTextContent{
       
     /*    background-color:green; */
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        font: normal normal normal 18px/20px Rubik;
        width: 45%;
        height:100%;
        color: #FCFCFC;
        
    };
    #aboutImageContent{
    
       /*  background-color:white;  */
        display:flex;
        justify-content:flex-end;  
        color:black;
        img{
           width:400px;
            height:350px;
           /*  background-color:green; */
        }
    };

`

export const AboutUsStyle = styled.div`
        width:85%;
        height:500px;
        /* background-color:goldenrod; */
        display:flex;
        flex-direction:column;
        justify-content:center ;
    #itensPositions{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
       /*  background-color:yellow; */
    };
    #developersDataContent{
      
        width:19%;
        height:300px;
        /* background-color:#0B1A49; */
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
          /*   background-color:yellow; */
        }

    };
`

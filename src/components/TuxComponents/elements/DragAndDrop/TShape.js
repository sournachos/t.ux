import styled from 'styled-components'
import { Poppins } from '../../utilities/Type'
import { grey_text, tux_blue } from '../../utilities/Colors'

export const DnDActivity = styled.div`
    position:relative;
    width: 749px; //38em
    height: 460px; //26em
    background-color: #FAFCFE;
    font-family: ${Poppins};
    // padding: 21px 60px 40px 60px      <---in case padding needs to be added
`;

export const DnDTitle = styled.div`
    width: 669px;
    height: 28px;
    margin-left: 40px;
    font-size: 20px;
    text-align: center;
`;

export const DnDBoxOne = styled.div`
    position:absolute;
    margin-top: 154px;
    left: 0;
    width: 300px; //47.6190476%
    height: 242px; //60.5%
    border: 2px solid ${tux_blue};
    border-radius: 5px;
    background-color: rgba(120, 214, 218, 0.1);

`;

export const DnDItemBoxTitle = styled.p`
    position: absolute;
    top:-18%;
    white-space: nowrap;
    font-size: 20px;

`;

export const DnDBoxTwo = styled.div`
    position:absolute;
    margin-top: 154px;
    right: 0;
    width: 300px; //47.6190476%
    height: 242px; //60.5%
    border: 2px solid ${tux_blue};
    border-radius: 5px;
    background-color: rgba(120, 214, 218, 0.1);

    &::before{
        position:relative;
        top:-11%;
        content: "${(props) => props.titleRight}";
        white-space: nowrap;
        font-family: ${Poppins};
        font-size: 20px;
    }
    
`;

export const DnDItemBox = styled.div`
    position:absolute;
    margin-top: 21px;
    margin-left: 232px;
    z-index: 3;
    //top: 5.25%;
    //left: 27.4603175%;
    width: 285px; //45.2380952%
    height: 53px; //13.25%
    background-color: rgba(136, 136, 136, 0.1);
    border: 2px solid ${grey_text};

    &::before{
    content: "Answer Tile Will Populate Here";
    font-size: 16px;
    color: ${grey_text};
    text-align: center;
    position: relative;
    top: 1.2em;
    left: 1.5em;
    }

`;

export const DnDImg = styled.img`
    height: 8%;
    width: 8%;
    position: absolute;
    top: 30%;
    left: 45%;
    
`;

export const DnDPlaceholdText = styled.div`
    &::before{
    content: "Drag and Drop Term Here";
    position: absolute;
    top: 40%;
    left: 10%;
    width: fit-content;
    font-family: ${Poppins};
    font-size: 20px;
    color: ${grey_text};
    }

`;